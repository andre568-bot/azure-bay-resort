import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { restaurants, diningExperiences } from '../data/dining';
import restaurantDining from '../assets/images/restaurant_dining_1765193325776.png';
import './DiningPage.css';

export default function DiningPage() {
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    return (
        <div className="dining-page">
            {/* Hero Section */}
            <section className="page-hero">
                <div className="page-hero-image">
                    <img src={restaurantDining} alt="Fine dining at Azure Bay" />
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
                        <span>Dining</span>
                    </div>
                    <h1>Culinary Excellence</h1>
                    <p>A world of flavors awaits, from ocean-fresh seafood to international gourmet cuisine.</p>
                </motion.div>
            </section>

            {/* Intro */}
            <section className="intro-section section">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Gastronomic Journey</span>
                        <h2>Where Every Meal is a Celebration</h2>
                        <p className="intro-text">
                            Our award-winning culinary team creates extraordinary dining experiences that
                            celebrate local ingredients, global influences, and the art of hospitality.
                            From sunrise to starlit dinners, savor moments that linger long after the last bite.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Restaurants */}
            <section className="restaurants-section section bg-light">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Our Restaurants</span>
                        <h2>Exceptional Venues</h2>
                    </motion.div>

                    <div className="restaurants-grid">
                        {restaurants.map((restaurant, index) => (
                            <motion.div
                                key={restaurant.id}
                                className={`restaurant-card ${restaurant.featured ? 'featured' : ''}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="restaurant-image">
                                    <img src={restaurant.image} alt={restaurant.name} />
                                    {restaurant.featured && <span className="featured-tag">Signature</span>}
                                </div>
                                <div className="restaurant-content">
                                    <span className="cuisine-type">{restaurant.cuisine}</span>
                                    <h3>{restaurant.name}</h3>
                                    <p>{restaurant.description}</p>

                                    <div className="restaurant-info">
                                        <div className="info-item">
                                            <span className="info-label">Hours</span>
                                            <span className="info-value">{restaurant.hours}</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">Dress Code</span>
                                            <span className="info-value">{restaurant.dressCode}</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">Price</span>
                                            <span className="info-value price-range">{restaurant.priceRange}</span>
                                        </div>
                                    </div>

                                    <div className="restaurant-features">
                                        {restaurant.features.map((feature, i) => (
                                            <span key={i} className="feature-tag">{feature}</span>
                                        ))}
                                    </div>

                                    <button
                                        className="btn btn-outline"
                                        onClick={() => setSelectedRestaurant(restaurant)}
                                    >
                                        View Menu
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Modal */}
            {selectedRestaurant && (
                <div className="menu-modal-overlay" onClick={() => setSelectedRestaurant(null)}>
                    <motion.div
                        className="menu-modal"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close" onClick={() => setSelectedRestaurant(null)}>×</button>
                        <div className="menu-header">
                            <h2>{selectedRestaurant.name}</h2>
                            <p>{selectedRestaurant.cuisine}</p>
                        </div>
                        <div className="menu-content">
                            <h3>Featured Dishes</h3>
                            <div className="menu-items">
                                {selectedRestaurant.menuHighlights.map((item, index) => (
                                    <div key={index} className="menu-item">
                                        <div className="item-info">
                                            <span className="item-name">{item.name}</span>
                                            <span className="item-desc">{item.description}</span>
                                        </div>
                                        <span className="item-price">${item.price}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="menu-note">* Full menu available upon request. Seasonal items may vary.</p>
                        </div>
                        <div className="menu-footer">
                            <Link to="/contact" className="btn btn-gold">
                                Make Reservation
                            </Link>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Dining Experiences */}
            <section className="experiences-section section">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Unique Experiences</span>
                        <h2>Beyond the Table</h2>
                        <p>Create unforgettable memories with our exclusive culinary experiences.</p>
                    </motion.div>

                    <div className="experiences-grid">
                        {diningExperiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                className="experience-card"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="experience-image">
                                    <img src={exp.image} alt={exp.name} />
                                </div>
                                <div className="experience-content">
                                    <h4>{exp.name}</h4>
                                    <p>{exp.description}</p>
                                    <div className="experience-meta">
                                        <span className="duration">⏱️ {exp.duration}</span>
                                        <span className="price">From ${exp.price}</span>
                                    </div>
                                    <Link to="/contact" className="btn btn-outline btn-sm">
                                        Inquire Now
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* In-Room Dining */}
            <section className="room-service-section section gradient-dark">
                <div className="container">
                    <div className="room-service-content">
                        <motion.div
                            className="service-text"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-label text-azure">Private Dining</span>
                            <h2 className="text-white">In-Room & Villa Dining</h2>
                            <p className="text-white">
                                Prefer the privacy of your suite? Our 24-hour in-room dining brings
                                the excellence of our kitchens directly to you. From midnight cravings
                                to breakfast in bed, experience restaurant-quality dining in your personal space.
                            </p>
                            <ul className="service-features">
                                <li>24/7 Room Service Available</li>
                                <li>Full Restaurant Menus</li>
                                <li>Private Chef Options</li>
                                <li>Special Occasion Setups</li>
                            </ul>
                            <Link to="/contact" className="btn btn-gold">
                                Request Private Dining
                            </Link>
                        </motion.div>
                        <motion.div
                            className="service-image"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800" alt="Private dining" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Reservations CTA */}
            <section className="reservations-section section">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Reservations</span>
                        <h2>Reserve Your Table</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto var(--space-8)' }}>
                            For reservations at our signature restaurants or to arrange a special
                            dining experience, please contact our concierge team.
                        </p>
                        <div className="contact-options">
                            <div className="contact-option">
                                <span className="contact-icon">📞</span>
                                <span className="contact-value">+1 (555) 123-4567</span>
                            </div>
                            <div className="contact-option">
                                <span className="contact-icon">✉️</span>
                                <span className="contact-value">dining@azurebayresort.com</span>
                            </div>
                        </div>
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Make a Reservation
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
