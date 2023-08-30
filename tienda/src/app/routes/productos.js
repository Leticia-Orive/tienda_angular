const express = require("express");
const router = express.Router();
const connection = require("../db"); // Ajusta la ruta al archivo de conexión

router.get("/productos", (req, res) => {
  connection.query("SELECT * FROM productos", (error, results) => {
    if (error) {
      console.error("Error al consultar la base de datos:", error);
      res.status(500).json({ mensaje: "Error al obtener los productos" });
    } else {
      res.status(200).json(results);
    }
  });
});

// Otras rutas relacionadas con productos aquí...

module.exports = router;
