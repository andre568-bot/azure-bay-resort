// Room and accommodation data for Azure Bay Resort

export const rooms = [
    {
        id: 'ocean-view-suite',
        name: 'Ocean View Suite',
        category: 'Suite',
        description: 'Wake up to breathtaking panoramic ocean views in our signature suites. Floor-to-ceiling windows frame the azure waters while you relax in sophisticated comfort.',
        shortDescription: 'Panoramic ocean views with private balcony',
        size: '65 m²',
        maxGuests: 2,
        bedType: 'King',
        view: 'Ocean View',
        basePrice: 450,
        features: [
            'Private Balcony',
            'Ocean View',
            'King Bed',
            'Marble Bathroom',
            'Rain Shower',
            'Premium Amenities',
            'In-room Safe',
            'Mini Bar',
            '55" Smart TV',
            'Nespresso Machine'
        ],
        amenities: ['wifi', 'ac', 'tv', 'minibar', 'safe', 'balcony'],
        images: [
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200',
            'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200',
            'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200'
        ],
        featured: true
    },
    {
        id: 'beachfront-villa',
        name: 'Beachfront Villa',
        category: 'Villa',
        description: 'Experience ultimate privacy in our exclusive beachfront villas. Direct beach access, private pool, and dedicated butler service create an unparalleled sanctuary.',
        shortDescription: 'Private villa with pool and beach access',
        size: '180 m²',
        maxGuests: 4,
        bedType: 'King + Twin',
        view: 'Beachfront',
        basePrice: 1200,
        features: [
            'Private Pool',
            'Direct Beach Access',
            'Butler Service',
            'Outdoor Dining',
            'Living Room',
            'Full Kitchen',
            'Two Bathrooms',
            'Outdoor Shower',
            'Private Garden',
            'BBQ Area'
        ],
        amenities: ['wifi', 'ac', 'tv', 'minibar', 'safe', 'pool', 'kitchen', 'butler'],
        images: [
            'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1200',
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200',
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200'
        ],
        featured: true
    },
    {
        id: 'garden-room',
        name: 'Garden Room',
        category: 'Room',
        description: 'Nestled among tropical gardens, our Garden Rooms offer a serene retreat with lush views and easy access to resort amenities.',
        shortDescription: 'Tropical garden views with modern comfort',
        size: '45 m²',
        maxGuests: 2,
        bedType: 'King',
        view: 'Garden View',
        basePrice: 280,
        features: [
            'Private Terrace',
            'Garden View',
            'King Bed',
            'Walk-in Shower',
            'Work Desk',
            'Mini Bar',
            '50" Smart TV',
            'Complimentary Wifi'
        ],
        amenities: ['wifi', 'ac', 'tv', 'minibar', 'safe'],
        images: [
            'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200',
            'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200'
        ],
        featured: false
    },
    {
        id: 'family-suite',
        name: 'Family Suite',
        category: 'Suite',
        description: 'Designed for families, this spacious suite offers separate living areas, connecting rooms, and child-friendly amenities for a memorable vacation.',
        shortDescription: 'Spacious suite perfect for families',
        size: '95 m²',
        maxGuests: 5,
        bedType: 'King + 2 Twin',
        view: 'Pool View',
        basePrice: 650,
        features: [
            'Connecting Rooms',
            'Pool View',
            'Living Area',
            'Two Bathrooms',
            'Kids Amenities',
            'Gaming Console',
            'Extra Sofa Bed',
            'Childproofing Available'
        ],
        amenities: ['wifi', 'ac', 'tv', 'minibar', 'safe', 'balcony'],
        images: [
            'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200',
            'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=1200'
        ],
        featured: false
    },
    {
        id: 'presidential-suite',
        name: 'Presidential Suite',
        category: 'Suite',
        description: 'The pinnacle of luxury. Our Presidential Suite spans an entire floor with wraparound terrace, private jacuzzi, and personalized concierge service.',
        shortDescription: 'Ultimate luxury with panoramic views',
        size: '250 m²',
        maxGuests: 4,
        bedType: 'King',
        view: 'Panoramic Ocean',
        basePrice: 2500,
        features: [
            'Wraparound Terrace',
            'Private Jacuzzi',
            '24/7 Butler',
            'Private Dining Room',
            'Home Theater',
            'Wine Cellar',
            'Massage Room',
            'Private Elevator',
            'Helicopter Transfer'
        ],
        amenities: ['wifi', 'ac', 'tv', 'minibar', 'safe', 'pool', 'butler', 'jacuzzi'],
        images: [
            'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200',
            'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200'
        ],
        featured: true
    },
    {
        id: 'honeymoon-suite',
        name: 'Honeymoon Suite',
        category: 'Suite',
        description: 'Romance awaits in our thoughtfully designed Honeymoon Suite. Rose petal turndowns, champagne on arrival, and stunning sunset views.',
        shortDescription: 'Romantic retreat for couples',
        size: '75 m²',
        maxGuests: 2,
        bedType: 'King',
        view: 'Sunset View',
        basePrice: 580,
        features: [
            'Sunset View Terrace',
            'Couples Bathtub',
            'Champagne on Arrival',
            'Rose Petal Turndown',
            'Breakfast in Bed',
            'Couples Spa Credit',
            'Private Dinner Setup',
            'Late Checkout'
        ],
        amenities: ['wifi', 'ac', 'tv', 'minibar', 'safe', 'balcony', 'spa'],
        images: [
            'https://images.unsplash.com/photo-1609949279531-cf48d64bed89?w=1200',
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200'
        ],
        featured: true
    }
];

export const roomCategories = ['All', 'Room', 'Suite', 'Villa'];

export const amenityIcons = {
    wifi: '📶',
    ac: '❄️',
    tv: '📺',
    minibar: '🍾',
    safe: '🔐',
    balcony: '🌅',
    pool: '🏊',
    kitchen: '🍳',
    butler: '🎩',
    jacuzzi: '💦',
    spa: '💆'
};
