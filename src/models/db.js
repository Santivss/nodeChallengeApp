const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a la base de datos de MongoDB");

    console.log("Estado de la conexión: ", mongoose.connection.readyState);

    return mongoose.connection;
  } catch (error) {
    console.error("Error al conectar a la base de datos de MongoDB", error);
  }
}

module.exports = { connect };
