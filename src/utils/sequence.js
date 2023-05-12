const { insertarTablaPosiciones } = require("./insertData");
const { obtenerTablaPosiciones } = require("./request");
require("dotenv").config({ path: "../../.env" });

const tiempoParaPeticion = process.env.PETICION_INTERVAL;

async function sequence() {
  try {
    const tablaPosiciones = await obtenerTablaPosiciones();
    await insertarTablaPosiciones(tablaPosiciones);
    console.log(
      "La tabla de posiciones se ha insertado correctamente en la base de datos."
    );
  } catch (error) {
    console.error(
      "Ha ocurrido un error al obtener e insertar la tabla de posiciones:",
      error
    );
  }
}

setInterval(() => {
  sequence();
}, tiempoParaPeticion);

module.exports = { sequence };
