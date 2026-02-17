/**
 * External API Adapter - Mock Implementation
 * This service simulates an external API that provides overthinking comments.
 * It follows an interface-based approach.
 */

const { CATEGORY_COMMENTS, ITEM_SPECIFIC_COMMENTS } = require('../data/overthinkingComments');

/**
 * Interface definition for External API
 */
const ExternalAPI = {
    fetchCommentsByCategory: async (category, productName) => {
        // Simulate network latency
        return new Promise((resolve) => {
            setTimeout(() => {
                const genericComments = CATEGORY_COMMENTS[category] || [
                    "Analysis: You've selected a diverse range of items. This supports a balanced lifestyle.",
                    "Smart Shopping: Comparing prices per 100g ensures you get the best value for your budget.",
                    "Eco-Tip: Consolidating your orders reduces delivery emissions. Thank you for being mindful!",
                    "Trend Alert: This category is trending among health-conscious shoppers this month."
                ];

                // Add item-specific critiques if name is provided
                let comments = [...genericComments];
                if (productName) {
                    const specificComment = ITEM_SPECIFIC_COMMENTS[productName];
                    if (specificComment) {
                        // If we have a high-quality specific comment, prioritize it
                        comments = [specificComment, ...genericComments];
                    } else {
                        // Fallback to randomized generic item critiques
                        const itemCritiques = [
                            `Is ${productName} really necessary? Your bank account is already sweating.`,
                            `Choosing ${productName}? I suppose everyone has their vices. This one is just particularly expensive.`,
                            `I see ${productName} in your cart. You're either a connoisseur or just very susceptible to artisan branding.`,
                            `Are you sure about this ${productName}? It feels like a decision made at 3 AM.`,
                            `Adding ${productName} to the mix? Your kitchen is starting to look like a high-end pantry that never gets used.`,
                            `Is ${productName} the best choice for you right now? The data suggests you have 3 similar items expiring at home.`,
                            `Looking at ${productName}... it's definitely a choice. Not a good one, but a choice nonetheless.`,
                            `Does ${productName} actually make you happy, or are you just chasing a lifestyle you saw on Instagram?`,
                            `Buying ${productName} again? The definition of insanity is doing the same thing and expecting different nutritional results.`,
                            `Oh, ${productName}. Fancy. I hope it tastes as good as the 'premium' tax you just paid for it.`
                        ];
                        comments = [...itemCritiques, ...genericComments];
                    }
                }

                resolve(comments);
            }, 300);
        });
    }
};

module.exports = ExternalAPI;
