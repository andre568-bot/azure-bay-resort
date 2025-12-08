import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { rooms } from '../data/rooms';
import { restaurants } from '../data/dining';
import { spaServices } from '../data/spa';
import { activities } from '../data/activities';
import resortHero from '../assets/images/resort_hero_1765193292358.png';
import oceanSuite from '../assets/images/ocean_suite_1765193310941.png';
import restaurantDining from '../assets/images/restaurant_dining_1765193325776.png';
import infinityPool from '../assets/images/infinity_pool_1765193339932.png';
import spaTreatment from '../assets/images/spa_treatment_1765193354374.png';
import beachActivities from '../assets/images/beach_activities_1765193382821.png';
import weddingVenue from '../assets/images/wedding_venue_1765193399218.png';
import premiumVilla from '../assets/images/premium_villa_1765193415201.png';
import './HomePage.css';

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const testimonials = [
    {
        name: 'Sarah & Michael',
        location: 'New York, USA',
        text: 'Our honeymoon at Azure Bay was absolutely magical. The private beach dinner and couples spa treatments created memories we\'ll cherish forever.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=200'
    },
    {
        name: 'James Wellington',
        location: 'London, UK',
        text: 'Impeccable service, stunning views, and world-class cuisine. Azure Bay exceeds every expectation of luxury hospitality.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'
    },
    {
        name: 'The Anderson Family',
        location: 'Sydney, Australia',
        text: 'The kids loved the explorer\'s club while we relaxed at the spa. Perfect family getaway with something for everyone.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200'
    }
];

const weatherData = {
    temp: 28,
    condition: 'Sunny',
    humidity: 65,
    wind: 12,
    oceanTemp: 26,
    uvIndex: 7
};

export default function HomePage() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const featuredRooms = rooms.filter(room => room.featured).slice(0, 3);
    const featuredRestaurants = restaurants.filter(r => r.featured).slice(0, 3);
    const featuredActivities = activities.filter(a => a.featured).slice(0, 4);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-media">
                    <img src={resortHero} alt="Azure Bay Resort aerial view" className="hero-image" />
                    <div className="hero-overlay"></div>
                </div>
                <div className="hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="hero-tagline">Welcome to Paradise</span>
                        <h1>Azure Bay Resort</h1>
                        <p>Where luxury meets the endless azure horizon. Experience an extraordinary coastal escape crafted for discerning travelers.</p>
                        <div className="hero-actions">
                            <Link to="/booking" className="btn btn-primary btn-lg">
                                Book Your Escape
                            </Link>
                            <Link to="/accommodations" className="btn btn-secondary btn-lg">
                                Explore Rooms
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Booking Widget */}
                <motion.div
                    className="hero-booking-widget"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="booking-widget glass">
                        <div className="booking-field">
                            <label>Check In</label>
                            <input type="date" defaultValue="2024-03-15" />
                        </div>
                        <div className="booking-field">
                            <label>Check Out</label>
                            <input type="date" defaultValue="2024-03-18" />
                        </div>
                        <div className="booking-field">
                            <label>Guests</label>
                            <select defaultValue="2">
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guests</option>
                                <option value="3">3 Guests</option>
                                <option value="4">4 Guests</option>
                                <option value="5">5+ Guests</option>
                            </select>
                        </div>
                        <Link to="/booking" className="btn btn-gold btn-lg booking-cta">
                            Check Availability
                        </Link>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <div className="scroll-indicator">
                    <span>Discover More</span>
                    <div className="scroll-arrow">↓</div>
                </div>
            </section>

            {/* Weather Widget Section */}
            <section className="weather-section">
                <div className="container">
                    <div className="weather-widget">
                        <div className="weather-main">
                            <span className="weather-icon">☀️</span>
                            <span className="weather-temp">{weatherData.temp}°C</span>
                            <span className="weather-condition">{weatherData.condition}</span>
                        </div>
                        <div className="weather-details">
                            <div className="weather-detail">
                                <span className="detail-label">Ocean Temp</span>
                                <span className="detail-value">{weatherData.oceanTemp}°C</span>
                            </div>
                            <div className="weather-detail">
                                <span className="detail-label">Humidity</span>
                                <span className="detail-value">{weatherData.humidity}%</span>
                            </div>
                            <div className="weather-detail">
                                <span className="detail-label">Wind</span>
                                <span className="detail-value">{weatherData.wind} km/h</span>
                            </div>
                            <div className="weather-detail">
                                <span className="detail-label">UV Index</span>
                                <span className="detail-value">{weatherData.uvIndex}</span>
                            </div>
                        </div>
                        <div className="weather-message">
                            Perfect conditions for water activities today!
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section section-lg">
                <div className="container">
                    <div className="about-grid">
                        <motion.div
                            className="about-content"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="section-label">Our Story</span>
                            <h2>A Sanctuary of Coastal Luxury</h2>
                            <p className="lead">
                                Nestled along pristine shores where turquoise waters meet powder-soft sands,
                                Azure Bay Resort offers an unparalleled retreat for those who seek the extraordinary.
                            </p>
                            <p>
                                Every detail has been thoughtfully curated to create moments of pure bliss—from
                                our world-class spa treatments and innovative culinary experiences to the
                                personalized service that anticipates your every need.
                            </p>
                            <div className="about-stats">
                                <div className="stat">
                                    <span className="stat-number">5</span>
                                    <span className="stat-label">Star Resort</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">150+</span>
                                    <span className="stat-label">Luxury Rooms</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">5</span>
                                    <span className="stat-label">Restaurants</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">20+</span>
                                    <span className="stat-label">Experiences</span>
                                </div>
                            </div>
                            <Link to="/about" className="btn btn-outline">
                                Discover Our Story
                            </Link>
                        </motion.div>
                        <motion.div
                            className="about-images"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="image-stack">
                                <img src={oceanSuite} alt="Luxury ocean suite" className="stack-image main" />
                                <img src={infinityPool} alt="Infinity pool" className="stack-image secondary" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Accommodations Section */}
            <section className="accommodations-section section bg-light">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Accommodations</span>
                        <h2>Your Private Sanctuary</h2>
                        <p>Each room and suite is a masterpiece of design, offering breathtaking views and unparalleled comfort.</p>
                    </motion.div>

                    <motion.div
                        className="rooms-grid"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {featuredRooms.map((room, index) => (
                            <motion.div
                                key={room.id}
                                className="room-card"
                                variants={fadeInUp}
                            >
                                <div className="room-image-container">
                                    <img src={index === 0 ? oceanSuite : index === 1 ? premiumVilla : room.images[0]} alt={room.name} />
                                    <div className="room-overlay">
                                        <Link to={`/accommodations/${room.id}`} className="btn btn-primary">
                                            View Details
                                        </Link>
                                    </div>
                                    <span className="room-badge">{room.category}</span>
                                </div>
                                <div className="room-content">
                                    <h3>{room.name}</h3>
                                    <p>{room.shortDescription}</p>
                                    <div className="room-details">
                                        <span>👥 {room.maxGuests} Guests</span>
                                        <span>📐 {room.size}</span>
                                        <span>🛏️ {room.bedType}</span>
                                    </div>
                                    <div className="room-price">
                                        <span className="price">From ${room.basePrice}</span>
                                        <span className="price-unit">/ night</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="section-cta text-center">
                        <Link to="/accommodations" className="btn btn-outline">
                            View All Accommodations
                        </Link>
                    </div>
                </div>
            </section>

            {/* Dining Section */}
            <section className="dining-section section">
                <div className="container">
                    <div className="dining-header">
                        <motion.div
                            className="dining-intro"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-label">Culinary Excellence</span>
                            <h2>A Feast for the Senses</h2>
                            <p>
                                From sunrise to starlit dinners, our award-winning restaurants offer
                                extraordinary culinary journeys crafted by world-renowned chefs.
                            </p>
                            <Link to="/dining" className="btn btn-outline">
                                Explore Dining
                            </Link>
                        </motion.div>
                        <motion.div
                            className="dining-hero-image"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src={restaurantDining} alt="Fine dining at Azure Bay" />
                        </motion.div>
                    </div>

                    <div className="dining-cards">
                        {featuredRestaurants.map((restaurant, index) => (
                            <motion.div
                                key={restaurant.id}
                                className="dining-card"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <img src={restaurant.image} alt={restaurant.name} />
                                <div className="dining-card-content">
                                    <span className="cuisine-type">{restaurant.cuisine}</span>
                                    <h4>{restaurant.name}</h4>
                                    <p>{restaurant.shortDescription}</p>
                                    <div className="dining-meta">
                                        <span>🕐 {restaurant.hours}</span>
                                        <span className="price-range">{restaurant.priceRange}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Spa & Wellness Section */}
            <section className="spa-section section">
                <div className="spa-background">
                    <img src={spaTreatment} alt="Spa treatment at Azure Bay" />
                    <div className="spa-overlay"></div>
                </div>
                <div className="container">
                    <motion.div
                        className="spa-content"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label text-white">Rejuvenation</span>
                        <h2 className="text-white">Serenity Spa & Wellness</h2>
                        <p className="text-white">
                            Surrender to tranquility in our award-winning spa. Ancient healing traditions
                            meet modern wellness practices in a sanctuary designed for complete renewal.
                        </p>
                        <div className="spa-features">
                            <div className="spa-feature">
                                <span className="feature-icon">💆</span>
                                <span>Signature Treatments</span>
                            </div>
                            <div className="spa-feature">
                                <span className="feature-icon">🧘</span>
                                <span>Yoga & Meditation</span>
                            </div>
                            <div className="spa-feature">
                                <span className="feature-icon">🏊</span>
                                <span>Infinity Pool</span>
                            </div>
                            <div className="spa-feature">
                                <span className="feature-icon">🧖</span>
                                <span>Steam & Sauna</span>
                            </div>
                        </div>
                        <Link to="/spa" className="btn btn-gold btn-lg">
                            Explore Wellness
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Activities Section */}
            <section className="activities-section section bg-light">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Experiences</span>
                        <h2>Adventures Await</h2>
                        <p>From thrilling water sports to serene sunset cruises, discover moments that become memories.</p>
                    </motion.div>

                    <div className="activities-gallery">
                        <motion.div
                            className="activity-featured"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src={beachActivities} alt="Beach activities" />
                            <div className="activity-overlay">
                                <h3>Water Adventures</h3>
                                <p>Snorkeling, kayaking, jet skiing, and more</p>
                                <Link to="/activities" className="btn btn-primary">
                                    Explore Activities
                                </Link>
                            </div>
                        </motion.div>
                        <div className="activity-grid">
                            {featuredActivities.slice(0, 4).map((activity, index) => (
                                <motion.div
                                    key={activity.id}
                                    className="activity-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <img src={activity.image} alt={activity.name} />
                                    <div className="activity-info">
                                        <h4>{activity.name}</h4>
                                        <span className="activity-price">From ${activity.price}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Events & Weddings Section */}
            <section className="events-section section">
                <div className="container">
                    <div className="events-content">
                        <motion.div
                            className="events-image"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <img src={weddingVenue} alt="Wedding venue at Azure Bay" />
                        </motion.div>
                        <motion.div
                            className="events-text"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-label">Celebrations</span>
                            <h2>Your Dream Celebration</h2>
                            <p>
                                From intimate beach weddings to grand celebrations, create magical moments
                                against the backdrop of endless ocean horizons. Our dedicated events team
                                ensures every detail is perfection.
                            </p>
                            <ul className="events-list">
                                <li>💒 Beachfront Wedding Ceremonies</li>
                                <li>🎉 Corporate Retreats & Events</li>
                                <li>🎂 Milestone Celebrations</li>
                                <li>🌅 Private Beach Parties</li>
                            </ul>
                            <Link to="/events" className="btn btn-primary">
                                Plan Your Event
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section section gradient-dark">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label text-azure">Guest Experiences</span>
                        <h2 className="text-white">What Our Guests Say</h2>
                    </motion.div>

                    <div className="testimonials-slider">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className={`testimonial-card ${index === currentTestimonial ? 'active' : ''}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{
                                    opacity: index === currentTestimonial ? 1 : 0,
                                    scale: index === currentTestimonial ? 1 : 0.9,
                                    x: `${(index - currentTestimonial) * 100}%`
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="testimonial-content">
                                    <div className="testimonial-stars">
                                        {'⭐'.repeat(testimonial.rating)}
                                    </div>
                                    <blockquote>"{testimonial.text}"</blockquote>
                                    <div className="testimonial-author">
                                        <img src={testimonial.image} alt={testimonial.name} />
                                        <div className="author-info">
                                            <span className="author-name">{testimonial.name}</span>
                                            <span className="author-location">{testimonial.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="testimonial-dots">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                                onClick={() => setCurrentTestimonial(index)}
                                aria-label={`View testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Special Offers Section */}
            <section className="offers-section section">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Exclusive Offers</span>
                        <h2>Special Packages</h2>
                        <p>Enhance your stay with our carefully curated packages and exclusive offers.</p>
                    </motion.div>

                    <div className="offers-grid">
                        <motion.div
                            className="offer-card featured-offer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="offer-badge">Best Value</div>
                            <div className="offer-content">
                                <h3>Romantic Escape Package</h3>
                                <p>3 nights in Ocean View Suite, couples spa treatment, private beach dinner, champagne on arrival.</p>
                                <div className="offer-price">
                                    <span className="old-price">$2,400</span>
                                    <span className="new-price">$1,899</span>
                                </div>
                                <Link to="/booking" className="btn btn-gold">
                                    Book This Package
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            className="offer-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="offer-content">
                                <h3>Early Bird Discount</h3>
                                <p>Book 60 days in advance and save 25% on your entire stay.</p>
                                <div className="offer-highlight">25% OFF</div>
                                <Link to="/offers" className="btn btn-outline">
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            className="offer-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="offer-content">
                                <h3>Extended Stay Special</h3>
                                <p>Stay 5 nights and receive the 6th night complimentary.</p>
                                <div className="offer-highlight">Free Night</div>
                                <Link to="/offers" className="btn btn-outline">
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-background">
                    <img src={resortHero} alt="Azure Bay Resort" />
                    <div className="cta-overlay"></div>
                </div>
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Begin Your Azure Bay Journey</h2>
                        <p>Experience the extraordinary. Book direct and enjoy exclusive benefits including room upgrades, welcome amenities, and flexible cancellation.</p>
                        <div className="cta-actions">
                            <Link to="/booking" className="btn btn-gold btn-lg">
                                Reserve Your Stay
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-lg">
                                Contact Concierge
                            </Link>
                        </div>
                        <div className="cta-benefits">
                            <span>✓ Best Rate Guarantee</span>
                            <span>✓ Complimentary Upgrades</span>
                            <span>✓ Flexible Cancellation</span>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
