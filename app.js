const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para leer JSON
app.use(express.json());


app.use(express.static("public"));

// Ruta principal
app.get("/", (req, res) => {
  res.send("¡Servidor funcionando con Express y Node.js!");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

require("dotenv").config();

