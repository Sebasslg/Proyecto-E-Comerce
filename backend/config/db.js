const { Sequelize } = require('sequelize');
require('dotenv').config();

/*
  Archivo: backend/config/db.js
  Propósito: Crear y exportar la instancia de Sequelize usada en la app.

  Qué modificar aquí:
  - `backend/.env`: cambiar `DB_NAME`, `DB_USER`, `DB_PASS` y `DB_HOST`.
  - `dialect`: cambiar si usas otra base de datos (postgres, sqlite, mssql).
  - Opciones adicionales (pool, logging) se pueden incluir en este objeto.

  Nota: Para entornos de producción es mejor leer las credenciales de un
  servicio de secretos o variables de entorno gestionadas, no guardar en
  archivos en el repositorio.
*/

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    // Ejemplo: desactivar logging en producción
    // logging: process.env.NODE_ENV === 'production' ? false : console.log,
  }
);

module.exports = sequelize;
