import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/accommodations', label: 'Accommodations' },
    { path: '/dining', label: 'Dining' },
    { path: '/spa', label: 'Spa & Wellness' },
    { path: '/activities', label: 'Experiences' },
    { path: '/events', label: 'Events' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="header-container">
                {/* Logo */}
                <Link to="/" className="header-logo">
                    <span className="logo-icon">🌊</span>
                    <div className="logo-text">
                        <span className="logo-name">Azure Bay</span>
                        <span className="logo-tagline">Resort & Spa</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="header-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA Buttons */}
                <div className="header-actions">
                    <Link to="/booking" className="btn btn-primary btn-sm">
                        Book Now
                    </Link>
                    <button className="language-btn">EN</button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className="mobile-nav">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <Link to="/booking" className="btn btn-primary mobile-cta">
                                Book Your Stay
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
