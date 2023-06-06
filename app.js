require("colors");

const {
  comfirm,
  inquirerMenu,
  listCheckChoices,
  listDeleteChoices,
  pause,
  readInput,
} = require("./helpers/inquirer");
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
        break;
      case "2":
        tasks.listAllTasks(tasks.taskslist);
        break;
      case "3":
        tasks.listCompletedTasks(true);
        break;
      case "4":
        tasks.listCompletedTasks(false);
        break;
      case "5":
        const taskIds = await listCheckChoices(tasks.taskslist);
        tasks.toggleTasks(taskIds);
        break;
      case "6":
        const taskId = await listDeleteChoices(tasks.taskslist);
        if (!taskId) break;
        const ok = await comfirm("¿Esta seguro?");
        if (ok) tasks.deleteTask(taskId);
        break;
    }

    saveTask(tasks.taskslist);

    await pause();
  } while (opt !== "0");
};

main();
