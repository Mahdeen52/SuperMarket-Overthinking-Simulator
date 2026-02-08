const mongoose = require('mongoose');

const OverthinkingRuleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true // e.g., "price > 100", "category === 'Electronics'"
    },
    personalityImpact: {
        chaosIndex: { type: Number, default: 0 },
        guiltScore: { type: Number, default: 0 },
        overthinkingLevel: { type: Number, default: 0 }
    },
    responseTemplate: {
        type: String,
        required: true // e.g., "Are you REALLY sure you need this expensive item?"
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model('OverthinkingRule', OverthinkingRuleSchema);
