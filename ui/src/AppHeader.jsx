import React from "react";

class AppHeader extends React.Component {

    getActions() {
        console.log(this.props.currentRoute);
        if (this.props.currentRoute === 'dashboard') {
            return <ul>
                <li><a href={"#"} onClick={() => this.props.onActionClicked("search")} role={"button"}>Search</a></li>
                <li><a href={"#"} onClick={() => this.props.onActionClicked("create")} role={"button"}>Create</a></li>
            </ul>
        } else {
            return <ul>
                <li><a href={"#"} onClick={() => this.props.onActionClicked("dashboard")} role={"button"}>Dashboard</a>
                </li>
            </ul>
        }
    }

    render() {
        return <header className="container">
            <nav>
                <h1 style={{marginTop: "15px"}}>EMS Manager</h1>
                {this.getActions()}
            </nav>
        </header>;
    }
}

export default AppHeader;
