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
    tasks.forEach((task) => {
      this._list[task.id] = task;
    });
  }

  listAllTasks(tasks = [], date = false) {
    console.log();

    tasks.forEach((task, index) => {
      const i = `${index + 1}.`.green;
      let status = "";
      if (date) {
        status = task.completeDate.blue;
      } else {
        status = task.completeDate ? "Completada".green : "Pendiente".red;
      }
      console.log(`${i} ${task.desc} :: ${status}`);
    });
  }

  listCompletedTasks(status = true) {
    const tasks = this.taskslist.filter(
      (task) => !!task.completeDate === status
    );
    this.listAllTasks(tasks, status);
  }
}

module.exports = Tasks;
