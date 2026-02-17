const express = require('express');
const router = express.Router();
const { getOverthinkingComment } = require('../controllers/overthinkingController');

// GET /api/overthinking/comment?category=...
router.get('/comment', getOverthinkingComment);

module.exports = router;
