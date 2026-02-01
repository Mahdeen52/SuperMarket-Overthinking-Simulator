const Decision = require('../models/Decision');

const decisionLimitMiddleware = async (req, res, next) => {
  try {
    const today = new Date();
    today.setHours(0,0,0,0);

    const count = await Decision.countDocuments({
      user: req.user._id,
      date: { $gte: today }
    });

    if (count >= 30) { // limit 30 decisions per day
      return res.status(403).json({ message: 'Daily decision limit reached' });
    }

    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = decisionLimitMiddleware;
