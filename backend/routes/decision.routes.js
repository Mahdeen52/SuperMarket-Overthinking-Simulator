const express = require('express');
const router = express.Router();
const { makeDecision, getMyDecisions } = require('../controllers/decisionController');
const authMiddleware = require('../middleware/auth.middleware');
const decisionLimit = require('../middleware/decisionLimit.middleware');

// Apply auth middleware to all routes
router.use(authMiddleware);

// POST /api/decisions - Make a decision (Protected + Rate Limited)
router.post('/', decisionLimit, makeDecision);

// GET /api/decisions - Get history
router.get('/', getMyDecisions);

module.exports = router;
