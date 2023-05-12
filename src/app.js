const express = require("express");
const db = require("./models/db");
const router = require("./routes/table");
const { sequence } = require("./utils/sequence");

const app = express();

const PORT = process.env.PORT || 3000;

db.connect();

sequence();

app.use("/tabla", router);

app.get("/", (req, res) => {
  res.send("¡Bienvenido a mi aplicación!");
});

app.listen(PORT, () => {
  console.log(`El servidor se está ejecutando en el puerto ${PORT}`);
});
