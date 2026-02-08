const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth.middleware');
const {
    checkout,
    getOrders,
    getOrderById
} = require('../controllers/orderController');

router.post('/checkout', protect, checkout);
router.get('/', protect, getOrders);
router.get('/:id', protect, getOrderById);

module.exports = router;
