require("colors");

const {
  comfirm,
  inquirerMenu,
  listCheckChoices,
  listChoices,
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
        const editId = await listChoices(tasks.taskslist, "¿Cual desea editar?");
        if (!editId) break;
        const editDesc = await readInput("Desc:");
        tasks.editTask(editId, editDesc);
        break;
      case "7":
        const deleteId = await listChoices(tasks.taskslist, "¿Cual desea borrar?");
        if (!deleteId) break;
        const deleteConfirm = await comfirm("¿Esta seguro?");
        if (deleteConfirm) tasks.deleteTask(deleteId);
        break;
    }

    saveTask(tasks.taskslist);

    await pause();
  } while (opt !== "0");
};

main();
