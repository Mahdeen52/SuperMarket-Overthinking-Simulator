// ============================================
// SUPERMARKET WORLDWIDE PRODUCT DATA
// ============================================
// Standard international supermarket products
// BDT pricing with nutritional information
// ============================================

const PRODUCT_DATA = {
    // ==========================================
    // FRESH PRODUCE
    // ==========================================
    freshProduce: {
        category: 'Fresh Produce',
        products: [
            {
                name: 'Organic Bananas - 1 bunch',
                subcategory: 'Fruits',
                segment: 'Organic',
                price: 122,
                originalPrice: 146,
                brand: 'Fresh Farms',
                image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop',
                comment: 'Perfectly ripe, ready to eat',
                rating: 4.7,
                nutritionInfo: {
                    calories: 105,
                    protein: '1.3g',
                    carbs: '27g',
                    fat: '0.4g'
                },
                nutritionJoke: '105 calories per banana - nature\'s original energy bar, but without the premium price tag!'
            },
            {
                name: 'Red Apples - 1kg',
                subcategory: 'Fruits',
                segment: 'Premium',
                price: 390,
                brand: 'Orchard Select',
                image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop',
                comment: 'Crisp and sweet Gala apples',
                rating: 4.8,
                nutritionInfo: {
                    calories: 95,
                    protein: '0.5g',
                    carbs: '25g',
                    fat: '0.3g'
                },
                nutritionJoke: 'An apple a day keeps the doctor away. But if the doctor is cute, skip the apple!'
            },
            {
                name: 'Fresh Spinach - 1 bunch',
                subcategory: 'Vegetables',
                segment: 'Healthy',
                price: 49,
                brand: 'Green Valley',
                image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop',
                comment: 'Fresh baby spinach',
                rating: 4.5,
                nutritionInfo: {
                    calories: 7,
                    protein: '0.9g',
                    carbs: '1.1g',
                    fat: '0.1g'
                },
                nutritionJoke: 'Only 7 calories per serving! You\'d have to eat 200 servings to gain a pound. Challenge accepted?'
            }
        ]
    },

    // ==========================================
    // DAIRY & EGGS
    // ==========================================
    dairyEggs: {
        category: 'Dairy & Eggs',
        products: [
            {
                name: 'Fresh Milk - 1 Liter',
                subcategory: 'Milk',
                segment: 'Standard',
                price: 110,
                brand: 'Meadow Fresh',
                image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop',
                comment: 'Farm fresh whole milk',
                rating: 4.6,
                nutritionInfo: {
                    calories: 149,
                    protein: '8g',
                    carbs: '12g',
                    fat: '8g'
                },
                nutritionJoke: 'Got milk? Got 8g of protein! Your bones will thank you, even if your scale won\'t.'
            },
            {
                name: 'Farm Eggs - 12 pack',
                subcategory: 'Eggs',
                segment: 'Premium',
                price: 207,
                originalPrice: 220,
                brand: 'Happy Hens',
                image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop',
                comment: 'Large brown eggs',
                rating: 4.9,
                nutritionInfo: {
                    calories: 72,
                    protein: '6g',
                    carbs: '0.4g',
                    fat: '5g'
                },
                nutritionJoke: 'Each egg is a tiny protein bomb. The chicken worked hard on this, so you better eat it!'
            },
            {
                name: 'Plain Yogurt - 500g',
                subcategory: 'Yogurt',
                segment: 'Healthy',
                price: 268,
                brand: 'Olympus',
                image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop',
                comment: 'Thick and creamy, plain',
                rating: 4.7,
                nutritionInfo: {
                    calories: 100,
                    protein: '17g',
                    carbs: '6g',
                    fat: '0.7g'
                },
                nutritionJoke: '17g of protein! It\'s basically a workout in a cup, minus the actual workout.'
            }
        ]
    },

    // ==========================================
    // MEAT & SEAFOOD
    // ==========================================
    meatSeafood: {
        category: 'Meat & Seafood',
        products: [
            {
                name: 'Chicken Breast - 1kg',
                subcategory: 'Poultry',
                segment: 'Premium',
                price: 650,
                brand: 'Farm Pride',
                image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=400&fit=crop',
                comment: 'Boneless, skinless',
                rating: 4.8,
                nutritionInfo: {
                    calories: 165,
                    protein: '31g',
                    carbs: '0g',
                    fat: '3.6g'
                },
                nutritionJoke: '31g of protein! Your muscles just got excited. Time to meal prep for the entire week!'
            },
            {
                name: 'Atlantic Salmon - 500g',
                subcategory: 'Fish',
                segment: 'Premium',
                price: 2684,
                originalPrice: 2928,
                brand: 'Ocean Catch',
                image: 'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=400&h=400&fit=crop',
                comment: 'Fresh, never frozen',
                rating: 4.9,
                nutritionInfo: {
                    calories: 208,
                    protein: '20g',
                    carbs: '0g',
                    fat: '13g'
                },
                nutritionJoke: 'Full of omega-3s! Your brain will be so sharp, you might actually remember what you came to buy!'
            },
            {
                name: 'Ground Beef - 500g',
                subcategory: 'Beef',
                segment: 'Standard',
                price: 488,
                brand: 'Ranch Fresh',
                image: 'https://images.unsplash.com/photo-1588347818036-558601350947?w=400&h=400&fit=crop',
                comment: 'Lean beef mince',
                rating: 4.5,
                nutritionInfo: {
                    calories: 254,
                    protein: '17g',
                    carbs: '0g',
                    fat: '20g'
                },
                nutritionJoke: 'Your future burger just entered the chat. Worth every delicious calorie!'
            }
        ]
    },

    // ==========================================
    // BAKERY
    // ==========================================
    bakery: {
        category: 'Bakery',
        products: [
            {
                name: 'Artisan Sourdough Bread',
                subcategory: 'Bread',
                segment: 'Premium',
                price: 342,
                brand: 'Craft Bakery',
                image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop',
                comment: 'Freshly baked daily',
                rating: 4.8,
                nutritionInfo: {
                    calories: 120,
                    protein: '4g',
                    carbs: '24g',
                    fat: '0.5g'
                },
                nutritionJoke: 'Carbs are just happiness molecules. This bread has 24g of pure joy per slice!'
            },
            {
                name: 'Croissants - 4 pack',
                subcategory: 'Pastries',
                segment: 'Premium',
                price: 549,
                brand: 'French Corner',
                image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
                comment: 'Buttery, flaky layers',
                rating: 4.9,
                nutritionInfo: {
                    calories: 272,
                    protein: '5g',
                    carbs: '31g',
                    fat: '14g'
                },
                nutritionJoke: '272 calories of buttery bliss. Your diet can start tomorrow. Or Monday. Definitely Monday.'
            },
            {
                name: 'Wheat Bagels - 6 pack',
                subcategory: 'Bagels',
                segment: 'Healthy',
                price: 350,
                brand: 'NYC Bakery',
                image: 'https://images.unsplash.com/photo-1558401181-c4e1d0e9e7e2?w=400&h=400&fit=crop',
                comment: 'Chewy and delicious',
                rating: 4.6,
                nutritionInfo: {
                    calories: 245,
                    protein: '10g',
                    carbs: '48g',
                    fat: '1.5g'
                },
                nutritionJoke: 'A bagel is just a donut that went to college. 10g protein proves it\'s the smart choice!'
            }
        ]
    },

    // ==========================================
    // BEVERAGES
    // ==========================================
    beverages: {
        category: 'Beverages',
        products: [
            {
                name: 'Orange Juice - 1L',
                subcategory: 'Juice',
                segment: 'Premium',
                price: 366,
                brand: 'Sunrise',
                image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop',
                comment: '100% pure squeezed',
                rating: 4.7,
                nutritionInfo: {
                    calories: 112,
                    protein: '2g',
                    carbs: '26g',
                    fat: '0.5g'
                },
                nutritionJoke: 'Vitamin C in a glass! Your immune system just did a happy dance.'
            },
            {
                name: 'Premium Coffee Beans - 250g',
                subcategory: 'Coffee',
                segment: 'Premium',
                price: 1159,
                originalPrice: 1220,
                brand: 'Mountain Roast',
                image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
                comment: 'Medium roast, whole bean',
                rating: 4.9,
                nutritionInfo: {
                    calories: 2,
                    protein: '0.3g',
                    carbs: '0g',
                    fat: '0g'
                },
                nutritionJoke: '2 calories per cup! The real energy comes from the caffeine hitting your bloodstream at 6 AM.'
            },
            {
                name: 'Green Tea - 50 bags',
                subcategory: 'Tea',
                segment: 'Healthy',
                price: 609,
                brand: 'Zen Garden',
                image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop',
                comment: 'Premium Japanese sencha',
                rating: 4.6,
                nutritionInfo: {
                    calories: 0,
                    protein: '0g',
                    carbs: '0g',
                    fat: '0g'
                },
                nutritionJoke: 'Zero calories! It\'s basically flavored water that makes you feel sophisticated and zen.'
            }
        ]
    },

    // ==========================================
    // SNACKS
    // ==========================================
    snacks: {
        category: 'Snacks & Confectionery',
        products: [
            {
                name: 'Mixed Nuts - 200g',
                subcategory: 'Nuts',
                segment: 'Premium',
                price: 650,
                brand: 'Nature\'s Best',
                image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=400&fit=crop',
                comment: 'Almonds, cashews, walnuts',
                rating: 4.8,
                nutritionInfo: {
                    calories: 607,
                    protein: '20g',
                    carbs: '21g',
                    fat: '54g'
                },
                nutritionJoke: 'Healthy fats! Keep telling yourself that as you finish the entire container during one Netflix episode.'
            },
            {
                name: 'Dark Chocolate Bar - 100g',
                subcategory: 'Chocolate',
                segment: 'Premium',
                price: 280,
                brand: 'Artisan Cocoa',
                image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=400&fit=crop',
                comment: '70% cacao, rich flavor',
                rating: 4.7,
                nutritionInfo: {
                    calories: 170,
                    protein: '2g',
                    carbs: '13g',
                    fat: '12g'
                },
                nutritionJoke: 'Dark chocolate has antioxidants! It\'s practically a vegetable. Eat the whole bar guilt-free!'
            },
            {
                name: 'Potato Chips - 100g',
                subcategory: 'Chips',
                segment: 'Standard',
                price: 92,
                brand: 'Crispy Co',
                image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=400&fit=crop',
                comment: 'Sea salt crisps',
                rating: 4.5,
                nutritionInfo: {
                    calories: 536,
                    protein: '7g',
                    carbs: '52g',
                    fat: '35g'
                },
                nutritionJoke: 'The bag says 5 servings. You and I both know it\'s 1 serving. Let\'s be honest here.'
            }
        ]
    },

    // ==========================================
    // PANTRY STAPLES
    // ==========================================
    pantryStaples: {
        category: 'Grocery',
        products: [
            {
                name: 'Olive Oil - 500ml',
                subcategory: 'Oils',
                segment: 'Premium',
                price: 950,
                brand: 'Mediterranean Gold',
                image: 'https://images.unsplash.com/photo-1474979266404-7eaacdc75e9a?w=400&h=400&fit=crop',
                comment: 'Extra virgin olive oil',
                rating: 4.9,
                nutritionInfo: {
                    calories: 119,
                    protein: '0g',
                    carbs: '0g',
                    fat: '14g'
                },
                nutritionJoke: 'Pure fat, but the good kind! Mediterranean diet approved. You\'re basically living in Italy now.'
            },
            {
                name: 'Basmati Rice - 1kg',
                subcategory: 'Rice',
                segment: 'Premium',
                price: 207,
                brand: 'Thai Gold',
                image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
                comment: 'fragrant long grain',
                rating: 4.8,
                nutritionInfo: {
                    calories: 205,
                    protein: '4g',
                    carbs: '45g',
                    fat: '0.4g'
                },
                nutritionJoke: 'Carbs are fuel! Your body will run on this for hours. Just don\'t think about the gym.'
            },
            {
                name: 'Pasta - 500g',
                subcategory: 'Pasta',
                segment: 'Healthy',
                price: 200,
                brand: 'Bella Italia',
                image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=400&h=400&fit=crop',
                comment: 'Organic spaghetti',
                rating: 4.7,
                nutritionInfo: {
                    calories: 190,
                    protein: '7g',
                    carbs: '38g',
                    fat: '1g'
                },
                nutritionJoke: '7g protein per serving! See, pasta IS healthy. Tell your trainer I said so.'
            }
        ]
    },

    // ==========================================
    // FROZEN FOODS
    // ==========================================
    frozenFoods: {
        category: 'Frozen Foods',
        products: [
            {
                name: 'Frozen Berries - 500g',
                subcategory: 'Frozen Fruits',
                segment: 'Healthy',
                price: 610,
                brand: 'Berry Best',
                image: 'https://images.unsplash.com/photo-1570145820404-cf22b5349706?w=400&h=400&fit=crop',
                comment: 'Mixed berries mix',
                rating: 4.6,
                nutritionInfo: {
                    calories: 48,
                    protein: '1g',
                    carbs: '12g',
                    fat: '0.3g'
                },
                nutritionJoke: 'Same nutrition as fresh, half the price, lasts 10x longer. Frozen berries are the smart choice!'
            },
            {
                name: 'Vanilla Ice Cream - 1L',
                subcategory: 'Ice Cream',
                segment: 'Premium',
                price: 464,
                brand: 'Creamy Dreams',
                image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=400&fit=crop',
                comment: 'Rich vanilla bean',
                rating: 4.8,
                nutritionInfo: {
                    calories: 207,
                    protein: '4g',
                    carbs: '24g',
                    fat: '11g'
                },
                nutritionJoke: 'Life is short. Eat the ice cream. You can do extra steps tomorrow. (You won\'t, but still.)'
            },
            {
                name: 'Frozen Pizza - Margherita',
                subcategory: 'Frozen Meals',
                segment: 'Standard',
                price: 427,
                originalPrice: 488,
                brand: 'Stone Oven',
                image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop',
                comment: 'Thin crust pizza',
                rating: 4.4,
                nutritionInfo: {
                    calories: 266,
                    protein: '12g',
                    carbs: '33g',
                    fat: '10g'
                },
                nutritionJoke: '266 calories per slice, 8 slices per pizza. Math is for people who share their pizza.'
            }
        ]
    }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

const getAllProducts = () => {
    const allProducts = [];
    Object.values(PRODUCT_DATA).forEach(categoryData => {
        categoryData.products.forEach(product => {
            allProducts.push({
                ...product,
                category: categoryData.category
            });
        });
    });
    return allProducts;
};

const getProductsByCategory = (category) => {
    const categoryKey = Object.keys(PRODUCT_DATA).find(
        key => PRODUCT_DATA[key].category === category
    );
    return categoryKey ? PRODUCT_DATA[categoryKey].products : [];
};

const getCategories = () => {
    return Object.values(PRODUCT_DATA).map(data => data.category);
};

const getProductCount = () => {
    return getAllProducts().length;
};

module.exports = {
    PRODUCT_DATA,
    getAllProducts,
    getProductsByCategory,
    getCategories,
    getProductCount
};
