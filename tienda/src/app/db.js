const mysql = require("mysql2");

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: "127.0.0.1", // Cambiar a la dirección del servidor MySQL
  user: "root",
  password: "",
  database: "tienda",
});

module.exports = connection;
