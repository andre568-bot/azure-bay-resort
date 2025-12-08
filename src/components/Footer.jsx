import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';

const footerLinks = {
    resort: [
        { label: 'About Us', path: '/about' },
        { label: 'Accommodations', path: '/accommodations' },
        { label: 'Dining', path: '/dining' },
        { label: 'Spa & Wellness', path: '/spa' },
        { label: 'Activities', path: '/activities' },
        { label: 'Events & Weddings', path: '/events' }
    ],
    guests: [
        { label: 'Special Offers', path: '/offers' },
        { label: 'Gift Cards', path: '/gift-cards' },
        { label: 'Loyalty Program', path: '/loyalty' },
        { label: 'FAQs', path: '/faq' },
        { label: 'Contact Us', path: '/contact' },
        { label: 'Careers', path: '/careers' }
    ],
    legal: [
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'Terms & Conditions', path: '/terms' },
        { label: 'Cookie Policy', path: '/cookies' },
        { label: 'Accessibility', path: '/accessibility' }
    ]
};

const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'YouTube', icon: '▶️', url: '#' }
];

const awards = [
    '🏆 Forbes Five-Star',
    '⭐ TripAdvisor Travelers Choice',
    '🌿 Green Globe Certified',
    '🏅 Condé Nast Top 50'
];

export default function Footer() {
    return (
        <footer className="footer">
            {/* Newsletter Section */}
            <div className="footer-newsletter">
                <div className="container">
                    <motion.div
                        className="newsletter-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="newsletter-text">
                            <h3>Stay Inspired</h3>
                            <p>Subscribe to receive exclusive offers and the latest news from Azure Bay Resort.</p>
                        </div>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="newsletter-input"
                                required
                            />
                            <button type="submit" className="btn btn-gold">
                                Subscribe
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand Column */}
                        <div className="footer-brand">
                            <Link to="/" className="footer-logo">
                                <span className="logo-icon">🌊</span>
                                <div className="logo-text">
                                    <span className="logo-name">Azure Bay</span>
                                    <span className="logo-tagline">Resort & Spa</span>
                                </div>
                            </Link>
                            <p className="footer-description">
                                Where the azure waters meet pristine shores, discover a sanctuary of luxury,
                                wellness, and unforgettable experiences.
                            </p>
                            <div className="footer-contact">
                                <p>📍 Oceanfront Drive, Paradise Bay</p>
                                <p>📞 +1 (555) 123-4567</p>
                                <p>✉️ reservations@azurebayresort.com</p>
                            </div>
                            <div className="footer-social">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        className="social-link"
                                        aria-label={social.name}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Links Columns */}
                        <div className="footer-links-column">
                            <h4>Resort</h4>
                            <ul>
                                {footerLinks.resort.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-links-column">
                            <h4>For Guests</h4>
                            <ul>
                                {footerLinks.guests.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-links-column">
                            <h4>Legal</h4>
                            <ul>
                                {footerLinks.legal.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Awards */}
                            <div className="footer-awards">
                                <h4>Recognition</h4>
                                <div className="awards-list">
                                    {awards.map((award, index) => (
                                        <span key={index} className="award-badge">
                                            {award}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p>&copy; {new Date().getFullYear()} Azure Bay Resort. All rights reserved.</p>
                        <p>Designed with ❤️ for unforgettable experiences</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
