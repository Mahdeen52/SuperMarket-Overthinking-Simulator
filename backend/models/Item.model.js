const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: [
            'Rice & Grains',
            'Dal & Pulses',
            'Fish',
            'Vegetables',
            'Spices',
            'Snacks',
            'Beverages',
            'Bakery',
            'Grocery',
            'Fresh Produce',
            'Dairy & Eggs',
            'Meat & Seafood',
            'Frozen Foods',
            'Snacks & Confectionery',
            'Personal Care',
            'Household',
            'Electronics',
            'Health & Wellness',
            'Baby & Kids',
            'Pet Supplies',
            'Other'
        ]
    },
    subcategory: {
        type: String,
        default: 'General'
    },
    segment: {
        type: String,
        default: 'Standard'
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    originalPrice: {
        type: Number,
        default: null
    },
    image: {
        type: String
    },
    brand: {
        type: String,
        default: 'Store Brand'
    },
    comment: {
        type: String
    },
    overthinkingComment: {
        type: String,
        default: 'Are you sure you want this?'
    },
    inStock: {
        type: Boolean,
        default: true
    },
    merchantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Merchant',
        default: null
    },
    approved: {
        type: Boolean,
        default: true  // Auto-approve for seeded products, false for merchant-added
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 4
    },
    nutritionInfo: {
        calories: Number,
        protein: String,
        carbs: String,
        fat: String
    },
    nutritionJoke: {
        type: String,
        default: 'Nutrition তথ্য দেখে কি হবে? খাওয়াই আসল!'
    }
}, { timestamps: true });

module.exports = mongoose.model('Item', ItemSchema);