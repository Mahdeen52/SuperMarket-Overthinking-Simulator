const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Item = require('./models/Item.model');

dotenv.config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/supermarket-simulator')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const items = [
    {
        name: "Generic Milk (2%)",
        catrgory: "Grocery", // Matching schema typo if exists, checking schema next
        price: 4.99,
        image: "https://placehold.co/200x200?text=Milk",
        comment: "It's just milk.",
        overthinkingComment: "Is 2% enough? Maybe you should get skim? But whole milk tastes better. What if the cows were sad? Is almond milk better for the environment? But almonds use so much water..."
    },
    {
        name: "Artisanal Sourdough Bread",
        catrgory: "Grocery",
        price: 8.50,
        image: "https://placehold.co/200x200?text=Bread",
        comment: "Freshly baked.",
        overthinkingComment: "It's $8.50 for flour and water. You could bake this yourself if you weren't so lazy. But do you even have a starter? You'd probably kill the starter."
    },
    {
        name: "Organic Avocado",
        catrgory: "Grocery",
        price: 2.99,
        image: "https://placehold.co/200x200?text=Avocado",
        comment: "Healthy fats.",
        overthinkingComment: "It will be ripe for exactly 15 minutes at 3 AM tomorrow. If you miss that window, it's mush. Also, did you know about the avocado cartels? You are funding crime with your toast."
    },
    {
        name: "Family Size Chips",
        catrgory: "Grocery",
        price: 5.49,
        image: "https://placehold.co/200x200?text=Chips",
        comment: "Great for parties.",
        overthinkingComment: "Family size? You live alone. You're going to eat this whole bag in one sitting while watching a show you've already seen 4 times. Just admit it."
    },
    {
        name: "Fancy Cheese",
        catrgory: "Grocery",
        price: 12.99,
        image: "https://placehold.co/200x200?text=Cheese",
        comment: "Aged 12 months.",
        overthinkingComment: "You don't even have crackers. You're just going to gnaw on a block of cheese like a medieval peasant? Who are you trying to impress with this? Your cat?"
    },
    {
        name: "Discount Sushi",
        catrgory: "Grocery",
        price: 6.99,
        image: "https://placehold.co/200x200?text=Sushi",
        comment: "Quick lunch.",
        overthinkingComment: "It's 50% off for a reason. Do you have a strong stomach? Is saving $7 worth a potential ER visit? The fish looks a bit... grey."
    }
];

const seedDB = async () => {
    await Item.deleteMany({});
    await Item.insertMany(items);
    console.log('Items seeded successfully');
    process.exit();
};

seedDB();
