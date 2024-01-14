// const { argv } = require("process");
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();
// const base = 9;

// console.log(process.argv);
// console.log(argv);

// console.log("base: yargs: ", argv.h);

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
