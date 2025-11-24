const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

/*
  Archivo: backend/models/Product.js
  Propósito: Definir el modelo `Product` usado por Sequelize.

  Qué modificar aquí:
  - Añadir/editar campos: si necesitas más atributos (categoría, SKU, etc.),
    agrégalos aquí con su tipo y validaciones.
  - Validaciones: para lógica más compleja, considera agregar hooks
    (`beforeCreate`, `beforeUpdate`) o validaciones personalizadas.
  - Migraciones: cuando el esquema cambie en producción, usa migraciones
    en lugar de modificar directamente el modelo y llamar a `sync()`.
*/

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Product;
