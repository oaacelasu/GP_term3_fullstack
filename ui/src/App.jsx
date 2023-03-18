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
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import EmployeeDirectory from "./EmployeeDirectory.jsx";
import EmployeeForm from "./EmployeeForm.jsx";
import EmployeeSearch from "./EmployeeSearch.jsx";


const NotFound = () => <h1>404.. This page is not found!</h1>;
const App = () => {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/dashboard" element={<EmployeeDirectory/>}/>
                    <Route path="/search" element={<EmployeeSearch/>}/>
                    <Route exact path="/create" element={<EmployeeForm/>}/>
                    <Route path="/edit/:id" element={<EmployeeForm/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </div>

    );
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
    , document.getElementById('root'));
