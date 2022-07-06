import React from "react";

export default class Input extends React.Component {
  handleSubmit() {
    console.log()
  }

  handleUpload(e) {
    console.log(e.target.files[0]);
    fetch('http://localhost:8000/')
        .then(res=>res.json())
        .then((result) => {
            console.log(result);
        },
        (error) => {
            console.log(error);
        })
  }

  render() {
    return (
      <form className="d-flex">
        <div className="input-group m-3 w-50">
          <button className="btn btn-dark">Text</button>
          <input type="file" class="form-control" id="sql-file" onChange={this.handleUpload}></input>
        </div>
        <button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}
