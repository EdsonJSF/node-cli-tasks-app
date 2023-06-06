require("colors");

const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const Tasks = require("./models/tasks");

const main = async () => {
  let opt = "";
  const tasks = new Tasks();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await readInput("Desc:");
        tasks.createTask(desc);
        console.log(desc);
        break;
      case "2":
        console.log(tasks._list);
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":
        break;
      case "6":
        break;
    }

    await pause();
  } while (opt !== "0");
};

main();
