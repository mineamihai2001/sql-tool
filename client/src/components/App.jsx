import React from "react";
import Input from "./Input";
import Table from './Table';

export default class App extends React.Component {
    colList = ["id", "first_name", "last_name", "data", "created", "updated"];

    render() {
        return (<div>
            <div>
                <Input/>
            </div>
            <Table colList = {this.colList}/>
        </div>);
    }
}