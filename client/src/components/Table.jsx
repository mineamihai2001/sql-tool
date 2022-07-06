import React from "react";
import Column from "./Column";

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.colList = this.props.colList;
    }

    render() {
        console.log(this.colList);
        return (<div className="bg-light w-25 text-center">
                    <div className="bg-danger pt-3 pb-3 fs-3">Table #</div>
                    <div className="">
                        {this.colList.map((name, id) => {
                            return <Column name={name} id={id}/>
                        })}
                    </div>
                </div>)
    }
}