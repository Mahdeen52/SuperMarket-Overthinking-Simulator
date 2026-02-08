const User = require('../models/User.model');
const Decision = require('../models/Decision.model');

// @desc    Get user dashboard statistics
// @route   GET /api/dashboard/stats
// @access  Private
const getDashboardStats = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Calculate detailed stats
        // We could calculate this from the Decisions collection for accuracy, 
        // or use the cached stats in User model. Let's use User model for speed
        // but also fetch recent decisions for context.

        const recentDecisions = await Decision.find({ user: req.user._id })
            .sort({ date: -1 })
            .limit(5)
            .populate('item', 'name image price');

        const stats = {
            decisionsMade: user.stats.decisionsMade || 0,
            overthinkingCount: user.stats.overthinkingCount || 0,
            recentActivity: recentDecisions
        };

        // Calculate Overthinking Score (Percentage)
        const total = stats.decisionsMade;
        const overthinkingRate = total > 0 ? ((stats.overthinkingCount / total) * 100).toFixed(1) : 0;

        stats.overthinkingScore = overthinkingRate;

        res.json(stats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getDashboardStats
};
