// Activities and experiences data for Azure Bay Resort

export const activities = [
    {
        id: 'snorkeling',
        name: 'Coral Reef Snorkeling',
        category: 'Water Sports',
        description: 'Explore vibrant coral gardens and tropical fish in our protected marine sanctuary. Equipment and guide included.',
        duration: '2 hours',
        price: 85,
        difficulty: 'Easy',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
        featured: true
    },
    {
        id: 'scuba-diving',
        name: 'Scuba Diving Adventure',
        category: 'Water Sports',
        description: 'Discover underwater wonders with certified PADI instructors. Suitable for beginners and experienced divers.',
        duration: '3 hours',
        price: 175,
        difficulty: 'Moderate',
        image: 'https://images.unsplash.com/photo-1544551763-77932f927e9e?w=800',
        featured: true
    },
    {
        id: 'kayaking',
        name: 'Sea Kayaking',
        category: 'Water Sports',
        description: 'Paddle through crystal-clear waters along the coastline. Single and tandem kayaks available.',
        duration: '1.5 hours',
        price: 55,
        difficulty: 'Easy',
        image: 'https://images.unsplash.com/photo-1472745942893-4b9f730c7668?w=800',
        featured: false
    },
    {
        id: 'paddleboard',
        name: 'Stand-Up Paddleboarding',
        category: 'Water Sports',
        description: 'Glide across calm waters with stunning coastal views. Lessons available for beginners.',
        duration: '1 hour',
        price: 45,
        difficulty: 'Easy',
        image: 'https://images.unsplash.com/photo-1499971856191-1a420a42b498?w=800',
        featured: false
    },
    {
        id: 'sunset-cruise',
        name: 'Sunset Sailing Cruise',
        category: 'Cruises',
        description: 'Sail into the sunset aboard our luxury catamaran with champagne and canapés.',
        duration: '3 hours',
        price: 150,
        difficulty: 'Easy',
        image: 'https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=800',
        featured: true
    },
    {
        id: 'yacht-charter',
        name: 'Private Yacht Charter',
        category: 'Cruises',
        description: 'Exclusive private yacht experience with captain, crew, and gourmet catering.',
        duration: 'Full day',
        price: 1500,
        difficulty: 'Easy',
        image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800',
        featured: true
    },
    {
        id: 'sunrise-yoga',
        name: 'Beach Sunrise Yoga',
        category: 'Wellness',
        description: 'Start your day with peaceful yoga as the sun rises over the ocean. All levels welcome.',
        duration: '1 hour',
        price: 35,
        difficulty: 'Easy',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
        featured: false
    },
    {
        id: 'meditation',
        name: 'Guided Meditation',
        category: 'Wellness',
        description: 'Find inner peace with guided meditation sessions in our tranquil garden pavilion.',
        duration: '45 min',
        price: 25,
        difficulty: 'Easy',
        image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800',
        featured: false
    },
    {
        id: 'jet-ski',
        name: 'Jet Ski Adventure',
        category: 'Water Sports',
        description: 'High-speed thrills on the waves with guided jet ski tours along the coast.',
        duration: '30 min',
        price: 120,
        difficulty: 'Moderate',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        featured: false
    },
    {
        id: 'fishing',
        name: 'Deep Sea Fishing',
        category: 'Fishing',
        description: 'Venture offshore for big game fishing with experienced captains and top equipment.',
        duration: '6 hours',
        price: 450,
        difficulty: 'Moderate',
        image: 'https://images.unsplash.com/photo-1544551763-8dd44758c2dd?w=800',
        featured: false
    },
    {
        id: 'wine-tasting',
        name: 'Coastal Wine Tasting',
        category: 'Culinary',
        description: 'Sample premium wines from the region accompanied by artisan cheeses and views.',
        duration: '2 hours',
        price: 95,
        difficulty: 'Easy',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800',
        featured: true
    },
    {
        id: 'cooking-class',
        name: 'Local Cuisine Masterclass',
        category: 'Culinary',
        description: 'Learn to prepare traditional dishes with our chef using fresh local ingredients.',
        duration: '3 hours',
        price: 130,
        difficulty: 'Easy',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800',
        featured: false
    }
];

export const activityCategories = ['All', 'Water Sports', 'Cruises', 'Wellness', 'Culinary', 'Fishing'];

export const kidsClub = {
    name: 'Little Explorers Club',
    ageRange: '4-12 years',
    hours: '9:00 AM - 6:00 PM',
    description: 'Supervised activities and adventures for young guests while parents enjoy resort amenities.',
    activities: [
        'Beach Games',
        'Arts & Crafts',
        'Swimming Lessons',
        'Treasure Hunts',
        'Movie Time',
        'Junior Chef Classes'
    ],
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800'
};

export const fitnessActivities = [
    {
        name: 'Personal Training',
        description: 'One-on-one sessions with certified trainers',
        price: 100
    },
    {
        name: 'Aqua Aerobics',
        description: 'Low-impact pool workout classes',
        price: 25
    },
    {
        name: 'Tennis Lessons',
        description: 'Professional coaching on our courts',
        price: 80
    },
    {
        name: 'Beach Volleyball',
        description: 'Organized games daily at 4 PM',
        price: 0
    }
];
