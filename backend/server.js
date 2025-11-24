const express = require('express');
const cors = require('cors');
require('dotenv').config();

/*
  Archivo: backend/server.js
  Propósito: Punto de entrada del servidor Express.
  
  MODIFICACIÓN CLAVE: Se implementó una función de reintento exponencial (retry loop)
  en el bloque `startServer` para mitigar la inestabilidad de la conexión inicial
  con MySQL en Azure Container Instances (ACI). El servidor intentará conectar
  hasta 5 veces antes de fallar.
*/

const sequelize = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Rutas de la API
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 5000;

// ====================================================================
// FUNCIÓN DE ARRANQUE CON REINTENTO EXPONENCIAL
// ====================================================================

const MAX_RETRIES = 5;

const startServer = async (attempt = 1) => {
  try {
    // 1. Autenticar y Sincronizar la base de datos
    await sequelize.authenticate();
    await sequelize.sync();
    console.log(' Base de datos conectada y modelos sincronizados...');

    // 2. Iniciar el servidor Express
    app.listen(PORT, () => {
      console.log(` Servidor corriendo en el puerto ${PORT}`);
    });

  } catch (error) {
    if (attempt < MAX_RETRIES) {
      const delay = Math.pow(2, attempt) * 1000; // 2s, 4s, 8s, 16s, etc.
      console.warn(` Intento ${attempt}/${MAX_RETRIES}: Falló la conexión a la DB. Reintentando en ${delay / 1000} segundos...`);
      setTimeout(() => startServer(attempt + 1), delay);
    } else {
      console.error(' Error FATAL: No se pudo conectar a la base de datos después de varios intentos.', error);
      // Forzamos la salida para que Azure reinicie el contenedor, pero con logs claros.
      process.exit(1); 
    }
  }
};

startServer();