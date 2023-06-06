require("colors");

const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const { saveTask, readTasks } = require("./helpers/taskDB");
const Tasks = require("./models/tasks");

const main = async () => {
  let opt = "";
  const tasks = new Tasks();

  const tasksDB = readTasks();
  if (tasksDB) tasks.createTasks(tasksDB);

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await readInput("Desc:");
        tasks.createTask(desc);
        console.log(desc);
        break;
      case "2":
        tasks.listAllTasks(tasksDB);
        break;
      case "3":
        tasks.listCompletedTasks(true);
        break;
      case "4":
        tasks.listCompletedTasks(false);
        break;
      case "5":
        break;
      case "6":
        break;
    }

    saveTask(tasks.taskslist);

    await pause();
  } while (opt !== "0");
};

main();
