import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import resortHero from '../assets/images/resort_hero_1765193292358.png';
import infinityPool from '../assets/images/infinity_pool_1765193339932.png';
import './AboutPage.css';

const timeline = [
    { year: '1998', title: 'The Vision', desc: 'Azure Bay Resort was founded with a vision to create a sanctuary where luxury meets nature.' },
    { year: '2005', title: 'First Expansion', desc: 'Added the Serenity Spa and our signature beachfront villas.' },
    { year: '2012', title: 'Culinary Excellence', desc: 'Launched Azure Terrace restaurant with Michelin-starred Chef Marco Bellini.' },
    { year: '2018', title: 'Sustainability Pledge', desc: 'Achieved Green Globe certification and committed to carbon neutrality.' },
    { year: '2023', title: 'Digital Innovation', desc: 'Introduced AI concierge services and smart room technology.' }
];

const values = [
    { icon: '🌊', title: 'Exceptional Hospitality', desc: 'Every guest is treated as family, with personalized service that anticipates needs.' },
    { icon: '🌿', title: 'Environmental Stewardship', desc: 'We protect the natural beauty that makes our location special for future generations.' },
    { icon: '✨', title: 'Authentic Luxury', desc: 'True luxury lies in the details—thoughtful touches that create lasting memories.' },
    { icon: '🤝', title: 'Community Connection', desc: 'We support local artisans, farmers, and businesses to create authentic experiences.' }
];

const sustainability = [
    { icon: '☀️', title: 'Solar Energy', desc: '60% of resort energy from solar panels' },
    { icon: '💧', title: 'Water Conservation', desc: 'Advanced recycling and desalination systems' },
    { icon: '🐢', title: 'Marine Protection', desc: 'Active coral reef restoration program' },
    { icon: '♻️', title: 'Zero Single-Use Plastic', desc: 'Eliminated plastic from all operations' },
    { icon: '🥬', title: 'Farm-to-Table', desc: 'On-site organic garden supplies restaurants' },
    { icon: '🌳', title: 'Carbon Neutral', desc: 'Offset programs for all emissions' }
];

const awards = [
    { title: 'Forbes Five-Star', year: '2023', org: 'Forbes Travel Guide' },
    { title: 'World\'s Best Beach Resort', year: '2023', org: 'Travel + Leisure' },
    { title: 'Top 50 Resorts', year: '2022', org: 'Condé Nast Traveler' },
    { title: 'Travelers\' Choice', year: '2023', org: 'TripAdvisor' },
    { title: 'Green Globe Certified', year: '2022', org: 'Green Globe' },
    { title: 'Best Spa Resort', year: '2023', org: 'Spas of America' }
];

export default function AboutPage() {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="page-hero">
                <div className="page-hero-image">
                    <img src={resortHero} alt="Azure Bay Resort" />
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
                        <span>About</span>
                    </div>
                    <h1>Our Story</h1>
                    <p>A legacy of luxury, hospitality, and ocean-inspired living.</p>
                </motion.div>
            </section>

            {/* Story Section */}
            <section className="story-section section">
                <div className="container">
                    <div className="story-content">
                        <motion.div
                            className="story-text"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-label">Since 1998</span>
                            <h2>A Sanctuary by the Sea</h2>
                            <p className="lead">
                                Born from a dream to create a place where the rhythm of the ocean
                                sets the pace of life, Azure Bay Resort has evolved into one of
                                the world's most celebrated luxury destinations.
                            </p>
                            <p>
                                What began as a small boutique hotel has grown into an award-winning
                                resort, yet we've never lost sight of our founding principle: to offer
                                sanctuary for the soul, where every guest leaves feeling renewed.
                            </p>
                            <p>
                                Our commitment to exceptional hospitality, environmental stewardship,
                                and authentic experiences has earned us recognition from the world's
                                most prestigious travel organizations. But our greatest reward is the
                                joy we see in our guests—many of whom return year after year.
                            </p>
                        </motion.div>
                        <motion.div
                            className="story-image"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src={infinityPool} alt="Resort infinity pool" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section section bg-light">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Our Philosophy</span>
                        <h2>What We Believe</h2>
                    </motion.div>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                className="value-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="value-icon">{value.icon}</span>
                                <h3>{value.title}</h3>
                                <p>{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="timeline-section section">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Our Journey</span>
                        <h2>A Legacy of Excellence</h2>
                    </motion.div>

                    <div className="timeline">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="timeline-content">
                                    <span className="timeline-year">{item.year}</span>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sustainability Section */}
            <section className="sustainability-section section gradient-ocean">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label text-white" style={{ opacity: 0.8 }}>Our Commitment</span>
                        <h2 className="text-white">Protecting Paradise</h2>
                        <p className="text-white" style={{ opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
                            We believe luxury and sustainability go hand in hand. Our comprehensive
                            environmental program ensures the natural beauty of our home endures for generations.
                        </p>
                    </motion.div>

                    <div className="sustainability-grid">
                        {sustainability.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="sustainability-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="sust-icon">{item.icon}</span>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="awards-section section">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Recognition</span>
                        <h2>Awards & Accolades</h2>
                    </motion.div>

                    <div className="awards-grid">
                        {awards.map((award, index) => (
                            <motion.div
                                key={award.title}
                                className="award-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="award-year">{award.year}</span>
                                <h4>{award.title}</h4>
                                <p>{award.org}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section section bg-light">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Our People</span>
                        <h2>The Azure Bay Family</h2>
                        <p className="team-intro">
                            Behind every exceptional experience is a team of dedicated professionals
                            who share a passion for hospitality. From our award-winning chefs to our
                            attentive room attendants, every team member is committed to making your
                            stay extraordinary.
                        </p>
                        <div className="team-stats">
                            <div className="team-stat">
                                <span className="stat-number">350+</span>
                                <span className="stat-label">Team Members</span>
                            </div>
                            <div className="team-stat">
                                <span className="stat-number">42</span>
                                <span className="stat-label">Nationalities</span>
                            </div>
                            <div className="team-stat">
                                <span className="stat-number">85%</span>
                                <span className="stat-label">Local Employment</span>
                            </div>
                            <div className="team-stat">
                                <span className="stat-number">12</span>
                                <span className="stat-label">Avg Years Experience</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="about-cta section">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Experience Azure Bay</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto var(--space-8)' }}>
                            We invite you to discover the Azure Bay difference.
                            Your extraordinary escape awaits.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/booking" className="btn btn-primary btn-lg">
                                Book Your Stay
                            </Link>
                            <Link to="/contact" className="btn btn-outline btn-lg">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
