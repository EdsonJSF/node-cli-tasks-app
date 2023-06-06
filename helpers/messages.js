require("colors");

const showMenu = () => {
  console.clear();
  console.log("===========================".green);
  console.log("   Seleccione una opción".green);
  console.log("===========================\n".green);

  console.log(`${"1.".green} Crear tarea`);
  console.log(`${"2.".green} Listar tarea(s)`);
  console.log(`${"3.".green} Listar tarea(s) completadas`);
  console.log(`${"4.".green} Listar tarea(s) pendientes`);
  console.log(`${"5.".green} Completar tarea(s)`);
  console.log(`${"6.".green} Borrar tarea(s)`);
  console.log(`${"0.".green} Salir\n`);

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Seleccione una opción: ", (opt) => {
    readline.close();
  });
};

const pause = () => {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(`\nPrecione ${"ENTER".green} para continuar\n`, (opt) => {
    readline.close();
  });
};

module.exports = {
  showMenu,
  pause,
};
