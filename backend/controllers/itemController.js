<<<<<<< Updated upstream
=======
const Item = require('../models/Item.model');

// @desc    Get all items
// @route   GET /api/items
// @access  Private
const getItems = async (req, res) => {
    try {
        const items = await Item.find({});
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get single item
// @route   GET /api/items/:id
// @access  Private
const getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a new item (Admin only - simplified for now)
// @route   POST /api/items
// @access  Private
const createItem = async (req, res) => {
    try {
        const { name, category, price, image, comment, overthinkingComment } = req.body;
        const item = new Item({
            name,
            category, 
            price,
            image,
            comment,
            overthinkingComment
        });
        const createdItem = await item.save();
        res.status(201).json(createdItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getItems,
    getItemById,
    createItem
};
>>>>>>> Stashed changes
