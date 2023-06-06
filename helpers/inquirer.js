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
  inquirerMenu,
  pause,
};
