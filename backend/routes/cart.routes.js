const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth.middleware');
const {
    getCart,
    addToCart,
    removeFromCart,
    updateCartItem,
    clearCart
} = require('../controllers/cartController');

router.get('/', protect, getCart);
router.post('/add', protect, addToCart);
router.post('/remove', protect, removeFromCart);
router.put('/update', protect, updateCartItem);
router.delete('/', protect, clearCart);

module.exports = router;
