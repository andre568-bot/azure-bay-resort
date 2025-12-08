// Spa and wellness data for Azure Bay Resort

export const spaServices = [
    {
        id: 'signature-massage',
        name: 'Azure Signature Massage',
        category: 'Massage',
        description: 'Our signature treatment combines ancient techniques with modern wellness practices. Using warm ocean stones and locally-sourced botanical oils.',
        duration: '90 min',
        price: 220,
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800',
        featured: true
    },
    {
        id: 'deep-tissue',
        name: 'Deep Tissue Therapy',
        category: 'Massage',
        description: 'Intensive massage targeting deep muscle layers to release chronic tension and restore flexibility.',
        duration: '60 min',
        price: 180,
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800',
        featured: false
    },
    {
        id: 'couples-retreat',
        name: 'Couples Ocean Retreat',
        category: 'Couples',
        description: 'Shared relaxation in our oceanview suite. Includes couples massage, champagne, and chocolate-dipped strawberries.',
        duration: '120 min',
        price: 450,
        image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800',
        featured: true
    },
    {
        id: 'hydrating-facial',
        name: 'Marine Hydrating Facial',
        category: 'Facial',
        description: 'Intensive hydration using marine collagen and seaweed extracts. Perfect after sun exposure.',
        duration: '75 min',
        price: 195,
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800',
        featured: false
    },
    {
        id: 'anti-aging-facial',
        name: 'Timeless Beauty Facial',
        category: 'Facial',
        description: 'Advanced anti-aging treatment with LED therapy, micro-current lifting, and luxury serums.',
        duration: '90 min',
        price: 280,
        image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=800',
        featured: false
    },
    {
        id: 'body-wrap',
        name: 'Detox Seaweed Wrap',
        category: 'Body Treatment',
        description: 'Full body wrap with mineral-rich seaweed to detoxify and smooth the skin.',
        duration: '60 min',
        price: 165,
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800',
        featured: false
    },
    {
        id: 'hot-stone',
        name: 'Volcanic Hot Stone',
        category: 'Massage',
        description: 'Heated basalt stones placed on key energy points while warm oil massage releases muscle tension.',
        duration: '75 min',
        price: 195,
        image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800',
        featured: true
    },
    {
        id: 'full-day-retreat',
        name: 'Ultimate Spa Day',
        category: 'Package',
        description: 'A full day of pampering including massage, facial, body treatment, lunch, and pool access.',
        duration: '6 hours',
        price: 650,
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800',
        featured: true
    }
];

export const spaCategories = ['All', 'Massage', 'Facial', 'Body Treatment', 'Couples', 'Package'];

export const spaAmenities = [
    {
        name: 'Infinity Relaxation Pool',
        description: 'Heated mineral pool with ocean views',
        icon: '🏊'
    },
    {
        name: 'Steam Room & Sauna',
        description: 'Traditional and infrared options',
        icon: '🧖'
    },
    {
        name: 'Meditation Garden',
        description: 'Peaceful outdoor sanctuary',
        icon: '🧘'
    },
    {
        name: 'Fitness Center',
        description: '24/7 state-of-the-art equipment',
        icon: '💪'
    },
    {
        name: 'Yoga Pavilion',
        description: 'Daily classes with ocean backdrop',
        icon: '🕉️'
    },
    {
        name: 'Vitality Bar',
        description: 'Fresh juices and healthy snacks',
        icon: '🥤'
    }
];

export const wellnessPackages = [
    {
        name: 'Rejuvenation Retreat',
        duration: '3 nights',
        description: 'Complete wellness reset with daily spa treatments, yoga, and healthy cuisine.',
        price: 2400,
        includes: ['Daily massage', 'Facial', 'Unlimited yoga', 'Healthy meal plan']
    },
    {
        name: 'Detox & Cleanse',
        duration: '5 nights',
        description: 'Intensive detox program with specialized treatments and nutritional guidance.',
        price: 3800,
        includes: ['Body treatments', 'Nutrition consultation', 'Juice cleanse', 'Personal training']
    },
    {
        name: 'Romantic Escape',
        duration: '2 nights',
        description: 'Couples wellness experience with shared treatments and romantic touches.',
        price: 1600,
        includes: ['Couples massage', 'Private dinner', 'Champagne', 'Rose petal bath']
    }
];
