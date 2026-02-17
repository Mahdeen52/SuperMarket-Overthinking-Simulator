/**
 * Overthinking Controller
 * Handles HTTP requests for overthinking-related features.
 */

const CommentService = require('../services/commentService');

// @desc    Get a randomized overthinking comment
// @route   GET /api/overthinking/comment
// @access  Public
const getOverthinkingComment = async (req, res) => {
    try {
        const { category, productName } = req.query;
        const comment = await CommentService.getRandomComment(category, productName);
        res.json({ comment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getOverthinkingComment
};
