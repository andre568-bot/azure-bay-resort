import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import resortHero from '../assets/images/resort_hero_1765193292358.png';
import './ContactPage.css';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: 'general',
        message: '',
        newsletter: false
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="page-hero contact-hero">
                <div className="page-hero-image">
                    <img src={resortHero} alt="Contact Azure Bay Resort" />
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
                        <span>Contact</span>
                    </div>
                    <h1>Contact Us</h1>
                    <p>We're here to make your experience extraordinary.</p>
                </motion.div>
            </section>

            {/* Contact Cards */}
            <section className="contact-cards-section section">
                <div className="container">
                    <div className="contact-cards">
                        <motion.div
                            className="contact-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="card-icon">📍</span>
                            <h3>Location</h3>
                            <p>123 Oceanfront Drive<br />Paradise Bay, AB 12345</p>
                            <a href="#" className="card-link">Get Directions →</a>
                        </motion.div>

                        <motion.div
                            className="contact-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <span className="card-icon">📞</span>
                            <h3>Reservations</h3>
                            <p>+1 (555) 123-4567<br />Available 24/7</p>
                            <a href="tel:+15551234567" className="card-link">Call Now →</a>
                        </motion.div>

                        <motion.div
                            className="contact-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="card-icon">✉️</span>
                            <h3>Email</h3>
                            <p>reservations@azurebayresort.com<br />info@azurebayresort.com</p>
                            <a href="mailto:reservations@azurebayresort.com" className="card-link">Send Email →</a>
                        </motion.div>

                        <motion.div
                            className="contact-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="card-icon">💬</span>
                            <h3>Live Chat</h3>
                            <p>Chat with our team<br />Response within minutes</p>
                            <button className="card-link card-btn">Start Chat →</button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form-section section bg-light">
                <div className="container">
                    <div className="form-container">
                        <motion.div
                            className="form-info"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-label">Get in Touch</span>
                            <h2>How Can We Help?</h2>
                            <p>
                                Whether you have questions about reservations, special requests,
                                or need assistance planning your stay, our dedicated team is
                                ready to assist you.
                            </p>

                            <div className="department-contacts">
                                <div className="dept">
                                    <h4>Reservations</h4>
                                    <p>For booking inquiries and availability</p>
                                    <a href="tel:+15551234567">+1 (555) 123-4567</a>
                                </div>
                                <div className="dept">
                                    <h4>Concierge</h4>
                                    <p>For activities, dining, and experiences</p>
                                    <a href="tel:+15551234568">+1 (555) 123-4568</a>
                                </div>
                                <div className="dept">
                                    <h4>Events</h4>
                                    <p>For weddings and special occasions</p>
                                    <a href="mailto:events@azurebayresort.com">events@azurebayresort.com</a>
                                </div>
                                <div className="dept">
                                    <h4>Spa</h4>
                                    <p>For treatment bookings</p>
                                    <a href="tel:+15551234569">+1 (555) 123-4569</a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="form-wrapper"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            {submitted ? (
                                <div className="form-success">
                                    <span className="success-icon">✓</span>
                                    <h3>Thank You!</h3>
                                    <p>
                                        Your message has been received. Our team will respond
                                        within 24 hours. For urgent inquiries, please call us directly.
                                    </p>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => setSubmitted(false)}
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="firstName" className="form-label">First Name *</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                className="form-input"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lastName" className="form-label">Last Name *</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                className="form-input"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="email" className="form-label">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-input"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone" className="form-label">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="form-input"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject" className="form-label">Subject *</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            className="form-select"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="general">General Inquiry</option>
                                            <option value="reservations">Reservations</option>
                                            <option value="dining">Dining</option>
                                            <option value="spa">Spa & Wellness</option>
                                            <option value="activities">Activities</option>
                                            <option value="events">Events & Weddings</option>
                                            <option value="feedback">Feedback</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message" className="form-label">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="form-textarea"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            placeholder="Tell us how we can assist you..."
                                        ></textarea>
                                    </div>

                                    <div className="form-group checkbox-group">
                                        <input
                                            type="checkbox"
                                            id="newsletter"
                                            name="newsletter"
                                            checked={formData.newsletter}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="newsletter">
                                            Subscribe to receive exclusive offers and updates
                                        </label>
                                    </div>

                                    <button type="submit" className="btn btn-gold btn-lg submit-btn">
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="map-placeholder">
                    <div className="map-content">
                        <span className="map-icon">🗺️</span>
                        <h3>Find Us</h3>
                        <p>123 Oceanfront Drive, Paradise Bay</p>
                        <p className="map-note">
                            30 minutes from Paradise Bay International Airport
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="faq-section section">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Quick Answers</span>
                        <h2>Frequently Asked Questions</h2>
                    </motion.div>

                    <div className="faq-grid">
                        {[
                            { q: 'What time is check-in and check-out?', a: 'Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request.' },
                            { q: 'Is airport transfer available?', a: 'Yes, we offer luxury airport transfers. Please contact concierge to arrange your pickup.' },
                            { q: 'Do you accommodate dietary restrictions?', a: 'Absolutely. Our chefs can accommodate all dietary needs. Please inform us of any restrictions at booking.' },
                            { q: 'Is the resort family-friendly?', a: 'Yes, we welcome families with our Kids Club, family suites, and child-friendly activities.' }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                className="faq-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h4>{faq.q}</h4>
                                <p>{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center" style={{ marginTop: 'var(--space-8)' }}>
                        <Link to="/faq" className="btn btn-outline">
                            View All FAQs
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
