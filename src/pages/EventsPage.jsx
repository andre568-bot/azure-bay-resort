import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import weddingVenue from '../assets/images/wedding_venue_1765193399218.png';
import './EventsPage.css';

const eventTypes = [
    {
        id: 'weddings',
        title: 'Weddings',
        subtitle: 'Your Dream Celebration',
        description: 'Exchange vows against the backdrop of an endless azure horizon. Our expert planners will craft every detail of your perfect day, from intimate beach ceremonies to grand celebrations.',
        features: ['Beachfront Ceremonies', 'Indoor Ballroom', 'Custom Menus', 'Dedicated Planner', 'Spa Packages', 'Guest Accommodations'],
        image: weddingVenue,
        capacity: 'Up to 200 guests'
    },
    {
        id: 'corporate',
        title: 'Corporate Events',
        subtitle: 'Inspire & Connect',
        description: 'Transform your next corporate gathering into an unforgettable experience. State-of-the-art facilities combined with world-class hospitality create the perfect environment for success.',
        features: ['Conference Center', 'AV Equipment', 'Team Building', 'Breakout Rooms', 'Catering Services', 'Executive Suites'],
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
        capacity: 'Up to 300 attendees'
    },
    {
        id: 'celebrations',
        title: 'Private Celebrations',
        subtitle: 'Mark the Moment',
        description: 'Whether it\'s a milestone birthday, anniversary, or family reunion, celebrate life\'s special moments in extraordinary style at Azure Bay Resort.',
        features: ['Private Venues', 'Custom Themes', 'Entertainment', 'Photography', 'Floral Design', 'Gourmet Dining'],
        image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800',
        capacity: 'Flexible sizing'
    }
];

const venues = [
    {
        name: 'Ocean Terrace',
        type: 'Outdoor',
        capacity: '150 guests',
        description: 'Open-air terrace with panoramic ocean views, perfect for sunset ceremonies.',
        image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600'
    },
    {
        name: 'Azure Ballroom',
        type: 'Indoor',
        capacity: '300 guests',
        description: 'Elegant ballroom with crystal chandeliers and floor-to-ceiling windows.',
        image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600'
    },
    {
        name: 'Beach Pavilion',
        type: 'Beachfront',
        capacity: '80 guests',
        description: 'Intimate beachside venue with toes-in-the-sand atmosphere.',
        image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600'
    },
    {
        name: 'Garden Courtyard',
        type: 'Outdoor',
        capacity: '120 guests',
        description: 'Lush tropical gardens creating a romantic, private setting.',
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600'
    }
];

export default function EventsPage() {
    return (
        <div className="events-page">
            {/* Hero Section */}
            <section className="page-hero">
                <div className="page-hero-image">
                    <img src={weddingVenue} alt="Events at Azure Bay" />
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
                        <span>Events</span>
                    </div>
                    <h1>Events & Celebrations</h1>
                    <p>Create unforgettable moments in paradise.</p>
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
                        <span className="section-label">Exceptional Events</span>
                        <h2>Where Dreams Take Shape</h2>
                        <p className="intro-text">
                            From intimate gatherings to grand celebrations, Azure Bay Resort provides
                            the perfect canvas for your most important occasions. Our dedicated events
                            team transforms your vision into reality, ensuring every detail exceeds expectations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Event Types */}
            <section className="event-types-section section bg-light">
                <div className="container">
                    {eventTypes.map((event, index) => (
                        <motion.div
                            key={event.id}
                            className={`event-type-card ${index % 2 === 1 ? 'reverse' : ''}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="event-image">
                                <img src={event.image} alt={event.title} />
                            </div>
                            <div className="event-content">
                                <span className="event-subtitle">{event.subtitle}</span>
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                                <div className="event-capacity">
                                    <span>📍 {event.capacity}</span>
                                </div>
                                <ul className="event-features">
                                    {event.features.map((feature, i) => (
                                        <li key={i}>✓ {feature}</li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="btn btn-primary">
                                    Request Information
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Venues */}
            <section className="venues-section section">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Our Spaces</span>
                        <h2>Stunning Venues</h2>
                        <p>Choose from our collection of indoor and outdoor event spaces.</p>
                    </motion.div>

                    <div className="venues-grid">
                        {venues.map((venue, index) => (
                            <motion.div
                                key={venue.name}
                                className="venue-card"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="venue-image">
                                    <img src={venue.image} alt={venue.name} />
                                    <span className="venue-type">{venue.type}</span>
                                </div>
                                <div className="venue-content">
                                    <h4>{venue.name}</h4>
                                    <p>{venue.description}</p>
                                    <span className="venue-capacity">👥 {venue.capacity}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="services-section section gradient-dark">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label text-azure">Full Service</span>
                        <h2 className="text-white">We Handle Everything</h2>
                        <p className="text-white" style={{ opacity: 0.9 }}>
                            Our experienced team ensures flawless execution from start to finish.
                        </p>
                    </motion.div>

                    <div className="services-grid">
                        {[
                            { icon: '📋', title: 'Event Planning', desc: 'Dedicated planner from inquiry to event day' },
                            { icon: '🍽️', title: 'Catering', desc: 'Custom menus by our executive chef' },
                            { icon: '💐', title: 'Floral & Décor', desc: 'Stunning arrangements and design' },
                            { icon: '🎵', title: 'Entertainment', desc: 'DJs, live bands, and performances' },
                            { icon: '📸', title: 'Photography', desc: 'Professional photo and video services' },
                            { icon: '🏨', title: 'Accommodations', desc: 'Special rates for event guests' }
                        ].map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="service-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="service-icon">{service.icon}</span>
                                <h4>{service.title}</h4>
                                <p>{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Wedding Packages Highlight */}
            <section className="wedding-highlight section">
                <div className="container">
                    <div className="highlight-content">
                        <motion.div
                            className="highlight-text"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-label">Wedding Packages</span>
                            <h2>Begin Your Forever</h2>
                            <p>
                                Our all-inclusive wedding packages take the stress out of planning,
                                allowing you to focus on what matters most—celebrating your love.
                            </p>
                            <div className="package-highlights">
                                <div className="pkg-item">
                                    <h4>Intimate Ceremony</h4>
                                    <p>Up to 30 guests • From $5,000</p>
                                </div>
                                <div className="pkg-item">
                                    <h4>Classic Wedding</h4>
                                    <p>Up to 80 guests • From $15,000</p>
                                </div>
                                <div className="pkg-item">
                                    <h4>Grand Celebration</h4>
                                    <p>Up to 200 guests • From $35,000</p>
                                </div>
                            </div>
                            <Link to="/contact" className="btn btn-gold btn-lg">
                                Request Wedding Brochure
                            </Link>
                        </motion.div>
                        <motion.div
                            className="highlight-image"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src={weddingVenue} alt="Wedding at Azure Bay" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="events-cta section bg-light">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Let's Create Magic</span>
                        <h2>Start Planning Your Event</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto var(--space-8)' }}>
                            Contact our events team to discuss your vision and receive a
                            personalized proposal. We'd love to help make your dream event a reality.
                        </p>
                        <div className="cta-contacts">
                            <div className="contact-item">
                                <span className="icon">📧</span>
                                <a href="mailto:events@azurebayresort.com">events@azurebayresort.com</a>
                            </div>
                            <div className="contact-item">
                                <span className="icon">📞</span>
                                <a href="tel:+15551234567">+1 (555) 123-4567</a>
                            </div>
                        </div>
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Contact Events Team
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
