import React from "react";

class EmployeeForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            errors: []
        }

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
        if (data.age === "") {
            errors.push({message: "Age must be selected"});
        }

        //validate age is numeric
        if (isNaN(parseInt(data.age))) {
            errors.push({message: "Age must be numeric"});
        }

        //validate age is between 20 and 70
        if (parseInt(data.age) < 20 || parseInt(data.age) > 70) {
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
            age: data.age,
            employeeType: data.employeeType,
            department: data.department,
            title: data.title,
            dateOfJoining: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10)
        }

        this.props.onSubmit(employee);
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


        return <main className="container">
            <section className="row">
                <div className="col-md-12">
                    <h3>Create Employee</h3>
                    <form className="form" action="" onSubmit={this.handleSubmit} method="post" id="insert_form">
                        <p>Enter new employee details</p>
                        <div className="grid">
                            <div>
                                <label htmlFor="firstName" className="placeholder">First Name</label>
                                <input type="text" className="input" id="firstName" name="firstName" required/>

                            </div>
                            <div>
                                <label htmlFor="lastName" className="placeholder">Last Name</label>
                                <input type="text" className="input" id="lastName" name="lastName" required/>
                            </div>
                        </div>

                        <div className="grid">
                            <div>
                                <label htmlFor="age" className="placeholder">Age</label>
                                <input type="text" className="input" id="age" name="age" required/>
                            </div>

                            <div>
                                <label htmlFor="employeeType" className="placeholder">Employee Type</label>
                                <select className="input" id='employeeType' name='employeeType' defaultValue={''}
                                        required>
                                    <option value="" disabled>Select...</option>
                                    <option value="FULL_TIME">Full Time</option>
                                    <option value="PART_TIME">Part Time</option>
                                    <option value="CONTRACT">Contract</option>
                                    <option value="SEASONAL">Seasonal</option>
                                </select>
                            </div>

                        </div>

                        <div className="grid">
                            <div>
                                <label htmlFor="department" className="placeholder">Department</label>
                                <select className="input" id='department' name='department' defaultValue={''} required>
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
                                <select className="input" id='title' name='title' defaultValue={''} required>
                                    <option value="" disabled>Select...</option>
                                    <option value="Employee">Employee</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Director">Director</option>
                                    <option value="VP">VP</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="submit">Submit</button>
                    </form>
                </div>
            </section>
        </main>;
    }
}

export default EmployeeForm;