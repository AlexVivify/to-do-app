import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Example extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>WELCOME</h1>
          <p>Tasks managment application</p>
        </div>
      </div>
    );
  }
}

if (document.getElementById("example")) {
  ReactDOM.render(<Example />, document.getElementById("example"));
}
