const mongoose = require('mongoose');

const MerchantSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    shopName: {
        type: String,
        required: true
    },
    shopDescription: {
        type: String
    },
    contactNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    tradeLicense: {
        type: String
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    totalProducts: {
        type: Number,
        default: 0
    },
    totalSales: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Merchant', MerchantSchema);
