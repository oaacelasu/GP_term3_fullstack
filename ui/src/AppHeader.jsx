import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import {getParam, buildQuery} from "./Utils.jsx";

const DashboardLinks = (query) => <ul>
    <li><Link to={{ pathname: '/search', search: `?${query}` }}>Search</Link></li>
    <li><Link to={`/create`}>Create</Link></li>
</ul>;
const CreateLinks = (query) => <ul>
    <li><Link to={{ pathname: '/dashboard', search: `?${query}` }}>Dashboard</Link></li>
</ul>;
const SearchLinks = (query) => CreateLinks(query);

class AppHeader extends React.Component {

    constructor(props) {
        super(props);
        this.searchQuery = props.searchParams
    }

    render() {
        return <header className="container">
            <nav>
                <h1 style={{marginTop: "15px"}}>EMSs Manager</h1>
                <Routes>
                    <Route path="/dashboard" element={DashboardLinks(buildQuery(this.searchQuery))}/>
                    <Route path="/create" element={CreateLinks(buildQuery(this.searchQuery))}/>
                    <Route path="/search" element={SearchLinks(buildQuery(this.searchQuery))}/>
                </Routes>
            </nav>
        </header>;
    }
}

export default getParam(AppHeader);