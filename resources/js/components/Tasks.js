import React, { Component } from "react";
import TaskComponent from "./TaskComponent";
import myTasksService from "./TaskService";

export default class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  getTasks() {
    myTasksService
      .getTasks()
      .then(res => {
        this.setState({ tasks: res.data });
      })
      .catch(error => {
        alert("Something went wrong!");
      });
  }

  componentDidMount() {
    this.getTasks();
  }

  handlePriority(e) {
    const id = e.target.id;
    let temp = this.state.tasks;
    let obj = temp.find(el => el.id == id);
    let index = temp.indexOf(obj);
    temp.splice(index, 1);
    temp.unshift(obj);
    this.setState({ tasks: temp });
    var element = document.getElementById("myDiv");
    element.style = "border:solid;borderColor:black;color:orange";
  }

  render() {
    return (
      <div className="container" className="jumbotron">
        {this.state.tasks.map(task => (
          <TaskComponent
            task={task}
            handlePriority={this.handlePriority.bind(this)}
          />
        ))}
      </div>
    );
  }
}
