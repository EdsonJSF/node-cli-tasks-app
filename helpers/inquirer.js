const inquirer = require("inquirer");
require("colors");

const menuOpt = [
  {
    type: "list",
    name: "menuOption",
    message: "¿Que desea hacer?",
    choices: [
      { value: "1", name: `${"1.".green} Crear tarea` },
      { value: "2", name: `${"2.".green} Listar tarea(s)` },
      { value: "3", name: `${"3.".green} Listar tarea(s) completadas` },
      { value: "4", name: `${"4.".green} Listar tarea(s) pendientes` },
      { value: "5", name: `${"5.".green} Completar tarea(s)` },
      { value: "6", name: `${"6.".green} Borrar tarea(s)` },
      { value: "0", name: `${"0.".green} Salir\n` },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("===========================".green);
  console.log("   Seleccione una opción".green);
  console.log("===========================\n".green);

  const { menuOption } = await inquirer.prompt(menuOpt);
  return menuOption;
};

const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) return "Por favor ingrese un valor";
        return true;
      },
    },
  ];
  const { desc } = await inquirer.prompt(question);
  return desc;
};

const createChoices = (tasks = [], checked = false) => {
  return (choices = tasks.map((task, index) => {
    const i = `${index + 1}.`.green;
    const choice = { value: task.id, name: `${i} ${task.desc}` };
    if (checked) choice.checked = !!task.completeDate;
    return choice;
  }));
};

const listDeleteChoices = async (tasks = []) => {
  const choices = createChoices(tasks);

  choices.unshift({ value: false, name: `${"0.".green} No! Quiero salir` });

  const question = [
    {
      type: "list",
      name: "taskID",
      message: "¿Cual desea borrar?",
      choices,
    },
  ];

  const { taskID } = await inquirer.prompt(question);
  return taskID;
};

const listCheckChoices = async (tasks = []) => {
  const choices = createChoices(tasks, true);

  const question = [
    {
      type: "checkbox",
      name: "taskIDs",
      message: "Selecciones",
      choices,
    },
  ];

  const { taskIDs } = await inquirer.prompt(question);
  return taskIDs;
};

const comfirm = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message: message,
    },
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;
};

const pause = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Precione ${"ENTER".green} para continuar`,
    },
  ];

  console.log("\n");

  await inquirer.prompt(question);
};

module.exports = {
  comfirm,
  inquirerMenu,
  listCheckChoices,
  listDeleteChoices,
  pause,
  readInput,
};
