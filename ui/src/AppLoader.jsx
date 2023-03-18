import React from "react";

export default class AppLoader extends React.Component {
    render() {
        if (!this.props.isLoading) {
            //return dive with the same size as the progress bar
            return <div style={{height: "30px"}}></div>;
        }

        return <div>
            <progress></progress>
        </div>;
    }
}