import React, { Component } from "react";
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

  componentDidMount() {
    this.getTask();
  }

  getTask() {
    myTasksService
      .getTask(this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          description: response.data.description
        });
      })
      .catch(error => console.log(error));
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
  handleSubmit(e) {
    e.preventDefault();
    myTasksService
      .editTask(this.props.match.params.id, this.state)
      .then(response => {
        alert("Task edited successfuly");
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
        <h1> Edit your task </h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            name="title"
            placeholder="Insert task title"
            onChange={this.onTitleChange.bind(this)}
            value={this.state.title}
          />{" "}
          <br />
          <textarea
            name="description"
            placeholder="Insert title description"
            onChange={this.onDescriptionChange.bind(this)}
            value={this.state.description}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
