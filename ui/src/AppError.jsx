import React from "react";

class AppError extends React.Component {
    render() {
        return <div className={"container"}>
            <h3>Error</h3>
            <article>
                <h4>Something went wrong</h4>
                <p>{this.props.error.message}</p>
            </article>
        </div>;
    }
}

export default AppError;