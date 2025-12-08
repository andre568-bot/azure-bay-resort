import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { spaServices, spaCategories, spaAmenities, wellnessPackages } from '../data/spa';
import spaTreatment from '../assets/images/spa_treatment_1765193354374.png';
import './SpaPage.css';

export default function SpaPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredServices = activeCategory === 'All'
        ? spaServices
        : spaServices.filter(service => service.category === activeCategory);

    return (
        <div className="spa-page">
            {/* Hero Section */}
            <section className="page-hero spa-hero">
                <div className="page-hero-image">
                    <img src={spaTreatment} alt="Serenity Spa" />
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
                        <span>Spa & Wellness</span>
                    </div>
                    <h1>Serenity Spa</h1>
                    <p>Surrender to tranquility in our award-winning spa sanctuary.</p>
                </motion.div>
            </section>

            {/* Philosophy Section */}
            <section className="philosophy-section section">
                <div className="container">
                    <div className="philosophy-content">
                        <motion.div
                            className="philosophy-text"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-label">Our Philosophy</span>
                            <h2>Where Healing Meets the Sea</h2>
                            <p className="lead">
                                Drawing inspiration from the ocean's timeless rhythm, Serenity Spa offers
                                a holistic approach to wellness that nurtures body, mind, and spirit.
                            </p>
                            <p>
                                Our expert therapists blend ancient healing traditions with modern techniques,
                                using marine-derived ingredients and locally-sourced botanicals. Every treatment
                                is personalized to your needs, delivered in spaces designed for complete serenity.
                            </p>
                            <div className="spa-highlights">
                                <div className="highlight">
                                    <span className="highlight-number">15+</span>
                                    <span className="highlight-label">Treatment Rooms</span>
                                </div>
                                <div className="highlight">
                                    <span className="highlight-number">30+</span>
                                    <span className="highlight-label">Signature Treatments</span>
                                </div>
                                <div className="highlight">
                                    <span className="highlight-number">24/7</span>
                                    <span className="highlight-label">Fitness Center</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="philosophy-image"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800" alt="Spa ambiance" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Spa Amenities */}
            <section className="spa-amenities-section section bg-light">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Facilities</span>
                        <h2>Spa Amenities</h2>
                        <p>Complimentary access to all spa guests</p>
                    </motion.div>

                    <div className="amenities-grid">
                        {spaAmenities.map((amenity, index) => (
                            <motion.div
                                key={amenity.name}
                                className="amenity-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="amenity-icon">{amenity.icon}</span>
                                <h4>{amenity.name}</h4>
                                <p>{amenity.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Treatments */}
            <section className="treatments-section section">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Treatments</span>
                        <h2>Signature Experiences</h2>
                        <p>Each treatment is crafted to restore balance and rejuvenate your senses.</p>
                    </motion.div>

                    {/* Category Filter */}
                    <div className="category-filters">
                        {spaCategories.map((category) => (
                            <button
                                key={category}
                                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="treatments-grid">
                        {filteredServices.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className={`treatment-card ${service.featured ? 'featured' : ''}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="treatment-image">
                                    <img src={service.image} alt={service.name} />
                                    {service.featured && <span className="featured-badge">Signature</span>}
                                </div>
                                <div className="treatment-content">
                                    <span className="treatment-category">{service.category}</span>
                                    <h3>{service.name}</h3>
                                    <p>{service.description}</p>
                                    <div className="treatment-meta">
                                        <span className="duration">⏱️ {service.duration}</span>
                                        <span className="price">${service.price}</span>
                                    </div>
                                    <Link to="/contact" className="btn btn-outline btn-sm">
                                        Book Treatment
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Wellness Packages */}
            <section className="packages-section section gradient-ocean">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label text-white" style={{ opacity: 0.8 }}>Retreats</span>
                        <h2 className="text-white">Wellness Packages</h2>
                        <p className="text-white" style={{ opacity: 0.9 }}>Immersive experiences for complete renewal.</p>
                    </motion.div>

                    <div className="packages-grid">
                        {wellnessPackages.map((pkg, index) => (
                            <motion.div
                                key={pkg.name}
                                className="package-card"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="package-header">
                                    <span className="package-duration">{pkg.duration}</span>
                                    <h3>{pkg.name}</h3>
                                </div>
                                <p className="package-description">{pkg.description}</p>
                                <ul className="package-includes">
                                    {pkg.includes.map((item, i) => (
                                        <li key={i}>✓ {item}</li>
                                    ))}
                                </ul>
                                <div className="package-footer">
                                    <div className="package-price">
                                        <span className="from">From</span>
                                        <span className="amount">${pkg.price}</span>
                                    </div>
                                    <Link to="/contact" className="btn btn-gold">
                                        Book Package
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fitness Section */}
            <section className="fitness-section section">
                <div className="container">
                    <div className="fitness-content">
                        <motion.div
                            className="fitness-image"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800" alt="Fitness center" />
                        </motion.div>
                        <motion.div
                            className="fitness-text"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-label">Active Wellness</span>
                            <h2>Fitness & Movement</h2>
                            <p>
                                Maintain your fitness routine or discover new practices in our
                                state-of-the-art facilities.
                            </p>
                            <div className="fitness-features">
                                <div className="fitness-feature">
                                    <h4>Fitness Center</h4>
                                    <p>24/7 access with Technogym equipment, free weights, and cardio machines.</p>
                                </div>
                                <div className="fitness-feature">
                                    <h4>Yoga & Pilates</h4>
                                    <p>Daily classes in our oceanview pavilion, suitable for all levels.</p>
                                </div>
                                <div className="fitness-feature">
                                    <h4>Personal Training</h4>
                                    <p>One-on-one sessions with certified trainers tailored to your goals.</p>
                                </div>
                                <div className="fitness-feature">
                                    <h4>Outdoor Activities</h4>
                                    <p>Beach jogging trails, tennis courts, and aqua fitness classes.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Booking CTA */}
            <section className="spa-cta section bg-light">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Begin Your Journey</span>
                        <h2>Book Your Spa Experience</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto var(--space-8)' }}>
                            For reservations and personalized treatment recommendations, contact our
                            spa concierge. We recommend booking treatments in advance during peak seasons.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-gold btn-lg">
                                Reserve Treatment
                            </Link>
                            <a href="tel:+15551234567" className="btn btn-outline btn-lg">
                                Call: +1 (555) 123-4567
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
