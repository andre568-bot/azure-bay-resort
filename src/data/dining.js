// Dining and restaurant data for Azure Bay Resort

export const restaurants = [
    {
        id: 'azure-terrace',
        name: 'Azure Terrace',
        cuisine: 'Mediterranean Fine Dining',
        description: 'Our signature restaurant offers an unforgettable culinary journey with locally-sourced ingredients and stunning ocean views. Executive Chef Marco Bellini creates innovative Mediterranean dishes that celebrate the sea.',
        shortDescription: 'Signature oceanfront fine dining',
        priceRange: '$$$$',
        hours: '6:30 PM - 10:30 PM',
        dressCode: 'Smart Elegant',
        features: ['Ocean View', 'Wine Pairing', 'Tasting Menu', 'Private Dining'],
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200',
        featured: true,
        menuHighlights: [
            { name: 'Lobster Bisque', price: 32, description: 'With saffron cream and caviar' },
            { name: 'Grilled Branzino', price: 58, description: 'Mediterranean herbs, olive tapenade' },
            { name: 'Wagyu Tenderloin', price: 85, description: 'Truffle jus, seasonal vegetables' },
            { name: 'Passion Fruit Soufflé', price: 24, description: 'White chocolate sauce' }
        ]
    },
    {
        id: 'coral-beach-grill',
        name: 'Coral Beach Grill',
        cuisine: 'Beach BBQ & Seafood',
        description: 'Casual beachfront dining with your feet in the sand. Fresh catches of the day grilled to perfection over open flame, paired with tropical cocktails as the sun sets.',
        shortDescription: 'Casual beachfront grilling',
        priceRange: '$$$',
        hours: '12:00 PM - 10:00 PM',
        dressCode: 'Resort Casual',
        features: ['Beachfront', 'Live Music', 'Sunset Views', 'Fresh Seafood'],
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200',
        featured: true,
        menuHighlights: [
            { name: 'Grilled Lobster Tail', price: 65, description: 'Garlic butter, grilled lemon' },
            { name: 'Seafood Platter', price: 95, description: 'For two - prawns, crab, oysters' },
            { name: 'Beach Burger', price: 28, description: 'Wagyu beef, truffle aioli' },
            { name: 'Coconut Panna Cotta', price: 16, description: 'Mango coulis' }
        ]
    },
    {
        id: 'jade-garden',
        name: 'Jade Garden',
        cuisine: 'Pan-Asian',
        description: 'An elegant journey through Asian flavors, from Japanese precision to Thai aromatics. Our bamboo-surrounded pavilion creates an intimate atmosphere for exploring the East.',
        shortDescription: 'Elegant Pan-Asian cuisine',
        priceRange: '$$$$',
        hours: '7:00 PM - 11:00 PM',
        dressCode: 'Smart Casual',
        features: ['Teppanyaki Bar', 'Sushi Counter', 'Private Rooms', 'Sake Selection'],
        image: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=1200',
        featured: false,
        menuHighlights: [
            { name: 'Omakase Sushi', price: 120, description: "8-course chef's selection" },
            { name: 'Peking Duck', price: 75, description: 'Traditional preparation, house pancakes' },
            { name: 'Wagyu Teppanyaki', price: 95, description: 'A5 grade, seasonal vegetables' },
            { name: 'Matcha Tiramisu', price: 18, description: 'Japanese twist on Italian classic' }
        ]
    },
    {
        id: 'sunrise-cafe',
        name: 'Sunrise Café',
        cuisine: 'International Breakfast & Brunch',
        description: 'Start your day with our lavish breakfast buffet or à la carte brunch. From fresh tropical fruits to made-to-order eggs Benedict, fuel your island adventures.',
        shortDescription: 'All-day breakfast and brunch',
        priceRange: '$$',
        hours: '6:30 AM - 2:00 PM',
        dressCode: 'Casual',
        features: ['Buffet', 'À La Carte', 'Fresh Juices', 'Pastry Station'],
        image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=1200',
        featured: false,
        menuHighlights: [
            { name: 'Breakfast Buffet', price: 45, description: 'Full international selection' },
            { name: 'Eggs Benedict', price: 28, description: 'Smoked salmon or ham' },
            { name: 'Açaí Bowl', price: 22, description: 'Fresh fruits, granola, honey' },
            { name: 'Pancake Stack', price: 24, description: 'Berries, maple syrup, cream' }
        ]
    },
    {
        id: 'pool-bar',
        name: 'Aqua Pool Bar',
        cuisine: 'Light Bites & Cocktails',
        description: 'Swim up to our infinity pool bar for refreshing cocktails and light bites. The perfect spot to spend a lazy afternoon with stunning views.',
        shortDescription: 'Poolside refreshments',
        priceRange: '$$',
        hours: '10:00 AM - 7:00 PM',
        dressCode: 'Swimwear Welcome',
        features: ['Swim-up Bar', 'Infinity Pool', 'Healthy Options', 'Signature Cocktails'],
        image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200',
        featured: false,
        menuHighlights: [
            { name: 'Azure Sunset', price: 18, description: 'Signature cocktail with rum & passion fruit' },
            { name: 'Poke Bowl', price: 26, description: 'Fresh tuna, avocado, edamame' },
            { name: 'Grilled Chicken Wrap', price: 22, description: 'Caesar salad, parmesan' },
            { name: 'Fresh Fruit Platter', price: 18, description: 'Seasonal tropical selection' }
        ]
    }
];

export const diningExperiences = [
    {
        id: 'private-beach-dinner',
        name: 'Private Beach Dinner',
        description: 'An intimate dining experience on the sand with personal chef, butler service, and starlit ambiance.',
        price: 350,
        duration: '3 hours',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800'
    },
    {
        id: 'sunset-yacht-dinner',
        name: 'Sunset Yacht Dining',
        description: 'Cruise along the coast while enjoying a gourmet dinner and champagne as the sun sets.',
        price: 500,
        duration: '4 hours',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'
    },
    {
        id: 'cooking-class',
        name: 'Chef\'s Cooking Class',
        description: 'Learn the secrets of Mediterranean cuisine with our executive chef in an interactive class.',
        price: 150,
        duration: '3 hours',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800'
    }
];
