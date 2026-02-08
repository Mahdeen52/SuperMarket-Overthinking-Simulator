const express = require('express');
const router = express.Router();
const { getItems, getItemById, createItem } = require('../controllers/itemController');
const authMiddleware = require('../middleware/auth.middleware');

// All item routes are protected
router.route('/').get(authMiddleware, getItems).post(authMiddleware, createItem);
router.route('/:id').get(authMiddleware, getItemById);

module.exports = router;
