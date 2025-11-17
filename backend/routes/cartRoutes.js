const express = require('express');
const router = express.Router();
const {
  addToCart,
  removeFromCart,
  getCart,
} = require('../controllers/cartController');

router.route('/add').post(addToCart);
router.route('/remove/:id').delete(removeFromCart);
router.route('/').get(getCart);

module.exports = router;
