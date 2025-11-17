// Simulación de un carrito en memoria (mejorado para manejar cantidades)
const cart = new Map(); // Usamos un Map para [productId, { product, quantity }]

// @desc    Agregar un producto al carrito
// @route   POST /api/cart/add
// @access  Public
const addToCart = (req, res) => {
  const product = req.body;
  if (!product || !product.id) {
    return res.status(400).json({ message: 'Datos de producto inválidos' });
  }

  if (cart.has(product.id)) {
    // Si el producto ya está, incrementa la cantidad
    const existingItem = cart.get(product.id);
    existingItem.quantity += 1;
  } else {
    // Si es un producto nuevo, lo agrega al carrito
    cart.set(product.id, { product, quantity: 1 });
  }
  
  res.status(200).json(Array.from(cart.values()));
};

// @desc    Eliminar un producto del carrito
// @route   DELETE /api/cart/remove/:id
// @access  Public
const removeFromCart = (req, res) => {
  const { id } = req.params;
  const productId = parseInt(id, 10);

  if (cart.has(productId)) {
    cart.delete(productId);
    res.status(200).json(Array.from(cart.values()));
  } else {
    res.status(404).json({ message: 'Producto no encontrado en el carrito' });
  }
};

// @desc    Obtener el carrito
// @route   GET /api/cart
// @access  Public
const getCart = (req, res) => {
  // Convertimos los valores del Map a un array para enviarlo como JSON
  res.json(Array.from(cart.values()));
};

// @desc    Actualizar cantidad de un producto en el carrito
// @route   POST /api/cart/update
// @access  Public
const updateCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const id = parseInt(productId, 10);

  if (!id || typeof quantity !== 'number') {
    return res.status(400).json({ message: 'productId y quantity son requeridos' });
  }

  if (quantity <= 0) {
    // eliminar
    if (cart.has(id)) cart.delete(id);
    return res.status(200).json(Array.from(cart.values()));
  }

  if (cart.has(id)) {
    const existing = cart.get(id);
    existing.quantity = quantity;
    cart.set(id, existing);
    return res.status(200).json(Array.from(cart.values()));
  }

  // Si no está en el carrito, intentamos obtener info del producto (opcional)
  try {
    const Product = require('../models/Product');
    const found = await Product.findByPk(id);
    if (!found) return res.status(404).json({ message: 'Producto no encontrado' });
    cart.set(id, { product: found.toJSON(), quantity });
    return res.status(200).json(Array.from(cart.values()));
  } catch (err) {
    console.error('Error al actualizar carrito', err);
    return res.status(500).json({ message: 'Error del servidor' });
  }
};

module.exports = {
  addToCart,
  removeFromCart,
  getCart,
  updateCart,
};
