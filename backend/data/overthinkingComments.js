/**
 * Overthinking Comments Data
 * This file contains all the "critiques" and "insights" provided by the Shopping Assistant.
 * It is separated from the product data to follow Clean Architecture principles.
 */

const CATEGORY_COMMENTS = {
    'Fresh Produce': [
        "Is this really organic? You're paying a premium for a sticker. But I suppose your health (or ego) is worth it.",
        "Choosing these bananas? They'll be brown by Tuesday. Unless you're planning on banana bread you'll never make.",
        "That's a lot of greens for someone who usually orders pizza. Let's see if they actually make it out of the crisper drawer.",
        "Imported berries in winter? Very elite. Very expensive. Your carbon footprint is as big as your grocery bill."
    ],
    'Dairy & Eggs': [
        "Pasture-raised? The chickens are probably living better than you are. At this price, they should be.",
        "Almond milk... basically expensive nut water. But it makes you feel responsible, doesn't it?",
        "Active cultures in your yogurt? At least something in your fridge will be cultured.",
        "Whole milk? Your arteries are already judging this decision. But the latte will taste better, I'll give you 그건."
    ],
    'Meat & Seafood': [
        "Wild-caught salmon. You're single-handedly trying to save the fishing industry, or just your own Omega-3 levels.",
        "This steak costs more than a gym membership. One is an investment, the other is just... delicious regret.",
        "Air-chilled chicken. Because even your poultry needs a spa day before it hits the pan.",
        "Grass-fed beef. Because you want your dinner to have had a better diet than you do."
    ],
    'Bakery': [
        "Traditional sourdough. You're either a connoisseur or just very susceptible to artisan branding.",
        "This baguette is longer than your attention span. It'll be a weapon by tomorrow morning. Better eat it fast.",
        "Four croissants? For one person? That's not a breakfast, that's a cry for help. A flaky, buttery cry for help.",
        "Whole wheat bread. The safe choice. The boring choice. The 'I'm trying to be an adult' choice."
    ],
    'Beverages': [
        "Extra pulp orange juice. Why do you want to chew your drink? It's a texture nightmare, but enjoy your 'fiber'.",
        "Single-origin coffee beans. I bet you tell everyone exactly where they're from. You're that person now.",
        "Sparkling water. For when you want your hydration to hurt a little bit. Very sophisticated.",
        "Green tea antioxidants. You're hoping they'll cancel out the 3 AM ramen. They won't."
    ],
    'Snacks & Confectionery': [
        "85% dark chocolate. You're not eating it for the taste; you're eating it for the 'health benefits'. Stop lying.",
        "Portion-controlled packs. As if you won't just eat three of them back-to-back. I see you.",
        "Organic popcorn. Because normal corn wasn't quite pretentious enough for your movie night.",
        "Natural energy bars. It's basically a candy bar in a tracksuit. But if the labeling makes you feel athletic, go for it."
    ],
    'Grocery': [
        "Extra virgin olive oil. The first press. The only press you care about. Your salad is basically a luxury vehicle now.",
        "Pink Himalayan salt. Because regular salt isn't pink or from a mountain. Is it better? No. Is it prettier? Yes.",
        "Purchasing in bulk? You're either very prepared or just have a lot of empty cabinet space to fill.",
        "Authentic spice blends. You'll use this once for a recipe you saw on TikTok and then let it expire. Classic."
    ],
    'Frozen Foods': [
        "Flash-frozen peas. Science says they're fresher. Your heart says it's the ultimate 'I can't cook' backup plan.",
        "Premium frozen meals. The oxymoron of the grocery world. But the packaging looks expensive, so enjoy.",
        "Artisan gelato. Because normal ice cream just doesn't scream 'sophistication' while you're eating it in pajamas.",
        "Frozen seafood. Caught at sea, processed at sea, and now living in your freezer until 2027."
    ],
    'Budget': [
        "Still just window shopping? Your bank account is safe, but your social life is looking pretty empty.",
        "An empty cart? At these prices, I don't blame you, but you're not exactly living the 'premier' life right now, are you?",
        "Zero items. Are you waiting for a miracle, or just a 90% off sale that's never coming?",
        "Fiscal responsibility? Or just... fiscal inability? Looking but not touching is a sad way to spend a Saturday.",
        "Oh, a minimalist! Or as normal people call it: 'being broke'. Don't worry, the digital shelves don't judge.",
        "That's a very streamlined selection. By which I mean, it's non-existent. Are you overthinking the *entire concept* of shopping now?"
    ]
};

const ITEM_SPECIFIC_COMMENTS = {
    // Fresh Produce
    'Organic Bananas - 1 bunch': 'Are they too ripe? Will they turn brown by tomorrow? But green ones taste like cardboard. What if I buy both ripe AND green? No wait, that is too many bananas. But potassium is good for you...',
    'Red Apples - 1kg': 'Red or green apples? Gala or Fuji? The doctor said an apple a day... but did he specify which type? What if I pick the wrong apple and it doesn\'t keep the doctor away?',
    'Fresh Spinach - 1 bunch': 'Spinach made Popeye strong, right? But I\'m not a sailor. Do I even like spinach? I\'ll probably just use it in a smoothie where I can\'t taste it anyway...',

    // Dairy & Eggs
    'Fresh Milk - 1 Liter': 'Whole milk or skim? 2% is the compromise, but then I\'m not fully committing to either health or taste. Almond milk? But that\'s not real milk. Does anyone actually like oat milk?',
    'Farm Eggs - 12 pack': 'Free range or cage free? Large or extra large? Brown or white? Do happier chickens really make better eggs? What makes a chicken happy anyway?',
    'Plain Yogurt - 500g': 'Plain or flavored? Plain is healthier but tastes like sour cream. Flavored has too much sugar. Maybe I\'ll add my own honey? But then why not just buy flavored?',

    // Meat & Seafood
    'Chicken Breast - 1kg': 'Bone-in is cheaper but more work. Boneless is convenient but expensive. Organic? That\'s double the price. Is my health worth double the chicken price? What is the value of health anyway?',
    'Atlantic Salmon - 500g': 'Wild caught or farm raised? Wild is better for the environment but farm raised is cheaper. What would a salmon prefer? Actually, neither wants to be eaten...',
    'Ground Beef - 500g': '80/20 or 90/10? More fat means more flavor but more guilt. Less fat means dry burgers. Maybe 85/15? Is there an 85/15? Why is this so complicated?',

    // Bakery
    'Artisan Sourdough Bread': 'Sourdough or whole wheat? Sliced or unsliced? If unsliced, do I even own a good bread knife? What if my slices are all uneven? People will judge my sandwich skills...',
    'Croissants - 4 pack': 'Plain or chocolate filled? But then it\'s basically a dessert for breakfast. Is that wrong? The French do it. Should I pretend I\'m in Paris to justify this?',
    'Wheat Bagels - 6 pack': 'Plain, everything, or cinnamon raisin? Toasted or fresh? Cream cheese or butter? What if I want both? Can you put cream cheese AND butter on a bagel? Is that even legal?',

    // Beverages
    'Orange Juice - 1L': 'Fresh squeezed or from concentrate? With pulp or without? Some pulp? Is anyone really passionate about the amount of pulp? I have strong opinions about pulp. Does that make me weird?',
    'Premium Coffee Beans - 250g': 'Light roast for more caffeine or dark roast for bold flavor? What if I need BOTH caffeine AND flavor? Espresso beans or regular? Do I even have a good grinder?',
    'Green Tea - 50 bags': 'Green tea is healthy, but does it taste like grass? Matcha is trendy but expensive. Regular green tea feels like giving up. But matcha lattes are ৳450 at specialty cafes...',

    // Snacks
    'Mixed Nuts - 200g': 'Salted or unsalted? Roasted or raw? Mixed nuts are healthy... unless I eat the whole container in one sitting. Which I will. I have no self-control with cashews.',
    'Dark Chocolate Bar - 100g': '70% or 85% dark? 85% is too bitter but healthier. 70% is perfect but does that defeat the purpose? Also, \'one square at a time\' is a myth. The whole bar is one serving.',
    'Potato Chips - 100g': 'Regular, BBQ, or sour cream? Kettle cooked sounds fancy. But it\'s still chips. Am I fooling myself? The serving size says 15 chips. Who eats only 15 chips?!',

    // Grocery
    'Olive Oil - 500ml': 'Extra virgin, virgin, or regular? What exactly is the difference? Is cheaper olive oil even real olive oil? I saw a documentary once and now I trust nothing.',
    'Basmati Rice - 1kg': 'Jasmine, basmati, or brown rice? Brown is healthier but takes forever to cook. White rice cooks fast but is basically just carbs. What if I mix them? Is that allowed?',
    'Pasta - 500g': 'Spaghetti, penne, or fusilli? Does the shape really affect the taste? Italians would say yes. Am I Italian? No. Do I still have strong opinions? Absolutely.',

    // Frozen Foods
    'Frozen Berries - 500g': 'Fresh berries are expensive and go bad in 3 days. Frozen berries last months. But are frozen berries judged? Will people know I\'m using frozen berries in my smoothie? Does it even matter?',
    'Vanilla Ice Cream - 1L': 'Vanilla is boring, they say. But vanilla is CLASSIC. It goes with everything! What if I want pie AND ice cream? Only vanilla works. Vanilla is the ultimate supporting actor.',
    'Frozen Pizza - Margherita': 'Frozen pizza vs delivery? Frozen is cheaper but delivery feels like a treat. Is cooking frozen pizza really cooking? Am I lazy or economical? These are the questions that keep me up at night.'
};

module.exports = {
    CATEGORY_COMMENTS,
    ITEM_SPECIFIC_COMMENTS
};
