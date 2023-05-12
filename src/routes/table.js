const express = require("express");
const router = express.Router();
const { obtenerTablaPosiciones } = require("../utils/request");

router.get("/", async (req, res) => {
  try {
    const tabla = await obtenerTablaPosiciones();
    res.send(tabla);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("Error obteniendo información de la tabla de posiciones.");
  }
});

module.exports = router;
