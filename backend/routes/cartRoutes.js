const express = require('express');
const router = express.Router();
const {
  addToCart,
  removeFromCart,
  getCart,
  updateCart,
} = require('../controllers/cartController');

router.route('/add').post(addToCart);
router.route('/update').post(updateCart);
router.route('/remove/:id').delete(removeFromCart);
router.route('/').get(getCart);

module.exports = router;
