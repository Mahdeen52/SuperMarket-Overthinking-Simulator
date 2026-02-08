const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Item = require('./models/Item.model');

// Load env vars
dotenv.config();

// Connect to DB
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/supermarket-simulator')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const items = [
    // GROCERY
    {
        name: "Organic Kale",
        catrgory: "Grocery",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1524179091875-bf99a9a6da79?w=400",
        comment: "Superfood or super-gross?",
        overthinkingComment: "You're going to buy this, let it rot in the crisper drawer for 2 weeks, and then throw it out. It's the circle of life. Just buy the chips."
    },
    {
        name: "Oat Milk (Barista Edition)",
        catrgory: "Grocery",
        price: 5.49,
        image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400",
        comment: "For your fancy coffee.",
        overthinkingComment: "Is it really milk if you have to squeeze it out of an oat? Also, 'Barista Edition' is just marketing speak for 'extra oil'. You're paying for oil."
    },
    {
        name: "Sushi Platter",
        catrgory: "Grocery",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400",
        comment: "Freshly made today.",
        overthinkingComment: "It's 4 PM. 'Fresh' is a relative term now. Do you trust the supermarket refrigeration supply chain with your life? It's a gamble."
    },
    {
        name: "Frozen Pizza",
        catrgory: "Grocery",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1571066811602-71083be05545?w=400",
        comment: "Dinner in 15 mins.",
        overthinkingComment: "The sodium content in this is enough to preserve a pharaoh. You'll wake up at 3 AM thirsty enough to drink a lake."
    },

    // ELECTRONICS
    {
        name: "Wireless Earbuds",
        catrgory: "Electronics",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        comment: "Knock-off brand.",
        overthinkingComment: "They'll work for exactly 32 days. Then the left one will die. Then you'll be the person walking around with one earbud like a cyborg on a budget."
    },
    {
        name: "Smart Watch",
        catrgory: "Electronics",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
        comment: "Tracks your steps.",
        overthinkingComment: "Do you really want a device that buzzes every time you sit still for too long? It's basically a shackle that monitors your laziness."
    },
    {
        name: "4K TV (55 inch)",
        catrgory: "Electronics",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
        comment: "Crystal clear picture.",
        overthinkingComment: "Do you need 4K? You mostly watch 10-year-old sitcoms. And where are you going to put the box? You can't throw away a TV box. It's illegal... socially."
    },

    // CLOTHING
    {
        name: "Generic Grey T-Shirt",
        catrgory: "Clothing",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        comment: "100% Cotton.",
        overthinkingComment: "It will shrink. It will become a crop top after one wash. Are you ready for that kind of exposure?"
    },
    {
        name: "Running Shoes",
        catrgory: "Clothing",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
        comment: "For your active lifestyle.",
        overthinkingComment: "You mean for running errands? Be honest. These shoes will never see a speed faster than a brisk walk to the fridge."
    },

    // HOUSEHOLD
    {
        name: "Scented Candle (Vanilla)",
        catrgory: "Household",
        price: 15.00,
        image: "https://images.unsplash.com/photo-1602166649712-4299b8b93998?w=400",
        comment: "Sets the mood.",
        overthinkingComment: "Fire in a jar. You'll light it, forget it, leave the house, and come back to a pile of ash. Or you'll never light it because 'it's for a special occasion' that never comes."
    },
    {
        name: "Succulent Plant",
        catrgory: "Household",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400",
        comment: "Hard to kill.",
        overthinkingComment: "Challenge accepted. You will overwater it. You will drown this desert plant with your love. It's already doomed."
    },
    {
        name: "Fancy Water Bottle",
        catrgory: "Household",
        price: 25.00,
        image: "https://images.unsplash.com/photo-1602143407151-01114192003f?w=400",
        comment: "Stay hydrated.",
        overthinkingComment: "You already have 5 water bottles. They are forming a colony in your cupboard. You don't need another vessel, you need discipline."
    },

    // OTHER
    {
        name: "Lottery Ticket",
        catrgory: "Other",
        price: 2.00,
        image: "https://images.unsplash.com/photo-1518688248740-75975b969c9d?w=400",
        comment: "Feeling lucky?",
        overthinkingComment: "You have a higher chance of being struck by lightning while being eaten by a shark. But sure, spend the $2. Hope is expensive."
    },
    {
        name: "Unknown Fruit",
        catrgory: "Grocery",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1615485925694-a69ea5bd9350?w=400",
        comment: "Exotic and spiky.",
        overthinkingComment: "How do you even open this? You'll need a youtube tutorial and a machete. It probably tastes like regret."
    }
];

const seedDB = async () => {
    try {
        await Item.deleteMany({});
        console.log('Cleared existing items');

        await Item.insertMany(items);
        console.log(`Seeded ${items.length} new items`);

        process.exit();
    } catch (error) {
        console.error('Seeding error:', error);
        process.exit(1);
    }
};

seedDB();
