// ============================================
// DATABASE SEED SCRIPT
// ============================================
// Run this script to populate the database with products
// Usage: node scripts/seed.js
// ============================================

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Item = require('../models/Item.model');
const { getAllProducts, getProductCount } = require('../data/products.data');

// Load environment variables
dotenv.config();

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/supermarket-simulator';

const seedDatabase = async () => {
    try {
        console.log('🌱 Starting database seed...\n');

        // Connect to MongoDB
        await mongoose.connect(MONGO_URI);
        console.log('✅ Connected to MongoDB\n');

        // Clear existing items
        const deletedCount = await Item.deleteMany({});
        console.log(`🗑️  Cleared ${deletedCount.deletedCount} existing items\n`);

        // Get all products from data layer
        const products = getAllProducts();
        console.log(`📦 Found ${products.length} products to seed\n`);

        // Insert products
        const insertedItems = await Item.insertMany(products);
        console.log(`✅ Successfully inserted ${insertedItems.length} products!\n`);

        // Display summary by category
        console.log('📊 Products by category:');
        const categories = {};
        products.forEach(p => {
            categories[p.category] = (categories[p.category] || 0) + 1;
        });
        Object.entries(categories).forEach(([cat, count]) => {
            console.log(`   • ${cat}: ${count} products`);
        });

        console.log('\n🎉 Database seeding complete!');

    } catch (error) {
        console.error('❌ Seeding failed:', error.message);
    } finally {
        await mongoose.connection.close();
        console.log('\n👋 Disconnected from MongoDB');
        process.exit(0);
    }
};

// Run the seed
seedDatabase();
