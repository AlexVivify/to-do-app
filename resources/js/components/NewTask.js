import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import myTasksService from "./TaskService";

export default class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      redirect: false
    };
  }

  onTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }
  onDescriptionChange(e) {
    this.setState({
      description: e.target.value
    });
  }

  addTask() {
    myTasksService
      .addTask(this.state)
      .then(res => {
        alert("Task created successfuly");
        this.setState({ redirect: true });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.addTask();
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/tasks" />;
    }

    return (
      <div>
        <h1> Insert new task </h1>
        <form onSubmit={this.handleSubmit.bind(this)} className="form-group">
          <input
            className="form-control"
            type="text"
            name="title"
            placeholder="Insert task title"
            onChange={this.onTitleChange.bind(this)}
          />{" "}
          <br />
          <textarea
            className="form-control"
            name="description"
            placeholder="Insert title description"
            onChange={this.onDescriptionChange.bind(this)}
          />
          <input
            className="btn btn-secondary mt-3"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}
