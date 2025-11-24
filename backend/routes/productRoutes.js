const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

/*
  Archivo: backend/routes/productRoutes.js
  Propósito: Definir las rutas REST para productos.

  Cómo extender:
  - Añadir middleware por ruta: `router.post('/', authMiddleware, createProduct)`
  - Agregar sub-rutas (ej. `/search`, `/category/:id`) antes de `/:id`.
*/

router.route('/').get(getProducts).post(createProduct);
router.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct);

module.exports = router;
