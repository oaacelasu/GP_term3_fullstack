import React from "react";
import {NEW_EMPLOYEE, GET_EMPLOYEE, EDIT_EMPLOYEE} from "./graphql";
import AppLoader from "./AppLoader.jsx";
import {buildQuery, getParam} from "./Utils.jsx";
import {Link} from "react-router-dom";


const CreateLinks = (data) => <nav>
    <h1 style={{marginTop: "15px"}}>Create</h1>
    <ul>
        <li><Link to={{pathname: '/dashboard', search: `?${data.query}`}}>Dashboard</Link></li>
    </ul>
</nav>

const EditLinks = (data) => <nav>
    <h1 style={{marginTop: "15px"}}>Edit</h1>
    <ul>
        <li><Link to={{pathname: '/dashboard', search: `?${data.query}`}}>Dashboard</Link></li>
    </ul>
</nav>


class EmployeeForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createEmployee = this.createEmployee.bind(this);
        this.searchQuery = new Map(props.searchParams);
        this.employeeId = props.params.id;
        this.state = {
            employee: null,
            loading: false,
            error: null,
            errors: []
        }
    }

    calculateAge(birthDate) {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    getDateFromISO8601(isostr) {
        return isostr?new Date(isostr).toISOString().substr(0, 10):''
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        const errors = [];

        //validate first name is at least 2 characters long
        if (data.firstName.length < 2) {
            errors.push({message: "First name must be at least 2 characters long"});
        }

        //validate last name is at least 2 characters long
        if (data.lastName.length < 2) {
            errors.push({message: "Last name must be at least 2 characters long"});
        }

        //validate age is selected
        if (data.dateOfBirth === "") {
            errors.push({message: "Date of birth must be selected"});
        }

        // Calculate the age based on the current date
        const birthDate = new Date(data.dateOfBirth);

        // Calculate the current age and date of retirement
        const age = this.calculateAge(birthDate);
        const dateOfRetirement = new Date(birthDate.setFullYear(birthDate.getFullYear() + 65));

        if (age < 20 || age > 70) {
            errors.push({message: "Age must be between 20 and 70"});
        }

        if (data.employeeType === "") {
            errors.push({message: "Employee type must be selected"});
        }

        //validate department is selected
        if (data.department === "") {
            errors.push({message: "Department must be selected"});
        }

        //validate date of joining is selected
        if (data.dateOfJoining === "") {
            errors.push({message: "Date of joining must be selected"});
        }

        if (errors.length > 0) {
            this.setState({errors: errors});
            return;
        }

        const employee = {
            firstName: data.firstName,
            lastName: data.lastName,
            dateOfBirth: birthDate,
            dateOfRetirement: dateOfRetirement,
            age: age,
            employeeType: data.employeeType,
            department: data.department,
            title: data.title,
            currentStatus: data.currentStatus === "on",
            dateOfJoining: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10)
        }

        if (this.employeeId) {
            employee.id = this.employeeId;
            this.editEmployee(employee);
        } else {
            employee.currentStatus = true;
            this.createEmployee(employee);
        }
    }

    createEmployee(employee) {
        console.log("createEmployee");
        this.setState({
            loading: true,
            error: null
        })
        const query = NEW_EMPLOYEE(employee);

        fetch('/graphql', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query})
        }).then(response => response.json()).then(result => {
            this.props.navigate('/dashboard');
        }).catch(error => {
            this.setState({
                error,
                loading: false
            })
        });
    }

    editEmployee(employee) {
        console.log("editEmployee");
        this.setState({
            loading: true,
            error: null
        })
        const query = EDIT_EMPLOYEE(employee);

        fetch('/graphql', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query})
        }).then(response => response.json()).then(result => {
            this.props.navigate('/dashboard');
        }).catch(error => {
            this.setState({
                error,
                loading: false
            })
        });
    }

    fetchEmployee() {
        this.setState({
            employee: null,
            loading: true,
            error: null
        })

        const data = {
            id: this.employeeId
        }

        let query = GET_EMPLOYEE(data);

        return fetch('/graphql', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query: query}),
        }).then(response => response.json()).then(result => {
            this.setState({
                employee: result.data.employee,
                loading: false
            })
        }).catch(error => {
            this.setState({
                error,
                loading: false
            })
        })
    }


    componentDidMount() {
        if (this.employeeId) {
            this.fetchEmployee()
        }
    }

    buildHeader() {
        if (this.employeeId) {
            return <div>
                <h3>Edit Employee</h3>
                {this.state.employee?.id != null &&
                <p>
                    Employee ID: {this.state.employee?.id || 'Loading...'}
                </p>
                }
            </div>
        }
        return <div>
            <h3>Create Employee</h3>
            <p>Enter new employee details</p>
        </div>
    }

    render() {
        if (this.state.errors.length > 0) {
            return <div className={"container"}>
                <h3>Error</h3>
                <article>
                    <h4>Review the following errors</h4>
                    <ul>
                        {this.state.errors.map(error => <li>{error.message}</li>)}
                    </ul>
                </article>
                <button onClick={() => this.setState({errors: []})}>Review</button>
            </div>;
        }


        if (this.state.error) {
            return <div className={"container"}>
                <h3>Error</h3>
                <article>
                    <h4>Something went wrong</h4>
                    <p>{this.state.error.message}</p>
                </article>

                <button onClick={() => this.setState({error: null})}>Review</button>
            </div>;
        }

        if (this.state.employee === null && this.employeeId) {
            return <div className={"container"}>
                <h3>Error</h3>
                <article>
                    <h4>Employee not found</h4>
                    <p>Employee with ID {this.employeeId} not found</p>
                </article>
            </div>;
        }

        if (!this.state.employee && this.loading) {
            return <AppLoader isLoading={this.state.loading}/>
        }


        return <main className="container">
            <AppLoader isLoading={this.state.loading}/>
            {this.employeeId ? <EditLinks query={buildQuery(this.searchQuery)}/> :
                <CreateLinks query={buildQuery(this.searchQuery)}/>}
            <section className="row">
                <div className="col-md-12">
                    {this.buildHeader()}
                    <form className="form" action="" onSubmit={this.handleSubmit} method="post" id="insert_form">

                        <div className="grid">
                            <div>
                                <label htmlFor="firstName" className="placeholder">First Name</label>
                                <input type="text" className="input" id="firstName" name="firstName"
                                       defaultValue={this.state.employee?.firstName || ''}
                                       readOnly={!!this.state.employee?.firstName}
                                       required/>
                            </div>
                            <div>
                                <label htmlFor="lastName" className="placeholder">Last Name</label>
                                <input type="text" className="input" id="lastName" name="lastName"
                                       defaultValue={this.state.employee?.lastName || ''}
                                       readOnly={!!this.state.employee?.lastName}

                                       required/>
                            </div>
                        </div>

                        <div className="grid">
                            {this.employeeId && <div>
                                <label htmlFor="age" className="placeholder">Age</label>
                                <input type="text" className="input" id="age" name="age"
                                       defaultValue={this.state.employee?.age || ''}
                                       readOnly={!!this.state.employee?.age}
                                       required/>
                            </div>}

                            <div>
                                <label htmlFor="dateOfBirth" className="placeholder">Date of Birth</label>
                                <input
                                    type="date"
                                    className="input"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    defaultValue={this.getDateFromISO8601(this.state.employee?.dateOfBirth)}
                                    readOnly={!!this.state.employee?.dateOfBirth}
                                    required
                                />
                            </div>

                            {
                                this.state.employee?.employeeType ?
                                    <div>
                                        <label htmlFor="employeeType" className="placeholder">Employee Type</label>
                                        <input type="text" className="input" id="employeeType" name="employeeType"
                                               defaultValue={this.state.employee?.employeeType || ''}
                                               readOnly={true}
                                               required/>
                                    </div>
                                    :
                                    <div>
                                        <label htmlFor="employeeType" className="placeholder">Employee Type</label>
                                        <select className="input" id='employeeType' name='employeeType'
                                                defaultValue={this.state.employee?.employeeType || ''}
                                                disabled={!!this.state.employee?.employeeType}
                                                required>
                                            <option value="" disabled>Select...</option>
                                            <option value="FULL_TIME">Full Time</option>
                                            <option value="PART_TIME">Part Time</option>
                                            <option value="CONTRACT">Contract</option>
                                            <option value="SEASONAL">Seasonal</option>
                                        </select>
                                    </div>

                            }


                        </div>

                        <div className="grid">
                            <div>
                                <label htmlFor="department" className="placeholder">Department</label>
                                <select className="input" id='department' name='department'
                                        defaultValue={this.state.employee?.department || ''} required>
                                    <option value="" disabled>Select...</option>
                                    <option value="IT">IT</option>
                                    <option value="HR">HR</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Sales">Sales</option>
                                    <option value="Marketing">Marketing</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="title" className="placeholder">Title</label>
                                <select className="input" id='title' name='title'
                                        defaultValue={this.state.employee?.title || ''} required>
                                    <option value="" disabled>Select...</option>
                                    <option value="Employee">Employee</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Director">Director</option>
                                    <option value="VP">VP</option>
                                </select>
                            </div>
                        </div>
                        {this.employeeId && <div className="grid">
                            <div>
                                <label htmlFor="currentStatus" className="placeholder">
                                    <input type="checkbox" className="input" id="currentStatus" name="currentStatus"
                                           role={"switch"}
                                           defaultChecked={this.state.employee?.currentStatus || false}/>
                                    Current Status
                                </label>
                            </div>
                        </div>}

                        {this.employeeId ? <button type="submit" className="submit">Update</button>
                            : <button type="submit" className="submit">Create</button>}
                    </form>
                </div>
            </section>
        </main>;
    }
}

export default getParam(EmployeeForm);