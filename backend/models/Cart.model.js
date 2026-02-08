const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
        min: 1
    },
    addedAt: {
        type: Date,
        default: Date.now
    }
});

const CartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    items: [CartItemSchema],
    totalPrice: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

// Calculate total price before saving
CartSchema.pre('save', async function () {
    if (this.items.length > 0) {
        await this.populate('items.item');
        this.totalPrice = this.items.reduce((total, cartItem) => {
            return total + (cartItem.item.price * cartItem.quantity);
        }, 0);
    } else {
        this.totalPrice = 0;
    }
});

module.exports = mongoose.model('Cart', CartSchema);
