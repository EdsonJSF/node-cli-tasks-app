const fs = require("fs");

const filePath = "./db/tasks.json";

const saveTask = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data));
};

const readTasks = () => {
  if (!fs.existsSync(filePath)) return null;
  const tasks = fs.readFileSync(filePath, { encoding: "utf-8" });
  return JSON.parse(tasks);
};

module.exports = {
  saveTask,
  readTasks,
};
