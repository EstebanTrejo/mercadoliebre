const express = require('express');
const app = express();
const path = require('path');

// Configuración de las rutas estáticas para archivos en la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir el archivo home.html desde la carpeta 'views'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Iniciar el servidor en el puerto 3000 (o el puerto que desees)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`click para dirigirte al sitio: http://localhost:${PORT}/`);
});
