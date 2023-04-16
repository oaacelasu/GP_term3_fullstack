import React from "react";
import {getParam} from "./Utils.jsx";
import {Link} from "react-router-dom";


class EmployeeTable extends React.Component {

    constructor(props) {
        super(props);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    getPrettyDate(date) {
        const d = new Date(date);
        return d.toLocaleDateString();
    }

    getPrettyId(id) {
        return id.substring(0, 8);
    }

    onEdit(id) {
        this.props.navigate(`/edit/${id}`);
    }

    onDelete(id) {
        event.preventDefault();
        this.props.deleteEmployee(id);
    }

    render() {
        return <main className="container">
            <section className="row">
                <div className="col-md-12">
                    <h3>Employee Directory</h3>
                    <table role="grid">
                        <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Employee Type</th>
                            <th scope="col">Department</th>
                            <th scope="col">Title</th>
                            <th scope="col">Date of Joining</th>
                            <th scope="col">Age</th>
                            <th scope="col">Retirement</th>
                            <th scope="col">Actions</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.employees.map(employee =>
                                <tr key={employee.id}>
                                    <th scope="row" data-tooltip={employee.id}>{this.getPrettyId(employee.id)}</th>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.employeeType}</td>
                                    <td>{employee.department}</td>
                                    <td>{employee.title}</td>
                                    <td>{this.getPrettyDate(employee.dateOfJoining)}</td>

                                    <td>{employee.age}</td>
                                    <td>{this.getPrettyDate(employee.dateOfRetirement)}</td>
                                    <td>
                                        <Link to={`/edit/${employee.id}`}>Edit</Link>
                                        <br/>
                                        <a href="#" onClick={() => this.onDelete(employee.id)}>Delete</a>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </section>
        </main>;
    }
}

export default getParam(EmployeeTable)