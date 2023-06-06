const inquirer = require("inquirer");
require("colors");

const menuOpt = [
  {
    type: "list",
    name: "opcion",
    message: "¿Que desea hacer?",
    choices: ["op1", "op2", "op3"],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("===========================".green);
  console.log("   Seleccione una opción".green);
  console.log("===========================\n".green);

  const opt = await inquirer.prompt(menuOpt);
  return opt;
};

module.exports = {
  inquirerMenu,
};
