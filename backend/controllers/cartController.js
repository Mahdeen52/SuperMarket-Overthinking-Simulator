const Cart = require('../models/Cart.model');
const User = require('../models/User.model');
const Item = require('../models/Item.model');

// @desc    Get user's cart
// @route   GET /api/cart
// @access  Private
const getCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({ user: req.user._id }).populate('items.item');

        if (!cart) {
            cart = await Cart.create({ user: req.user._id, items: [] });
        }

        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Add item to cart
// @route   POST /api/cart/add
// @access  Private
const addToCart = async (req, res) => {
    try {
        const { itemId, quantity = 1 } = req.body;

        // Verify item exists
        const item = await Item.findById(itemId);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }

        let cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            cart = await Cart.create({
                user: req.user._id,
                items: [{ item: itemId, quantity }]
            });
        } else {
            // Check if item already in cart
            const existingItemIndex = cart.items.findIndex(
                cartItem => cartItem.item.toString() === itemId
            );

            if (existingItemIndex > -1) {
                cart.items[existingItemIndex].quantity += quantity;
            } else {
                cart.items.push({ item: itemId, quantity });
            }
        }

        await cart.save();
        await cart.populate('items.item');

        res.json({
            message: 'Item added to cart',
            cart
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Remove item from cart (this triggers overthinking)
// @route   POST /api/cart/remove
// @access  Private
const removeFromCart = async (req, res) => {
    try {
        const { itemId } = req.body;

        const cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Check if item was in cart
        const itemIndex = cart.items.findIndex(
            cartItem => cartItem.item.toString() === itemId
        );

        if (itemIndex === -1) {
            return res.status(400).json({ message: 'Item not in cart' });
        }

        // Remove item from cart
        cart.items.splice(itemIndex, 1);
        await cart.save();

        // Increment overthinking count (user added then removed - classic overthinking!)
        await User.findByIdAndUpdate(req.user._id, {
            $inc: { 'stats.overthinkingCount': 1 }
        });

        await cart.populate('items.item');

        res.json({
            message: 'You overthought it and removed the item from cart!',
            cart,
            overthinkingTriggered: true
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update item quantity in cart
// @route   PUT /api/cart/update
// @access  Private
const updateCartItem = async (req, res) => {
    try {
        const { itemId, quantity } = req.body;

        if (quantity < 1) {
            return res.status(400).json({ message: 'Quantity must be at least 1' });
        }

        const cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const itemIndex = cart.items.findIndex(
            cartItem => cartItem.item.toString() === itemId
        );

        if (itemIndex === -1) {
            return res.status(400).json({ message: 'Item not in cart' });
        }

        cart.items[itemIndex].quantity = quantity;
        await cart.save();
        await cart.populate('items.item');

        res.json({ message: 'Cart updated', cart });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Clear entire cart
// @route   DELETE /api/cart
// @access  Private
const clearCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        cart.items = [];
        await cart.save();

        res.json({ message: 'Cart cleared', cart });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getCart,
    addToCart,
    removeFromCart,
    updateCartItem,
    clearCart
};
