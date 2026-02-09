const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Item = require('./models/Item.model');
const Decision = require('./models/Decision.model');
const { getAllProducts } = require('./data/products.data');

// Load env vars
dotenv.config();

// Connect to DB
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/supermarket-simulator')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const seedDB = async () => {
    try {
        // Get all products from the Bangladeshi product data
        const products = getAllProducts();

        // Transform products to match the Item model schema
        const items = products.map(product => ({
            name: product.name,
            category: product.category,
            price: product.price,
            image: product.image,
            comment: product.comment,
            overthinkingComment: product.overthinkingComment,
            rating: product.rating,
            brand: product.brand,
            segment: product.segment,
            nutritionInfo: product.nutritionInfo,
            nutritionJoke: product.nutritionJoke
        }));

        await Decision.deleteMany({});
        console.log('Cleared existing decisions');

        await Item.deleteMany({});
        console.log('Cleared existing items');

        const Cart = require('./models/Cart.model');
        await Cart.deleteMany({});
        console.log('Cleared all user carts');

        await Item.insertMany(items);
        console.log(`Seeded ${items.length} Bangladeshi products`);

        process.exit();
    } catch (error) {
        console.error('Seeding error:', error);
        process.exit(1);
    }
};

seedDB();
