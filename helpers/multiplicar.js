const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    console.log(hasta);
    for (let i = 1; i <= hasta; i++) {
      salida += `${i} x ${base} = ${base * i} \n`;
    }

    if (listar) {
      console.log("================================================".rainbow);
      console.log(`Tabla del ${base}`.green);
      console.log("================================================".rainbow);

      console.log(salida.bold.blue);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`.red;
  } catch (error) {
    throw error;
  }
};

module.exports = { crearArchivo };
