const mongoose = require('mongoose');

const ReceiptSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    ocrText: {
        type: String,
        default: ''
    },
    extractedItems: [{
        name: String,
        price: Number,
        quantity: Number
    }],
    totalAmount: {
        type: Number,
        default: 0
    },
    overthinkingReport: {
        type: String,
        default: ''
    },
    analysisDate: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('Receipt', ReceiptSchema);
