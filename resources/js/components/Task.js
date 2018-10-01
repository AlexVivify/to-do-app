import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {},
      redirect: false
    };
  }
  componentDidMount() {
    axios
      .get("/api/task/" + this.props.match.params.id)
      .then(response => {
        this.setState({ task: response.data });
      })
      .catch(error => console.log(error));
  }

  handleDelete() {
    axios
      .delete("/api/task/" + this.props.match.params.id)
      .then(response => {
        alert("Task deleted successfuly!");
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
        <h1> {this.state.task.title} </h1>
        <p> {this.state.task.description} </p>
        <hr />
        <button onClick={this.handleDelete.bind(this)}>Delete</button>
        <Link to={"/edit-task/" + this.props.match.params.id}>
          <button disabled={this.state.task.isDone === 1}>Edit</button>
        </Link>
      </div>
    );
  }
}