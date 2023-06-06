const { v4: uuidv4 } = require("uuid");

const Task = require("./task");

class Tasks {
  get taskslist() {
    const tasksArr = [];
    Object.keys(this._list).forEach((key) => {
      tasksArr.push(this._list[key]);
    });
    return tasksArr;
  }

  constructor() {
    this._list = {};
  }

  createTask(desc = "") {
    const task = new Task(desc);
    this._list[task.id] = task;
  }

  createTasks(tasks = []) {
    tasks.forEach(task => {
      this._list[task.id] = task;
    })
  }
}

module.exports = Tasks;
