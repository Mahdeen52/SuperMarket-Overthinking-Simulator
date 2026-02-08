const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

// Fallback JWT Secret (used if .env is not loaded)
const JWT_SECRET = process.env.JWT_SECRET || 'd93f7e12b8a45c1f09e4a6b2d17c3f8e';

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    }
    catch (error) {
        res.status(401).json({ message: 'Unauthorized access' });
    }
}

module.exports = authMiddleware;