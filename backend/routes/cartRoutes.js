const express = require('express');
const router = express.Router();
const { addToCart, removeFromCart, getCart, updateCart } = require('../controllers/cartController');

/*
  Archivo: backend/routes/cartRoutes.js
  Propósito: Rutas para operaciones de carrito.

  Consideraciones:
  - Estas rutas son públicas actualmente; para carritos por usuario añade
    autenticación y cambia el almacenamiento a persistente (DB/Redis).
  - Puedes renombrar `/add` a `POST /` si prefieres una API REST más tradicional.
*/

router.route('/add').post(addToCart);
router.route('/update').post(updateCart);
router.route('/remove/:id').delete(removeFromCart);
router.route('/').get(getCart);

module.exports = router;
