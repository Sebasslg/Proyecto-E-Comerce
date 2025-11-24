const { Sequelize } = require('sequelize');
require('dotenv').config();

/*
  Archivo: backend/config/db.js
  Propósito: Crear y exportar la instancia de Sequelize usada en la app.
  
  ADAPTACIÓN: Se añadieron opciones para resolver el conflicto de protocolo
  (PROTOCOL_CONNECTION_LOST) y mejorar la estabilidad en el entorno de contenedores
  Azure.
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

    // === SOLUCIÓN PARA PROTOCOL_CONNECTION_LOST ===
    dialectOptions: {
        // Fuerza la codificación a utf8mb4 y usa el motor de autenticación antiguo para compatibilidad con MySQL 8
        charset: 'utf8mb4',
        authPlugins: {
            mysql_native_password: () => () => require('mysql2/lib/auth_plugins/mysql_native_password')
        },
        // Aumenta el tiempo de espera para la conexión inicial (mitiga el "Connection lost")
        connectTimeout: 60000 
    },
    pool: {
        max: 5,
        min: 0,
        // Aumenta el tiempo que Node.js espera para adquirir una conexión
        acquire: 30000, 
        idle: 10000
    },
    // ===============================================
  }
);

module.exports = sequelize;