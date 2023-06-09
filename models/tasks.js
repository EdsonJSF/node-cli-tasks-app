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

  editTask(id = "", desc) {
    if (this._list[id]) {
      this._list[id].desc = desc;
    }
  }

  toggleTasks(ids = []) {
    ids.forEach((id) => {
      const task = this._list[id];
      if (!task.completeDate) {
        task.completeDate = new Date().toISOString();
      }
    });

    this.taskslist.forEach((task) => {
      if (!ids.includes(task.id)) {
        this._list[task.id].completeDate = null;
      }
    });
  }

  deleteTask(id = "") {
    if (this._list[id]) {
      delete this._list[id];
    }
  }
}

module.exports = Tasks;
