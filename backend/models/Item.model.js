const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    catrgory : {
        type: String,
        required: true,
        enum: ['Grocery', 'Electronics', 'Clothing','Household','Other']
    },
    price: {
        type: Number,
        required: true,
        min:0
    },
    image: {
        type: String,
    },
    comment: {
        type: String
    },
    overthinkingComment: { 
        type: String, 
        default: 'Are you sure you want this?' }

}, {timestamps: true});

module.exports = mongoose.model('Item', ItemSchema);