import axios from "axios";

const ENDPOINTS = {
  MY_TASKS: "/api/task/",
  MY_TASK_COMPLETE: "/api/task/complete/",
  MY_TASK_EDIT: "/api/task/update/"
};
class MyTasksService {
  getTasks() {
    return axios.get(ENDPOINTS.MY_TASKS);
  }

  getTask(taskId) {
    return axios.get(ENDPOINTS.MY_TASKS + taskId);
  }

  addTask(task) {
    return axios.post(ENDPOINTS.MY_TASKS, task);
  }

  editTask(taskId, task) {
    return axios.put(ENDPOINTS.MY_TASK_EDIT + taskId, task);
  }

  deleteTask(taskId) {
    return axios.delete(ENDPOINTS.MY_TASKS + taskId);
  }

  mark(taskId) {
    return axios.patch(ENDPOINTS.MY_TASK_COMPLETE + taskId);
  }
}

const myTasksService = new MyTasksService();
export default myTasksService;
