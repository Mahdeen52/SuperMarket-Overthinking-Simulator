// ============================================
// DALCHAAL PRODUCT DATA LAYER
// ============================================
// Made in Bangladesh products with Taka pricing
// English overthinking comments with local humor
// Product data file location: backend/data/products.data.js
// ============================================

const BD_PRODUCT_DATA = {
    // ==========================================
    // RICE & GRAINS
    // ==========================================
    riceGrains: {
        category: 'Rice & Grains',
        products: [
            {
                name: 'Miniket Rice - 5kg',
                subcategory: 'Rice',
                segment: 'Premium',
                price: 450,
                originalPrice: 500,
                brand: 'Fresh BD',
                image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80',
                comment: 'Premium quality, fresh harvest',
                overthinkingComment: 'Miniket or Nazirshail? Miniket cooks easily but Nazirshail smells better. Mom used to say Miniket rice is fluffy. But guests expect Nazirshail. No guests coming now though. So which one?',
                rating: 4.8,
                nutritionInfo: {
                    calories: 130,
                    protein: '2.7g',
                    carbs: '28g',
                    fat: '0.3g'
                },
                nutritionJoke: 'Eating rice increases calories, not eating leaves stomach empty. Both are problems. Such is Bengali life!'
            },
            {
                name: 'Nazirshail Rice - 5kg',
                subcategory: 'Rice',
                segment: 'Premium',
                price: 550,
                brand: 'Dinajpur Harvest',
                image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&q=80',
                comment: 'Aromatic long grain',
                overthinkingComment: '550 taka for 5kg rice! Per kg 110 taka. Last month it was 95 taka. Why does rice price keep rising? My salary doesn\'t rise. If I buy this rice, what will I eat for the rest of the month?',
                rating: 4.9,
                nutritionInfo: {
                    calories: 135,
                    protein: '2.9g',
                    carbs: '29g',
                    fat: '0.4g'
                },
                nutritionJoke: 'Nazirshail gives you 2.9g protein. But the sleep you get after eating rice, that\'s free!'
            },
            {
                name: 'Chinigura Rice - 1kg',
                subcategory: 'Rice',
                segment: 'Premium',
                price: 180,
                originalPrice: 200,
                brand: 'Rangpur Premium',
                image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&q=80',
                comment: 'Perfect for polao & khichuri',
                overthinkingComment: 'Chinigura means polao. Polao means guests. Guests mean hassle. But that Chinigura aroma! Ah! 1kg will make polao 2 times. Or 3 times? Need to calculate.',
                rating: 5.0,
                nutritionInfo: {
                    calories: 140,
                    protein: '3.1g',
                    carbs: '30g',
                    fat: '0.5g'
                },
                nutritionJoke: 'Chinigura polao = 30g carbs. Means stomach will be full, but gym is mandatory. Life is hard!'
            }
        ]
    },

    // ==========================================
    // DAL & PULSES
    // ==========================================
    dalPulses: {
        category: 'Dal & Pulses',
        products: [
            {
                name: 'Masoor Dal (Red Lentils) - 1kg',
                subcategory: 'Dal',
                segment: 'Standard',
                price: 140,
                brand: 'BD Organic',
                image: 'https://unsplash.com/photos/a-close-up-of-a-bunch-of-yellow-lentils-7EwnwHDdjQE',
                comment: 'High protein, quick cooking',
                overthinkingComment: 'Masoor dal is easiest. Cooks in 15 minutes. But mung dal tastes better. And mung dal is expensive. Masoor dal saves money but makes me sad. This dilemma!',
                rating: 4.5,
                nutritionInfo: {
                    calories: 116,
                    protein: '9g',
                    carbs: '20g',
                    fat: '0.4g'
                },
                nutritionJoke: '9g protein! No need to go to gym, just eat dal. You\'ll become a bodybuilder. (If not, not my fault!)'
            },
            {
                name: 'Mung Dal (Green Gram) - 1kg',
                subcategory: 'Dal',
                segment: 'Premium',
                price: 180,
                brand: 'Faridpur Fresh',
                image: 'https://images.unsplash.com/photo-1599909533730-f9d7e4f2e3e2?w=400&q=80',
                comment: 'Rich flavor, nutritious',
                overthinkingComment: 'Mung dal khichuri! Khichuri on rainy days is special. But it\'s not raining. Can\'t eat khichuri without rain? What kind of rule is this? I\'ll make my own rules!',
                rating: 4.7,
                nutritionInfo: {
                    calories: 105,
                    protein: '7.5g',
                    carbs: '19g',
                    fat: '0.5g'
                },
                nutritionJoke: 'Mung dal = 105 calories. Make khichuri with egg, potato, eggplant = 500 calories. Math is hard!'
            },
            {
                name: 'Chola Dal (Chickpea Lentils) - 1kg',
                subcategory: 'Dal',
                segment: 'Standard',
                price: 120,
                brand: 'Jessore Harvest',
                image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80',
                comment: 'Budget-friendly protein',
                overthinkingComment: 'Chola dal is cheap but takes time to cook. Need to soak. Pressure cooker 30 minutes. Who has that much time? But need to save money. Time or money? Which is more important?',
                rating: 4.3,
                nutritionInfo: {
                    calories: 164,
                    protein: '8.9g',
                    carbs: '27g',
                    fat: '2.6g'
                },
                nutritionJoke: 'Eat chola dal, get protein, but stomach gas is free! Package deal!'
            }
        ]
    },

    // ==========================================
    // FISH
    // ==========================================
    fish: {
        category: 'Fish',
        products: [
            {
                name: 'Hilsa Fish (Ilish) - 1kg',
                subcategory: 'Fish',
                segment: 'Premium',
                price: 1200,
                originalPrice: 1400,
                brand: 'Padma River',
                image: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=400&q=80',
                comment: 'Fresh from Padma river',
                overthinkingComment: '1200 taka per kg hilsa! Last year it was 800 taka. How can I be Bengali without eating hilsa on Pohela Boishakh? But 1200 taka! 1kg feeds 4 people. That\'s 300 taka per person. Restaurant would be 500 taka. So should I buy?',
                rating: 5.0,
                nutritionInfo: {
                    calories: 310,
                    protein: '22g',
                    carbs: '0g',
                    fat: '25g'
                },
                nutritionJoke: 'Hilsa has 22g protein, 25g fat. Means healthy but weight will increase. But can you stop eating hilsa? Impossible!'
            },
            {
                name: 'Rui Fish - 1kg',
                subcategory: 'Fish',
                segment: 'Standard',
                price: 350,
                brand: 'Local Pond',
                image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400&q=80',
                comment: 'Fresh water fish',
                overthinkingComment: 'Rui fish means Sunday. Sunday means family. Family means fighting over who gets which piece. Big piece Mom saves for Dad. Medium piece for me. Small piece for little brother. This inequality!',
                rating: 4.6,
                nutritionInfo: {
                    calories: 97,
                    protein: '16.6g',
                    carbs: '0g',
                    fat: '3g'
                },
                nutritionJoke: 'Rui fish = 16.6g protein, 3g fat. Healthy! But frying needs 100g oil. Math fail!'
            },
            {
                name: 'Prawn (Chingri) - 500g',
                subcategory: 'Seafood',
                segment: 'Premium',
                price: 800,
                brand: 'Cox\'s Bazar Fresh',
                image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&q=80',
                comment: 'Large size prawns',
                overthinkingComment: 'Prawn malaikari! Dream food! But 800 taka for 500g. Need 1kg for 4 people. That\'s 1600 taka. Plus coconut, spices. Total 2000 taka. 2000 taka for one meal! Am I Ambani?',
                rating: 4.9,
                nutritionInfo: {
                    calories: 99,
                    protein: '24g',
                    carbs: '0.2g',
                    fat: '0.3g'
                },
                nutritionJoke: 'Prawn has 24g protein, almost zero fat! Perfect! But malaikari coconut milk = 500 calories. All ruined!'
            }
        ]
    },

    // ==========================================
    // VEGETABLES
    // ==========================================
    vegetables: {
        category: 'Vegetables',
        products: [
            {
                name: 'Eggplant (Begun) - 1kg',
                subcategory: 'Vegetables',
                segment: 'Standard',
                price: 60,
                brand: 'Local Farm',
                image: 'https://images.unsplash.com/photo-1659261200833-ec8761558af7?w=400&q=80',
                comment: 'Fresh purple eggplant',
                overthinkingComment: 'Fried eggplant, eggplant mash, eggplant with fish. Eggplant fits everywhere! But which eggplant to buy? Long or round? Long eggplant good for frying, round for mashing. Need both? Then 2kg?',
                rating: 4.4,
                nutritionInfo: {
                    calories: 25,
                    protein: '1g',
                    carbs: '6g',
                    fat: '0.2g'
                },
                nutritionJoke: 'Eggplant only 25 calories! But frying needs oil. Oil = 500 calories. Eggplant is innocent, oil is guilty!'
            },
            {
                name: 'Bottle Gourd (Lau) - 1 piece',
                subcategory: 'Vegetables',
                segment: 'Standard',
                price: 40,
                brand: 'Village Fresh',
                image: 'https://images.unsplash.com/photo-1658524587116-4c7cfb3e01c2?w=400&q=80',
                comment: 'Healthy & light',
                overthinkingComment: 'Bottle gourd means healthy. Bottle gourd means diet. Bottle gourd means boring. But Mom says eating bottle gourd keeps body cool. Cool body means what? No fever? Then that\'s good! 40 taka fever medicine!',
                rating: 4.2,
                nutritionInfo: {
                    calories: 14,
                    protein: '0.6g',
                    carbs: '3.4g',
                    fat: '0g'
                },
                nutritionJoke: 'Bottle gourd = 14 calories, zero fat! Perfect diet food! But taste? That\'s a different question!'
            },
            {
                name: 'Bitter Gourd (Korola) - 500g',
                subcategory: 'Vegetables',
                segment: 'Healthy',
                price: 50,
                brand: 'Organic BD',
                image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=400&q=80',
                comment: 'Good for diabetes',
                overthinkingComment: 'Bitter gourd is bitter. Bitter means healthy. Healthy means must eat. But bitter! Heard it reduces diabetes. I don\'t have diabetes. Then why eat? For future? Future hasn\'t come yet!',
                rating: 3.9,
                nutritionInfo: {
                    calories: 17,
                    protein: '1g',
                    carbs: '3.7g',
                    fat: '0.2g'
                },
                nutritionJoke: 'Eating bitter gourd reduces diabetes, but makes mouth bitter. Life balance!'
            }
        ]
    },

    // ==========================================
    // SPICES
    // ==========================================
    spices: {
        category: 'Spices',
        products: [
            {
                name: 'Turmeric Powder (Holud) - 200g',
                subcategory: 'Spices',
                segment: 'Standard',
                price: 80,
                brand: 'Radhuni',
                image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80',
                comment: 'Pure turmeric powder',
                overthinkingComment: 'Can\'t cook without turmeric. Turmeric means yellow color. Yellow color means Bengali cooking. Radhuni or Aroma? Radhuni is old brand, Aroma is new. Old means good? Or new means good? Confusion!',
                rating: 4.6,
                nutritionInfo: {
                    calories: 312,
                    protein: '9.7g',
                    carbs: '67g',
                    fat: '3.2g'
                },
                nutritionJoke: 'Turmeric has 312 calories? Don\'t worry, you only use 1 spoon. 1 spoon = 10 calories. Safe!'
            },
            {
                name: 'Chili Powder (Morich) - 100g',
                subcategory: 'Spices',
                segment: 'Standard',
                price: 120,
                brand: 'BD Spices',
                image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80',
                comment: 'Hot chili powder',
                overthinkingComment: 'Less spicy or more spicy? Mom says too much spice causes stomach problems. But food without spice is tasteless. Eat spicy, get stomach problems. Don\'t eat spicy, feel sad. Both are problems!',
                rating: 4.5,
                nutritionInfo: {
                    calories: 282,
                    protein: '12g',
                    carbs: '50g',
                    fat: '14.3g'
                },
                nutritionJoke: 'Chili has 12g protein! But who eats 100g chili? 1 spoon = 0.5g protein. Useless info!'
            },
            {
                name: 'Garam Masala - 100g',
                subcategory: 'Spices',
                segment: 'Premium',
                price: 150,
                brand: 'Radhuni Premium',
                image: 'https://images.unsplash.com/photo-1596040033229-a0b3b83a6a1c?w=400&q=80',
                comment: 'Aromatic spice blend',
                overthinkingComment: 'Garam masala makes food taste 10 times better. But 150 taka for 100g! 100g will be used 50 times. Means 3 taka per use. 3 taka for 10x better taste? Cheap deal! Let me buy!',
                rating: 4.8,
                nutritionInfo: {
                    calories: 379,
                    protein: '14.3g',
                    carbs: '44g',
                    fat: '15.8g'
                },
                nutritionJoke: 'Garam masala has 379 calories! But you only use a pinch. Pinch = 1 calorie. Relax!'
            }
        ]
    },

    // ==========================================
    // SNACKS
    // ==========================================
    snacks: {
        category: 'Snacks',
        products: [
            {
                name: 'Chanachur (Spicy Mix) - 200g',
                subcategory: 'Snacks',
                segment: 'Standard',
                price: 60,
                brand: 'Mr. Twist',
                image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&q=80',
                comment: 'Spicy & crunchy',
                overthinkingComment: 'Chanachur means tea. Tea means chatting. Chatting means wasting time. But tea without chanachur? Impossible! 60 taka for 200g. Will last 2 days. No, will finish in 1 day. Self control zero!',
                rating: 4.7,
                nutritionInfo: {
                    calories: 536,
                    protein: '10g',
                    carbs: '55g',
                    fat: '30g'
                },
                nutritionJoke: 'Chanachur = 536 calories! 1 packet = 1 day\'s calories! But can you stop? No!'
            },
            {
                name: 'Jhalmuri Mix - 500g',
                subcategory: 'Snacks',
                segment: 'Budget',
                price: 80,
                brand: 'Dhaka Snacks',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80',
                comment: 'Ready to eat mix',
                overthinkingComment: 'Make jhalmuri or buy readymade? Making takes 30 minutes. Readymade takes 2 minutes. But homemade tastes better. Readymade costs more. Time or money? That question again!',
                rating: 4.4,
                nutritionInfo: {
                    calories: 325,
                    protein: '8g',
                    carbs: '60g',
                    fat: '8g'
                },
                nutritionJoke: 'Jhalmuri = 325 calories. Healthy snack! But once you start, whole packet finishes. Then 1625 calories!'
            },
            {
                name: 'Fuchka Mix - 300g',
                subcategory: 'Snacks',
                segment: 'Standard',
                price: 100,
                brand: 'Street Food BD',
                image: 'https://images.unsplash.com/photo-1626776876729-bab4eda46c97?w=400&q=80',
                comment: 'Make fuchka at home',
                overthinkingComment: 'Fuchka! Street fuchka is 10 taka for 6 pieces. Homemade is 100 taka for 50 pieces. But street fuchka tastes different. That spicy water! Can\'t get that taste at home. Then why buy? But it\'s healthy!',
                rating: 4.3,
                nutritionInfo: {
                    calories: 380,
                    protein: '12g',
                    carbs: '70g',
                    fat: '6g'
                },
                nutritionJoke: 'Fuchka mix = 380 calories. But spicy water = 0 calories. So fuchka is healthy! Logic!'
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
                name: 'Borhani (Yogurt Drink) - 1L',
                subcategory: 'Drinks',
                segment: 'Premium',
                price: 120,
                brand: 'Pran',
                image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&q=80',
                comment: 'Traditional yogurt drink',
                overthinkingComment: 'Borhani means kacchi biryani. Biryani without borhani? Incomplete! But no biryani. Just borhani? Then need to buy biryani too. Biryani 300 taka. Total 420 taka. Budget over!',
                rating: 4.6,
                nutritionInfo: {
                    calories: 60,
                    protein: '3.5g',
                    carbs: '8g',
                    fat: '1.5g'
                },
                nutritionJoke: 'Borhani = 60 calories. Healthy! But biryani = 800 calories. Combo = 860 calories. Oh no!'
            },
            {
                name: 'Tea Leaves (Cha Patti) - 500g',
                subcategory: 'Tea',
                segment: 'Standard',
                price: 200,
                brand: 'Ispahani',
                image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
                comment: 'Premium tea leaves',
                overthinkingComment: 'Ispahani or Taja? Ispahani is old, Taja is new. Old means good? Or new means good? Mom uses Ispahani. Mom is always right. So Ispahani! But should I try Taja?',
                rating: 4.7,
                nutritionInfo: {
                    calories: 2,
                    protein: '0g',
                    carbs: '0.5g',
                    fat: '0g'
                },
                nutritionJoke: 'Tea = 2 calories. But sugar 2 spoons = 32 calories. Milk = 40 calories. Total 74 calories. Tea is innocent!'
            },
            {
                name: 'Mango Juice - 1L',
                subcategory: 'Juice',
                segment: 'Premium',
                price: 180,
                brand: 'Pran',
                image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80',
                comment: 'Real mango pulp',
                overthinkingComment: 'Mango juice feels cool in summer. But real mango costs 300 taka per kg. 1kg mango = 2 glasses juice. Buying juice 1 liter = 5 glasses. 180 taka. Cheaper! But real mango taste? That\'s different!',
                rating: 4.5,
                nutritionInfo: {
                    calories: 60,
                    protein: '0.5g',
                    carbs: '15g',
                    fat: '0g'
                },
                nutritionJoke: 'Mango juice = 60 calories. Healthy! But who drinks 1 glass? 3 glasses = 180 calories. Still okay!'
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
                name: 'Ruti (Flatbread) - 10 pieces',
                subcategory: 'Bread',
                segment: 'Standard',
                price: 50,
                brand: 'Fresh Bakery',
                image: 'https://images.unsplash.com/photo-1619365584037-5a7f0b4e0d8f?w=400&q=80',
                comment: 'Soft whole wheat ruti',
                overthinkingComment: 'Ruti or paratha? Ruti is healthy, paratha is tasty. Eat healthy or eat tasty? Healthy means live longer, tasty means stay happy. Live longer or stay happy? Difficult question!',
                rating: 4.4,
                nutritionInfo: {
                    calories: 71,
                    protein: '2.7g',
                    carbs: '15g',
                    fat: '0.5g'
                },
                nutritionJoke: 'Ruti = 71 calories. Healthy! But 10 rutis = 710 calories. Who eats 10? I do!'
            },
            {
                name: 'Paratha (Layered Bread) - 5 pieces',
                subcategory: 'Bread',
                segment: 'Standard',
                price: 80,
                brand: 'Dhaka Bakery',
                image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80',
                comment: 'Layered & flaky',
                overthinkingComment: 'Paratha means morning. Morning means egg. Egg means protein. Protein means healthy. So paratha is healthy! But oil? Oil means fat. Fat means unhealthy. So paratha healthy or unhealthy? Confusion!',
                rating: 4.8,
                nutritionInfo: {
                    calories: 126,
                    protein: '3g',
                    carbs: '18g',
                    fat: '5g'
                },
                nutritionJoke: 'Paratha = 126 calories. But fried egg = 90 calories. Combo = 216 calories. Still okay! (No!)'
            },
            {
                name: 'Milk Biscuits - 300g',
                subcategory: 'Biscuits',
                segment: 'Budget',
                price: 60,
                brand: 'Olympic',
                image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80',
                comment: 'Milk biscuits',
                overthinkingComment: 'Biscuit means tea. Tea means break. Break means stop work. Stop work means boss angry. Boss angry means lose job. Lose job means can\'t buy biscuits. So better not buy biscuits? No, need biscuits!',
                rating: 4.3,
                nutritionInfo: {
                    calories: 480,
                    protein: '7g',
                    carbs: '70g',
                    fat: '20g'
                },
                nutritionJoke: 'Biscuit = 480 calories! 1 packet = 1 meal! But 1 packet finishes in 1 day. Overeating!'
            }
        ]
    }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

const getAllProducts = () => {
    const allProducts = [];
    Object.values(BD_PRODUCT_DATA).forEach(categoryData => {
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
    const categoryKey = Object.keys(BD_PRODUCT_DATA).find(
        key => BD_PRODUCT_DATA[key].category === category
    );
    return categoryKey ? BD_PRODUCT_DATA[categoryKey].products : [];
};

const getCategories = () => {
    return Object.values(BD_PRODUCT_DATA).map(data => data.category);
};

const getProductCount = () => {
    return getAllProducts().length;
};

module.exports = {
    BD_PRODUCT_DATA,
    getAllProducts,
    getProductsByCategory,
    getCategories,
    getProductCount
};
