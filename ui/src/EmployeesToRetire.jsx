import {Link, Route, Routes} from "react-router-dom";

import 'core-js';
import 'whatwg-fetch';
import React from 'react';
import EmployeeTable from "./EmployeeTable.jsx";
import AppLoader from "./AppLoader.jsx";
import {GET_UPCOMING_RETIREMENTS,} from "./graphql";
import {buildQuery, getParam} from "./Utils.jsx";

const DashboardLinks = (data) => <nav>
    <h1 style={{marginTop: "15px"}}>EMS Manager</h1>
    <ul>
        <li><Link to={`/dashboard`}>Dashboard</Link></li>
    </ul>
</nav>


class EmployeesToRetire extends React.Component {
    constructor(props) {
        super(props);
        this.searchQuery = new Map(props.searchParams);
        this.state = {
            employees: [],
            loading: true,
            error: null,
            // here we should filter the same way we do in the dashboard page so we could extend the Search page to allow filtering
            // in this page as well

            filters: {
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

        //let query = GET_UPCOMING_RETIREMENTS(this.state.filters);
        let query = GET_UPCOMING_RETIREMENTS(null);

        return fetch('/graphql', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query: query}),
        }).then(response => response.json()).then(result => {
            this.setState({
                employees: result.data.upcomingRetirements,
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
                        <h3>Upcoming retirement</h3>
                        <EmployeeTable employees={this.state.employees}/>
                    </div>
                </div>
            );
        }
    }
}

export default getParam(EmployeesToRetire);