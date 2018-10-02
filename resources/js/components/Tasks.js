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

  handlePriority(e) {
    e.target.style = "background: lightgrey; border:solid; border-color:black";
  }
  render() {
    const complete = {
      display: "none"
    };

    return (
      <div className="container" className="jumbotron">
        {this.state.tasks.map(task => (
          <div onClick={this.handlePriority.bind(this)}>
            <li>
              <Link to={"/tasks/" + task.id}> {task.title}</Link>

              <strong style={task.isDone === 0 ? complete : {}}> Done </strong>
            </li>
          </div>
        ))}
      </div>
    );
  }
}
