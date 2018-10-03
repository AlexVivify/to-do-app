import React, { Component } from "react";

import { Redirect, Link } from "react-router-dom";
import myTasksService from "./TaskService";
export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {},
      redirect: false
    };
    this.props = {
      priority: true
    };
  }

  componentDidMount() {
    this.getTask();
  }
  getTask() {
    myTasksService
      .getTask(this.props.match.params.id)
      .then(response => {
        this.setState({ task: response.data });
      })
      .catch(error => console.log(error));
  }

  deleteTask() {
    myTasksService
      .deleteTask(this.props.match.params.id)
      .then(response => {
        alert("Task deleted successfuly!");
        this.setState({ redirect: true });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleDelete() {
    this.deleteTask();
  }

  handleComplete() {
    myTasksService
      .mark(this.props.match.params.id)
      .then(response => {
        alert("Task completed!");
        this.setState({ redirect: true });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/tasks" />;
    }
    return (
      <div>
        <h1 className="jumbotron"> {this.state.task.title} </h1>
        <p> {this.state.task.description} </p>
        <hr />
        <button
          onClick={this.handleDelete.bind(this)}
          className="btn btn-danger"
        >
          Delete
        </button>
        <Link to={"/edit-task/" + this.props.match.params.id}>
          <button
            disabled={this.state.task.isDone === 1}
            className="btn btn-warning"
          >
            Edit
          </button>
        </Link>
        <button
          onClick={this.handleComplete.bind(this)}
          disabled={this.state.task.isDone === 1}
          className="btn btn-primary"
        >
          Mark as completed
        </button>
      </div>
    );
  }
}
