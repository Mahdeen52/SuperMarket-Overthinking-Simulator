const Decision = require('../models/Decision.model');
const User = require('../models/User.model');
const Item = require('../models/Item.model');

// @desc    Record a decision (Buy or Pass)
// @route   POST /api/decisions
// @access  Private
const makeDecision = async (req, res) => {
    try {
        const { itemId, action } = req.body; // action: 'buy' or 'pass'

        // Validate action
        if (!['buy', 'pass'].includes(action)) {
            return res.status(400).json({ message: "Action must be 'buy' or 'pass'" });
        }

        // Create decision record
        const decision = await Decision.create({
            user: req.user._id,
            item: itemId,
            action: action,
            date: new Date()
        });

        // Update User Stats
        // If 'pass', increment overthinking count (simulating indecision/rejection)
        // Always increment decisionsMade
        const update = {
            $inc: {
                'stats.decisionsMade': 1,
                'stats.overthinkingCount': action === 'pass' ? 1 : 0
            }
        };

        const user = await User.findByIdAndUpdate(req.user._id, update, { new: true }).select('stats');

        res.status(201).json({
            message: action === 'buy' ? "Item added to imaginary cart!" : "You overthought it and put it back.",
            decision,
            newStats: user.stats
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get user's decision history
// @route   GET /api/decisions
// @access  Private
const getMyDecisions = async (req, res) => {
    try {
        const decisions = await Decision.find({ user: req.user._id })
            .populate('item', 'name price image')
            .sort({ createdAt: -1 });

        res.json(decisions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    makeDecision,
    getMyDecisions
};
