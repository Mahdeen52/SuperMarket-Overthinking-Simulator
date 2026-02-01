const express = require('express');
const router = express.Router();
const { register, login, getMe, googleAuth } = require('../controllers/authController');
const authMiddleware = require('../middleware/auth.middleware');

// @route   POST /api/auth/register
router.post('/register', register);

// @route   POST /api/auth/login
router.post('/login', login);

// @route   GET /api/auth/me
router.get('/me', authMiddleware, getMe);

// @route   POST /api/auth/google
router.post('/google', googleAuth);

module.exports = router;
