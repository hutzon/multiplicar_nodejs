const argv = require("yargs")
  .options("b", {
    alias: "base",
    type: "number",
    demandOptions: true,
    default: false,
  })
  .options("h", {
    alias: "hasta",
    type: "number",
    demandOptions: true,
  })
  .options("l", {
    alias: "listar",
    type: "boolean",
    demandOptions: true,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
