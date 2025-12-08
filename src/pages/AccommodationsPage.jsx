import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { rooms, roomCategories, amenityIcons } from '../data/rooms';
import oceanSuite from '../assets/images/ocean_suite_1765193310941.png';
import premiumVilla from '../assets/images/premium_villa_1765193415201.png';
import './AccommodationsPage.css';

export default function AccommodationsPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedRoom, setSelectedRoom] = useState(null);

    const filteredRooms = activeCategory === 'All'
        ? rooms
        : rooms.filter(room => room.category === activeCategory);

    const getImageForRoom = (room, index) => {
        if (room.id === 'ocean-view-suite') return oceanSuite;
        if (room.id === 'beachfront-villa') return premiumVilla;
        return room.images[0];
    };

    return (
        <div className="accommodations-page">
            {/* Hero Section */}
            <section className="page-hero">
                <div className="page-hero-image">
                    <img src={oceanSuite} alt="Luxury accommodations" />
                </div>
                <div className="page-hero-overlay"></div>
                <motion.div
                    className="page-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>Accommodations</span>
                    </div>
                    <h1>Accommodations</h1>
                    <p>Discover your perfect sanctuary with breathtaking ocean views and unparalleled luxury.</p>
                </motion.div>
            </section>

            {/* Intro Section */}
            <section className="intro-section section">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Your Private Retreat</span>
                        <h2>Luxury Meets Coastal Elegance</h2>
                        <p className="intro-text">
                            From intimate garden rooms to expansive beachfront villas, each accommodation
                            at Azure Bay Resort is thoughtfully designed to provide the ultimate in comfort
                            and sophistication. Wake to ocean views, drift off to the sound of waves, and
                            experience hospitality that anticipates your every need.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="filter-section">
                <div className="container">
                    <div className="category-filters">
                        {roomCategories.map((category) => (
                            <button
                                key={category}
                                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rooms Grid */}
            <section className="rooms-section section">
                <div className="container">
                    <div className="rooms-list">
                        {filteredRooms.map((room, index) => (
                            <motion.div
                                key={room.id}
                                className="room-item"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="room-item-image">
                                    <img src={getImageForRoom(room, index)} alt={room.name} />
                                    {room.featured && <span className="featured-badge">Featured</span>}
                                </div>
                                <div className="room-item-content">
                                    <span className="room-category">{room.category}</span>
                                    <h3>{room.name}</h3>
                                    <p>{room.description}</p>

                                    <div className="room-specs">
                                        <div className="spec">
                                            <span className="spec-icon">📐</span>
                                            <span>{room.size}</span>
                                        </div>
                                        <div className="spec">
                                            <span className="spec-icon">👥</span>
                                            <span>Up to {room.maxGuests} guests</span>
                                        </div>
                                        <div className="spec">
                                            <span className="spec-icon">🛏️</span>
                                            <span>{room.bedType}</span>
                                        </div>
                                        <div className="spec">
                                            <span className="spec-icon">🌅</span>
                                            <span>{room.view}</span>
                                        </div>
                                    </div>

                                    <div className="room-features">
                                        <h4>Highlights</h4>
                                        <ul className="features-list">
                                            {room.features.slice(0, 6).map((feature, i) => (
                                                <li key={i}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="room-amenities">
                                        {room.amenities.slice(0, 6).map((amenity) => (
                                            <span key={amenity} className="amenity-tag" title={amenity}>
                                                {amenityIcons[amenity]}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="room-footer">
                                        <div className="room-price-info">
                                            <span className="price-label">From</span>
                                            <span className="price-value">${room.basePrice}</span>
                                            <span className="price-unit">/ night</span>
                                        </div>
                                        <div className="room-actions">
                                            <button
                                                className="btn btn-outline"
                                                onClick={() => setSelectedRoom(room)}
                                            >
                                                View Details
                                            </button>
                                            <Link to="/booking" className="btn btn-primary">
                                                Book Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Room Detail Modal */}
            {selectedRoom && (
                <div className="room-modal-overlay" onClick={() => setSelectedRoom(null)}>
                    <motion.div
                        className="room-modal"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close" onClick={() => setSelectedRoom(null)}>×</button>
                        <div className="modal-image">
                            <img src={getImageForRoom(selectedRoom)} alt={selectedRoom.name} />
                        </div>
                        <div className="modal-content">
                            <span className="room-category">{selectedRoom.category}</span>
                            <h2>{selectedRoom.name}</h2>
                            <p>{selectedRoom.description}</p>

                            <div className="modal-specs">
                                <div className="spec-item">
                                    <span className="spec-label">Size</span>
                                    <span className="spec-value">{selectedRoom.size}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Occupancy</span>
                                    <span className="spec-value">Up to {selectedRoom.maxGuests}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Bed</span>
                                    <span className="spec-value">{selectedRoom.bedType}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">View</span>
                                    <span className="spec-value">{selectedRoom.view}</span>
                                </div>
                            </div>

                            <h4>Room Features</h4>
                            <ul className="modal-features">
                                {selectedRoom.features.map((feature, i) => (
                                    <li key={i}>✓ {feature}</li>
                                ))}
                            </ul>

                            <div className="modal-footer">
                                <div className="modal-price">
                                    <span className="price-label">Starting from</span>
                                    <span className="price-amount">${selectedRoom.basePrice}</span>
                                    <span className="price-unit">per night</span>
                                </div>
                                <Link to="/booking" className="btn btn-gold btn-lg">
                                    Reserve Now
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Amenities Section */}
            <section className="amenities-section section bg-light">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">In Every Room</span>
                        <h2>Standard Amenities</h2>
                    </motion.div>
                    <div className="amenities-grid">
                        {[
                            { icon: '📶', name: 'High-Speed WiFi', desc: 'Complimentary throughout' },
                            { icon: '❄️', name: 'Climate Control', desc: 'Individual AC units' },
                            { icon: '📺', name: 'Smart TV', desc: 'Premium channels & streaming' },
                            { icon: '🍾', name: 'Mini Bar', desc: 'Refreshed daily' },
                            { icon: '🛁', name: 'Luxury Bath', desc: 'Premium amenities' },
                            { icon: '☕', name: 'Coffee & Tea', desc: 'Nespresso machine' },
                            { icon: '🔐', name: 'In-Room Safe', desc: 'Laptop-size' },
                            { icon: '🛎️', name: '24/7 Service', desc: 'Room service available' }
                        ].map((amenity, index) => (
                            <motion.div
                                key={amenity.name}
                                className="amenity-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <span className="amenity-icon">{amenity.icon}</span>
                                <h4>{amenity.name}</h4>
                                <p>{amenity.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="page-cta section gradient-ocean">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-white">Ready to Experience Azure Bay?</h2>
                        <p className="text-white" style={{ opacity: 0.9, maxWidth: '600px', margin: '0 auto var(--space-8)' }}>
                            Book directly with us and enjoy exclusive benefits including room upgrades,
                            welcome amenities, and our best rate guarantee.
                        </p>
                        <Link to="/booking" className="btn btn-gold btn-lg">
                            Check Availability
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
