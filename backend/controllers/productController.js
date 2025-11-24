const Product = require('../models/Product');

/*
  Archivo: backend/controllers/productController.js
  Propósito: Implementa la lógica de negocio para los endpoints de productos.

  Qué modificar aquí:
  - Validaciones y sanitización de `req.body` antes de crear/actualizar.
  - Reglas de negocio (por ejemplo: decrementar stock al crear un pedido).
  - Manejo de errores más detallado (códigos de error y logs).
  - Añadir paginación/filtros en `getProducts` si la tabla crece.
*/

// @desc    Obtener todos los productos
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    // Ejemplo: Podrías añadir `limit` y `offset` usando `req.query`.
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// @desc    Obtener un producto por ID
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// @desc    Crear un producto
// @route   POST /api/products
// @access  Public
const createProduct = async (req, res) => {
  const { name, description, price, stock, image } = req.body;
  try {
    // Recomendación: validar los campos aquí (ej. usar Joi zod o express-validator)
    const product = await Product.create({
      name,
      description,
      price,
      stock,
      image,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// @desc    Actualizar un producto
// @route   PUT /api/products/:id
// @access  Public
const updateProduct = async (req, res) => {
  const { name, description, price, stock, image } = req.body;
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.stock = stock || product.stock;
      product.image = image || product.image;
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// @desc    Eliminar un producto
// @route   DELETE /api/products/:id
// @access  Public
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.destroy();
      res.json({ message: 'Producto eliminado' });
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error del servidor' });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
