import React from "react";

class EmployeeSearch extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeEmployeeType = this.handleChangeEmployeeType.bind(this);
        this.handleChangeDepartment = this.handleChangeDepartment.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.state = {
            filters: this.props.filters
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        let filters = {
            department: null,
            title: null,
            employeeType: null
        };

        if (data.employeeType !== "") {
            filters.employeeType = data.employeeType;
        }

        if (data.department !== "") {
            filters.department = data.department;
        }

        if (data.title !== "") {
            filters.title = data.title;
        }

        this.props.onSubmit(filters);
    }

    handleChangeEmployeeType(event) {
        this.setState({
            filters: {
                ...this.state.filters,
                employeeType: event.target.value
            }
        });
    }

    handleChangeDepartment(event) {
        this.setState({
            filters: {
                ...this.state.filters,
                department: event.target.value
            }
        });
    }

    handleChangeTitle(event) {
        this.setState({
            filters: {
                ...this.state.filters,
                title: event.target.value
            }
        });
    }

    render() {
        return <div className="container">
            <section className="row">
                <div className="col-md-12">
                    <h3>Search</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="employeeType">Employee Type</label>
                            <select id="employeeType" name="employeeType" className="form-control"
                                    value={this.state.filters.employeeType ?? ""}
                                    onChange={this.handleChangeEmployeeType}>
                                <option value="">All</option>
                                <option value="FULL_TIME">Full Time</option>
                                <option value="PART_TIME">Part Time</option>
                                <option value="CONTRACT">Contract</option>
                                <option value="SEASONAL">Seasonal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="department">Department</label>
                            <select id="department" name="department" className="form-control"
                                    value={this.state.filters.department ?? ""} onChange={this.handleChangeDepartment}>
                                <option value="">All</option>
                                <option value="IT">IT</option>
                                <option value="HR">HR</option>
                                <option value="Finance">Finance</option>
                                <option value="Sales">Sales</option>
                                <option value="Marketing">Marketing</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <select id="title" name="title" className="form-control"
                                    value={this.state.filters.title ?? ""} onChange={this.handleChangeTitle}>
                                <option value="">All</option>
                                <option value="Employee">Employee</option>
                                <option value="Manager">Manager</option>
                                <option value="Director">Director</option>
                                <option value="VP">VP</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Search</button>
                    </form>
                </div>
            </section>
        </div>;
    }
}

export default EmployeeSearch;
