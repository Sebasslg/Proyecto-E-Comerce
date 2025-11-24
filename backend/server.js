const express = require('express');
const cors = require('cors');
require('dotenv').config();

/*
  Archivo: backend/server.js
  Propósito: Punto de entrada del servidor Express. Aquí se configuran los
  middlewares globales, se montan las rutas de la API y se sincroniza la DB.

  Qué modificar aquí normalmente:
  - Cambiar el puerto por defecto: modificar `process.env.PORT` en `backend/.env`.
  - Añadir middlewares globales (ej. autenticación, rate-limit, logs).
  - Montar nuevas rutas: `app.use('/api/mi-recurso', miRouter)`.
  - Si prefieres ejecutar migraciones en vez de `sequelize.sync()`, reemplaza
    la llamada por tu flujo de migraciones (Sequelize CLI o umzug).
*/

const sequelize = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();

// Middlewares globales - aquí puedes insertar auth, logs, etc.
app.use(cors());
app.use(express.json());

// Rutas de la API - modifica o añade nuevas rutas según necesites.
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Por defecto hacemos sync para desarrollo rápido. En producción
    // se recomienda usar migraciones en lugar de `sync({ force: true })`.
    await sequelize.sync();
    console.log('Base de datos conectada...');

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
};

startServer();
