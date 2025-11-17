const Product = require('../models/Product');

// @desc    Obtener todos los productos
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
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
