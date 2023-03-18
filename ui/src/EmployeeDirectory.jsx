import {Link, Route, Routes} from "react-router-dom";

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
import EmployeeTable from "./EmployeeTable.jsx";
import AppLoader from "./AppLoader.jsx";
import {DELETE_EMPLOYEE, GET_EMPLOYEES, NEW_EMPLOYEE} from "./graphql";
import {buildQuery, getParam} from "./Utils.jsx";

const DashboardLinks = (data) => <nav>
    <h1 style={{marginTop: "15px"}}>EMS Manager</h1>
    <ul>
        <li><Link to={{pathname: '/search', search: `?${data.query}`}}>Search</Link></li>
        <li><Link to={`/create`}>Create</Link></li>
    </ul>
</nav>


class EmployeeDirectory extends React.Component {
    constructor(props) {
        super(props);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.searchQuery = new Map(props.searchParams);
        this.state = {
            employees: [],
            loading: true,
            error: null,
            filters: {
                department: props.searchParams.get("department") || null,
                title: props.searchParams.get("title") || null,
                employeeType: props.searchParams.get("employeeType") || null
            },
        }
    }

    fetchEmployees() {
        this.setState({
            employees: [],
            loading: true,
            error: null,
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

    deleteEmployee(id) {
        this.setState({
            loading: true,
            error: null,
        })

        let data = {
            id: id
        }

        let query = DELETE_EMPLOYEE(data);

        return fetch('/graphql', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query: query}),
        }).then(response => response.json()).then(result => {
            this.componentDidMount();
        }).catch(error => {
            this.setState({
                error,
                loading: false
            })
        })
    }

    componentDidMount() {
        this.fetchEmployees()
    }

    render() {
        const {error, loading} = this.state;
        if (error) {
            return <div className={"container"}>
                <h3>Error</h3>
                <article>
                    <h4>Something went wrong</h4>
                    <p>{this.state.error.message}</p>
                </article>

                <button onClick={() => this.setState({error: null})}>Review</button>
            </div>;
        } else {
            return (
                <div className={"container"}>
                    <DashboardLinks query={buildQuery(this.searchQuery)}/>
                    <AppLoader isLoading={loading}/>
                    <div>
                        <ul>
                            {this.state.filters.department && <li>Department: {this.state.filters.department}</li>}
                            {this.state.filters.title && <li>Title: {this.state.filters.title}</li>}
                            {this.state.filters.employeeType &&
                                <li>Employee Type: {this.state.filters.employeeType}</li>}
                        </ul>
                        <EmployeeTable employees={this.state.employees} deleteEmployee={this.deleteEmployee}/>
                    </div>
                </div>
            );
        }
    }
}

export default getParam(EmployeeDirectory);