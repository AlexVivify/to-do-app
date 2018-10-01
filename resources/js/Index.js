import React, { Component } from "react";
import ReactDOM from "react-dom";
import Tasks from "./components/Tasks";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Example from "./components/Example";
import Task from "./components/Task";
import NewTask from "./components/NewTask";
import EditTask from "./components/EditTask";

export default class Index extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Link to="/">Home</Link>
            <Link to="/tasks">Tasks</Link>
            <Link to="/tasks-create">New task </Link>
            <Route path="/" exact component={Example} />
            <Route path="/tasks" exact component={Tasks} />
            <Route path="/tasks-create" exact component={NewTask} />
            <Route
              path="/edit-task/:id"
              exact
              render={props => <EditTask {...props} />}
            />
            <Route
              path="/tasks/:id"
              exact
              render={props => <Task {...props} />}
            />
          </div>
        </Router>
      </div>
    );
  }
}

if (document.getElementById("example")) {
  ReactDOM.render(<Index />, document.getElementById("example"));
}
