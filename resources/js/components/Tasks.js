import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export default class Tasks extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
  }

  componentWillMount() {
    axios
      .get("/api/task")
      .then(response => {
        this.setState({ tasks: response.data });
      })
      .catch(errors => {
        console.log(errors);
      });
  }

  render() {
    const complete = {
      "background-color": "red"
    };
    return (
      <div className="container">
        {this.state.tasks.map(task => (
          <div style={task.isDone === 1 ? complete : {}}>
            <Link to={"/tasks/" + task.id}>
              {" "}
              {task.title} <span>DONE!</span>{" "}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
