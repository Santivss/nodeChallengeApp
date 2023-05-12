const mongoose = require("mongoose");

const posicionesSchema = new mongoose.Schema({
  tabla: [
    {
      equipo: String,
      pj: Number,
      pg: Number,
      pe: Number,
      pp: Number,
      gf: Number,
      gc: Number,
      dg: Number,
      pts: Number,
      imagen: String,
    },
  ],
  info: {
    description: String,
    title: String,
    image: String,
    fechaActualizacion: { type: Date, default: Date.now },
  },
});

const Posiciones = mongoose.model("Posiciones", posicionesSchema);

module.exports = Posiciones;
