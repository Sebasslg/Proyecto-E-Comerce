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

module.exports = {
  addToCart,
  removeFromCart,
  getCart,
};
