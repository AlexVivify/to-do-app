import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
const TaskComponent = ({ task, handlePriority }) => {
  const complete = {
    visibility: "hidden"
  };

  const myStyle = {
    color: "green",
    fontWeight: "bold"
  };
  return (
    <div onClick={handlePriority} id="myDiv">
      <span style={task.isDone === 0 ? complete : myStyle}>--Done--</span>
      <strong id={task.id}> {task.title} </strong>
      <Link to={"/tasks/" + task.id}> Preview</Link>
    </div>
  );
};
export default TaskComponent;
