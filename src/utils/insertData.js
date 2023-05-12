const Table = require("../models/tableSchema");
const { obtenerTablaPosiciones } = require("./request");

async function insertarTablaPosiciones() {
  try {
    // Borrar todos los documentos de la colección de la tabla de posiciones
    await Table.deleteMany();

    // Obtener la tabla de posiciones
    const tablaPosiciones = await obtenerTablaPosiciones();

    // Crear un nuevo documento del modelo Table para la tabla de posiciones completa
    const nuevaTabla = new Table({
      tabla: tablaPosiciones.tabla,
      info: {
        description: tablaPosiciones.info.description,
        title: tablaPosiciones.info.title,
        image: tablaPosiciones.info.image,
        fechaActualizacion: new Date(),
      },
    });

    // Guardar la nueva tabla en la base de datos
    await nuevaTabla.save();

    console.log(
      "La tabla de posiciones se ha insertado correctamente en la base de datos."
    );
  } catch (error) {
    console.error(
      "Ha ocurrido un error al insertar la tabla de posiciones en la base de datos:",
      error
    );
  }
}

module.exports = { insertarTablaPosiciones };
