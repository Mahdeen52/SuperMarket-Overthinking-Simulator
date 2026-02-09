const User = require('../models/User.model');
const Decision = require('../models/Decision.model');

const getFunnyTag = (score) => {
    if (score <= 20) return "Decision Dynamo ⚡";
    if (score <= 40) return "Pantry Philosopher 🧐";
    if (score <= 60) return "Mid-Aisle Meditator 🧘";
    if (score <= 80) return "Paralysis Professional 🌀";
    return "Final Boss of Overthinking 👑";
};

// @desc    Get user dashboard statistics
// @route   GET /api/dashboard/stats
// @access  Private
const getDashboardStats = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const recentDecisions = await Decision.find({ user: req.user._id })
            .sort({ date: -1 })
            .limit(5)
            .populate('item', 'name image price');

        const hesitationCount = await Decision.countDocuments({
            user: req.user._id,
            choice: 'pass'
        });

        // Calculate Overthinking Score (Percentage)
        const total = user.stats.decisionsMade || 0;
        const overthinkingRate = total > 0 ? ((user.stats.overthinkingCount / total) * 100).toFixed(1) : 0;
        const overthinkingScore = parseFloat(overthinkingRate);

        const stats = {
            decisionsMade: total,
            overthinkingCount: user.stats.overthinkingCount || 0,
            hesitationCount: hesitationCount,
            overthinkingScore: overthinkingScore,
            funnyTag: getFunnyTag(overthinkingScore),
            recentActivity: recentDecisions
        };

        res.json(stats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getDashboardStats
};
