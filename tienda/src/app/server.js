const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 4200; // Puerto donde se ejecutará el servidor

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tienda",
});

db.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
  } else {
    console.log("Conexión exitosa a la base de datos");
  }
});

// Ruta para actualizar un producto por su ID
app.put("/productos/:id", (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body; // Datos actualizados del producto

  const query = "UPDATE productos SET ? WHERE id = ?";
  db.query(query, [updatedProduct, productId], (err, result) => {
    if (err) {
      console.error("Error al actualizar el producto:", err);
      res.status(500).json({ error: "Error al actualizar el producto" });
    } else {
      console.log("Producto actualizado exitosamente");
      res.status(200).json({ message: "Producto actualizado exitosamente" });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
