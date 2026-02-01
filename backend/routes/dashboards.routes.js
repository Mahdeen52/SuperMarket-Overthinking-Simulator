const express = require('express');
const router = express.Router();
const { getDashboardStats } = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/auth.middleware');

router.use(authMiddleware);

// GET /api/dashboard/stats - Get user statistics
router.get('/stats', getDashboardStats);

module.exports = router;
