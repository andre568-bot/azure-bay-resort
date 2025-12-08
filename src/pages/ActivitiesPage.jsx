import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { activities, activityCategories, kidsClub } from '../data/activities';
import beachActivities from '../assets/images/beach_activities_1765193382821.png';
import './ActivitiesPage.css';

export default function ActivitiesPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredActivities = activeCategory === 'All'
        ? activities
        : activities.filter(activity => activity.category === activeCategory);

    return (
        <div className="activities-page">
            {/* Hero Section */}
            <section className="page-hero">
                <div className="page-hero-image">
                    <img src={beachActivities} alt="Resort activities" />
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
                        <span>Experiences</span>
                    </div>
                    <h1>Experiences & Activities</h1>
                    <p>Adventure, relaxation, and discovery await at every turn.</p>
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
                        <span className="section-label">Unforgettable Moments</span>
                        <h2>Your Adventure Awaits</h2>
                        <p className="intro-text">
                            From thrilling water sports and sunset cruises to serene yoga sessions
                            and culinary adventures, Azure Bay Resort offers endless ways to make
                            your stay extraordinary.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="filter-section">
                <div className="container">
                    <div className="category-filters">
                        {activityCategories.map((category) => (
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

            {/* Activities Grid */}
            <section className="activities-grid-section section">
                <div className="container">
                    <div className="activities-grid">
                        {filteredActivities.map((activity, index) => (
                            <motion.div
                                key={activity.id}
                                className={`activity-card ${activity.featured ? 'featured' : ''}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <div className="activity-image">
                                    <img src={activity.image} alt={activity.name} />
                                    {activity.featured && <span className="featured-badge">Popular</span>}
                                    <span className="difficulty-badge">{activity.difficulty}</span>
                                </div>
                                <div className="activity-content">
                                    <span className="activity-category">{activity.category}</span>
                                    <h3>{activity.name}</h3>
                                    <p>{activity.description}</p>
                                    <div className="activity-meta">
                                        <span className="duration">⏱️ {activity.duration}</span>
                                        <span className="price">From ${activity.price}</span>
                                    </div>
                                    <Link to="/contact" className="btn btn-outline btn-sm">
                                        Book Now
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kids Club */}
            <section className="kids-section section gradient-ocean">
                <div className="container">
                    <div className="kids-content">
                        <motion.div
                            className="kids-text"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-label text-white" style={{ opacity: 0.8 }}>For Young Explorers</span>
                            <h2 className="text-white">{kidsClub.name}</h2>
                            <p className="text-white" style={{ opacity: 0.9 }}>
                                {kidsClub.description}
                            </p>
                            <div className="kids-info">
                                <div className="info-item">
                                    <span className="info-label">Ages</span>
                                    <span className="info-value">{kidsClub.ageRange}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Hours</span>
                                    <span className="info-value">{kidsClub.hours}</span>
                                </div>
                            </div>
                            <div className="kids-activities">
                                <h4 className="text-white">Activities Include:</h4>
                                <ul>
                                    {kidsClub.activities.map((activity, i) => (
                                        <li key={i}>{activity}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div
                            className="kids-image"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src={kidsClub.image} alt="Kids club" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Equipment & Rentals */}
            <section className="equipment-section section">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Equipment</span>
                        <h2>Complimentary for Guests</h2>
                        <p>Enjoy these activities and equipment at no additional charge.</p>
                    </motion.div>

                    <div className="equipment-grid">
                        {[
                            { icon: '🏖️', name: 'Beach Loungers', desc: 'Reserved beachfront chairs & umbrellas' },
                            { icon: '🚴', name: 'Bicycles', desc: 'Explore the resort grounds' },
                            { icon: '🏐', name: 'Beach Sports', desc: 'Volleyball, frisbee & more' },
                            { icon: '🎾', name: 'Tennis Courts', desc: 'Rackets & balls provided' },
                            { icon: '🏊', name: 'Pool Floats', desc: 'Fun pool accessories' },
                            { icon: '🧘', name: 'Yoga Mats', desc: 'For beach or room practice' }
                        ].map((item, index) => (
                            <motion.div
                                key={item.name}
                                className="equipment-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="equipment-icon">{item.icon}</span>
                                <h4>{item.name}</h4>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="activities-cta section bg-light">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Plan Your Adventures</span>
                        <h2>Ready to Explore?</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto var(--space-8)' }}>
                            Our activities concierge is ready to help you plan your perfect
                            island adventure. Pre-booking is recommended for popular activities.
                        </p>
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Contact Activities Desk
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
