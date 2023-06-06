const fs = require("fs");

const saveTask = (data) => {
  const file = "./db/tasks.json";
  fs.writeFileSync(file, JSON.stringify(data));
};

module.exports = {
  saveTask,
};
