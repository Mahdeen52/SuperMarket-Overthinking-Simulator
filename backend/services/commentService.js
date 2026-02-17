/**
 * Comment Service - Domain Logic
 * Handles the logic for picking randomized comments.
 * Depends on ExternalAPI (Interface).
 */

const ExternalAPI = require('./externalApiService');

const CommentService = {
    /**
     * Get a randomized overthinking comment based on category
     * @param {string} category - Product category
     * @returns {Promise<string>} - A random comment
     */
    getRandomComment: async (category, productName) => {
        try {
            const comments = await ExternalAPI.fetchCommentsByCategory(category, productName);
            const randomIndex = Math.floor(Math.random() * comments.length);
            return comments[randomIndex];
        } catch (error) {
            console.error('Error fetching overthinking comment:', error);
            return "I'm overthinking this so much that I can't even think of a comment.";
        }
    }
};

module.exports = CommentService;
