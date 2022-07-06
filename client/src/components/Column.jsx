import React from "react";

export default class Column extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        return (<div className="p-2 border column">#{this.props.id + " " +this.props.name}</div>);
    }
}