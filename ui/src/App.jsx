{
    /* src/App.jsx */
}
{/*
    Author: Oscar Acelas
    Student ID: 8804062
    Date: 2023-01-21
    Description: This is the main entry point for the application - EMS (Employee Management System) - Assignment 1
*/
}
import 'core-js';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./AppHeader.jsx";
import AppError from "./AppError.jsx";
import EmployeeTable from "./EmployeeTable.jsx";
import EmployeeForm from "./EmployeeForm.jsx";
import EmployeeSearch from "./EmployeeSearch.jsx";
import AppLoader from "./AppLoader.jsx";
//import {GET_EMPLOYEES, NEW_EMPLOYEE} from "./graphql";
const GET_EMPLOYEES = (data) => `query {
                          employeeList(employeeType: ${data.employeeType}, department: ${data.department}, title: ${data.title}) {
                            title
                            lastName
                            firstName
                            id
                            employeeType
                            department
                            dateOfJoining
                            age
                          }
                        }`;
const NEW_EMPLOYEE = (data) => `mutation {
                            employeeAdd(employee:{ 
                            firstName: "${data.firstName}",
                            lastName: "${data.lastName}",
                            age: ${data.age}
                            employeeType: ${data.employeeType},
                            department: ${data.department},
                            title: ${data.title},
                            dateOfJoining: "${data.dateOfJoining.toISOString()}"
                            }) {
                            id
                        } }`;

class EmployeeDirectory extends React.Component {
    constructor(props) {
        super(props);
        this.createEmployee = this.createEmployee.bind(this);
        this.handleNavClick = this.handleNavClick.bind(this);
        this.applySearch = this.applySearch.bind(this);
        this.state = {
            employees: [],
            loading: true,
            error: null,
            route: "dashboard",
            filters: {
                department: null,
                title: null,
                employeeType: null
            },
        };
    }


    fetchEmployees() {
        this.setState({
            employees: [],
            loading: true,
            error: null,
            route: "dashboard"
        })

        let query = GET_EMPLOYEES(this.state.filters);

        console.log("EmployeeDirectory fetchEmployees query: " + query);

        return fetch('/graphql', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query: query}),
        }).then(response => response.json()).then(result => {
            this.setState({
                employees: result.data.employeeList,
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
        console.log("EmployeeDirectory componentDidMount");
        this.fetchEmployees()
    }

    buildMain() {
        if (this.state.route === "dashboard") {
            return <div>
                <ul>
                    {this.state.filters.department && <li>Department: {this.state.filters.department}</li>}
                    {this.state.filters.title && <li>Title: {this.state.filters.title}</li>}
                    {this.state.filters.employeeType && <li>Employee Type: {this.state.filters.employeeType}</li>}
                </ul>
                <EmployeeTable employees={this.state.employees}/>
            </div>
        } else if (this.state.route === "create") {
            return <EmployeeForm onSubmit={this.createEmployee}/>;
        } else if (this.state.route === "search") {
            return <EmployeeSearch onSubmit={this.applySearch} filters={this.state.filters}/>;
        }
    }

    handleNavClick(route) {
        console.log("handleNavClick");
        if (route === "create") {
            this.setState({route: "create"});
        } else if (route === "dashboard") {
            this.setState({route: "dashboard"});
            this.componentDidMount();
        } else if (route === "search") {
            this.setState({route: "search"});
        }
    }

    applySearch(search) {
        this.setState({
                loading: true,
                filters: search
            }
        )
        setTimeout(() => {
            this.componentDidMount();
        }, 1000);
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
            console.log(result);
            this.componentDidMount();
        }).catch(error => {
            this.setState({
                error,
                loading: false
            })
        });
    }

    render() {
        const {error, loading} = this.state;
        if (error) {
            return <AppError error={error}/>;
        } else {
            return (
                <div className={"container"}>
                    <AppLoader isLoading={loading}/>
                    <AppHeader currentRoute={this.state.route} onActionClicked={this.handleNavClick.bind(this)}/>
                    {this.buildMain()}
                </div>
            );
        }
    }
}

ReactDOM.render(
    <React.StrictMode>
        <EmployeeDirectory/>
    </React.StrictMode>
    , document.getElementById('root'));
