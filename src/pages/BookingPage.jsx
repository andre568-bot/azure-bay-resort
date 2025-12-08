import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format, addDays, differenceInDays } from 'date-fns';
import { rooms } from '../data/rooms';
import { useBooking } from '../context/BookingContext';
import oceanSuite from '../assets/images/ocean_suite_1765193310941.png';
import premiumVilla from '../assets/images/premium_villa_1765193415201.png';
import './BookingPage.css';

const packages = [
    { id: 'romance', name: 'Romance Package', price: 250, desc: 'Rose petals, champagne, couples spa discount' },
    { id: 'adventure', name: 'Adventure Bundle', price: 180, desc: 'Snorkeling, kayaking, sunset cruise' },
    { id: 'wellness', name: 'Wellness Retreat', price: 320, desc: 'Daily yoga, spa treatment, healthy breakfast' },
    { id: 'dining', name: 'Gourmet Experience', price: 200, desc: 'Fine dining credits at all restaurants' }
];

export default function BookingPage() {
    const booking = useBooking();
    const [step, setStep] = useState(1);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [selectedPackages, setSelectedPackages] = useState([]);
    const [dates, setDates] = useState({
        checkIn: format(addDays(new Date(), 7), 'yyyy-MM-dd'),
        checkOut: format(addDays(new Date(), 10), 'yyyy-MM-dd')
    });
    const [guests, setGuests] = useState({ adults: 2, children: 0 });
    const [guestInfo, setGuestInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        requests: ''
    });
    const [confirmed, setConfirmed] = useState(false);

    const nights = differenceInDays(new Date(dates.checkOut), new Date(dates.checkIn));
    const roomTotal = selectedRoom ? selectedRoom.basePrice * nights : 0;
    const packagesTotal = selectedPackages.reduce((sum, pkg) => sum + pkg.price, 0);
    const subtotal = roomTotal + packagesTotal;
    const taxes = subtotal * 0.12;
    const total = subtotal + taxes;

    const togglePackage = (pkg) => {
        setSelectedPackages(prev =>
            prev.find(p => p.id === pkg.id)
                ? prev.filter(p => p.id !== pkg.id)
                : [...prev, pkg]
        );
    };

    const handleGuestChange = (e) => {
        const { name, value } = e.target;
        setGuestInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleConfirm = () => {
        // Simulate booking confirmation
        setConfirmed(true);
        setStep(4);
    };

    const getImageForRoom = (room) => {
        if (room.id === 'ocean-view-suite') return oceanSuite;
        if (room.id === 'beachfront-villa') return premiumVilla;
        return room.images[0];
    };

    return (
        <div className="booking-page">
            {/* Header */}
            <section className="booking-header">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Link to="/" className="back-link">← Back to Home</Link>
                        <h1>Book Your Stay</h1>
                        <p>Complete your reservation in a few easy steps</p>
                    </motion.div>

                    {/* Progress Steps */}
                    <div className="booking-progress">
                        {['Dates & Room', 'Enhancements', 'Guest Details', 'Confirmation'].map((label, index) => (
                            <div
                                key={label}
                                className={`progress-step ${step > index + 1 ? 'completed' : ''} ${step === index + 1 ? 'active' : ''}`}
                            >
                                <div className="step-number">{step > index + 1 ? '✓' : index + 1}</div>
                                <span className="step-label">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="booking-content">
                <div className="container">
                    <div className="booking-grid">
                        {/* Main Content */}
                        <div className="booking-main">
                            {/* Step 1: Dates & Room Selection */}
                            {step === 1 && (
                                <motion.div
                                    className="booking-step"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    <h2>Select Your Dates</h2>

                                    <div className="date-selection">
                                        <div className="date-inputs">
                                            <div className="date-field">
                                                <label>Check-in Date</label>
                                                <input
                                                    type="date"
                                                    value={dates.checkIn}
                                                    min={format(new Date(), 'yyyy-MM-dd')}
                                                    onChange={(e) => setDates(prev => ({ ...prev, checkIn: e.target.value }))}
                                                />
                                            </div>
                                            <div className="date-field">
                                                <label>Check-out Date</label>
                                                <input
                                                    type="date"
                                                    value={dates.checkOut}
                                                    min={dates.checkIn}
                                                    onChange={(e) => setDates(prev => ({ ...prev, checkOut: e.target.value }))}
                                                />
                                            </div>
                                            <div className="guest-field">
                                                <label>Adults</label>
                                                <select
                                                    value={guests.adults}
                                                    onChange={(e) => setGuests(prev => ({ ...prev, adults: parseInt(e.target.value) }))}
                                                >
                                                    {[1, 2, 3, 4, 5, 6].map(n => (
                                                        <option key={n} value={n}>{n} Adult{n > 1 ? 's' : ''}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="guest-field">
                                                <label>Children</label>
                                                <select
                                                    value={guests.children}
                                                    onChange={(e) => setGuests(prev => ({ ...prev, children: parseInt(e.target.value) }))}
                                                >
                                                    {[0, 1, 2, 3, 4].map(n => (
                                                        <option key={n} value={n}>{n} Child{n !== 1 ? 'ren' : ''}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="stay-summary">
                                            <span className="nights-count">{nights} Night{nights !== 1 ? 's' : ''}</span>
                                            <span className="date-range">
                                                {format(new Date(dates.checkIn), 'MMM d')} - {format(new Date(dates.checkOut), 'MMM d, yyyy')}
                                            </span>
                                        </div>
                                    </div>

                                    <h2 className="section-title">Choose Your Room</h2>

                                    <div className="room-selection">
                                        {rooms.map((room) => (
                                            <div
                                                key={room.id}
                                                className={`room-option ${selectedRoom?.id === room.id ? 'selected' : ''}`}
                                                onClick={() => setSelectedRoom(room)}
                                            >
                                                <div className="room-option-image">
                                                    <img src={getImageForRoom(room)} alt={room.name} />
                                                    {room.featured && <span className="featured-tag">Recommended</span>}
                                                </div>
                                                <div className="room-option-info">
                                                    <div className="room-option-header">
                                                        <div>
                                                            <span className="room-category">{room.category}</span>
                                                            <h3>{room.name}</h3>
                                                        </div>
                                                        <div className="room-option-price">
                                                            <span className="price">${room.basePrice}</span>
                                                            <span className="per-night">/ night</span>
                                                        </div>
                                                    </div>
                                                    <p>{room.shortDescription}</p>
                                                    <div className="room-specs">
                                                        <span>📐 {room.size}</span>
                                                        <span>👥 Up to {room.maxGuests}</span>
                                                        <span>🛏️ {room.bedType}</span>
                                                        <span>🌅 {room.view}</span>
                                                    </div>
                                                    <div className="room-features-preview">
                                                        {room.features.slice(0, 4).map((f, i) => (
                                                            <span key={i} className="feature-tag">{f}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="room-select-indicator">
                                                    {selectedRoom?.id === room.id ? '✓ Selected' : 'Select'}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="step-actions">
                                        <button
                                            className="btn btn-gold btn-lg"
                                            disabled={!selectedRoom}
                                            onClick={() => setStep(2)}
                                        >
                                            Continue to Enhancements
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 2: Packages & Enhancements */}
                            {step === 2 && (
                                <motion.div
                                    className="booking-step"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    <h2>Enhance Your Stay</h2>
                                    <p className="step-desc">Add special packages to make your experience even more memorable. These are optional.</p>

                                    <div className="packages-grid">
                                        {packages.map((pkg) => (
                                            <div
                                                key={pkg.id}
                                                className={`package-option ${selectedPackages.find(p => p.id === pkg.id) ? 'selected' : ''}`}
                                                onClick={() => togglePackage(pkg)}
                                            >
                                                <div className="package-info">
                                                    <h4>{pkg.name}</h4>
                                                    <p>{pkg.desc}</p>
                                                </div>
                                                <div className="package-price">
                                                    <span className="price">+${pkg.price}</span>
                                                    <span className="package-check">
                                                        {selectedPackages.find(p => p.id === pkg.id) ? '✓' : '+'}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="special-requests">
                                        <h3>Special Requests</h3>
                                        <textarea
                                            placeholder="Any special requests or occasions we should know about? (Anniversary, birthday, dietary requirements, etc.)"
                                            rows="4"
                                        ></textarea>
                                    </div>

                                    <div className="step-actions">
                                        <button className="btn btn-outline" onClick={() => setStep(1)}>
                                            ← Back
                                        </button>
                                        <button className="btn btn-gold btn-lg" onClick={() => setStep(3)}>
                                            Continue to Guest Details
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Guest Details */}
                            {step === 3 && (
                                <motion.div
                                    className="booking-step"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    <h2>Guest Information</h2>
                                    <p className="step-desc">Please provide the primary guest details for the reservation.</p>

                                    <form className="guest-form">
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label>First Name *</label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={guestInfo.firstName}
                                                    onChange={handleGuestChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Last Name *</label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={guestInfo.lastName}
                                                    onChange={handleGuestChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label>Email Address *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={guestInfo.email}
                                                    onChange={handleGuestChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Phone Number *</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={guestInfo.phone}
                                                    onChange={handleGuestChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Country *</label>
                                            <select
                                                name="country"
                                                value={guestInfo.country}
                                                onChange={handleGuestChange}
                                                required
                                            >
                                                <option value="">Select Country</option>
                                                <option value="US">United States</option>
                                                <option value="UK">United Kingdom</option>
                                                <option value="CA">Canada</option>
                                                <option value="AU">Australia</option>
                                                <option value="DE">Germany</option>
                                                <option value="FR">France</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div className="arrival-info">
                                            <h3>Arrival Information</h3>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label>Estimated Arrival Time</label>
                                                    <select>
                                                        <option>Before 2:00 PM</option>
                                                        <option>2:00 PM - 4:00 PM</option>
                                                        <option>4:00 PM - 6:00 PM</option>
                                                        <option>6:00 PM - 8:00 PM</option>
                                                        <option>After 8:00 PM</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>Airport Transfer</label>
                                                    <select>
                                                        <option value="no">Not needed</option>
                                                        <option value="arrival">Arrival only (+$80)</option>
                                                        <option value="departure">Departure only (+$80)</option>
                                                        <option value="both">Round trip (+$150)</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="policies">
                                            <label className="checkbox-label">
                                                <input type="checkbox" required />
                                                <span>I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Cancellation Policy</a></span>
                                            </label>
                                            <label className="checkbox-label">
                                                <input type="checkbox" />
                                                <span>Subscribe to receive exclusive offers and updates</span>
                                            </label>
                                        </div>
                                    </form>

                                    <div className="step-actions">
                                        <button className="btn btn-outline" onClick={() => setStep(2)}>
                                            ← Back
                                        </button>
                                        <button
                                            className="btn btn-gold btn-lg"
                                            onClick={handleConfirm}
                                            disabled={!guestInfo.firstName || !guestInfo.email}
                                        >
                                            Confirm Reservation
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 4: Confirmation */}
                            {step === 4 && confirmed && (
                                <motion.div
                                    className="booking-step confirmation-step"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <div className="confirmation-header">
                                        <div className="success-icon">✓</div>
                                        <h2>Reservation Confirmed!</h2>
                                        <p>Your booking has been successfully completed.</p>
                                    </div>

                                    <div className="confirmation-details">
                                        <div className="confirmation-number">
                                            <span className="label">Confirmation Number</span>
                                            <span className="number">ABR-2024-{Math.random().toString(36).substr(2, 8).toUpperCase()}</span>
                                        </div>

                                        <div className="confirmation-summary">
                                            <div className="summary-item">
                                                <span className="label">Room</span>
                                                <span className="value">{selectedRoom?.name}</span>
                                            </div>
                                            <div className="summary-item">
                                                <span className="label">Dates</span>
                                                <span className="value">
                                                    {format(new Date(dates.checkIn), 'MMM d')} - {format(new Date(dates.checkOut), 'MMM d, yyyy')}
                                                </span>
                                            </div>
                                            <div className="summary-item">
                                                <span className="label">Guests</span>
                                                <span className="value">{guests.adults} Adults, {guests.children} Children</span>
                                            </div>
                                            <div className="summary-item total">
                                                <span className="label">Total</span>
                                                <span className="value">${total.toFixed(2)}</span>
                                            </div>
                                        </div>

                                        <p className="confirmation-note">
                                            A confirmation email has been sent to <strong>{guestInfo.email || 'your email'}</strong>.
                                            Please save your confirmation number for reference.
                                        </p>

                                        <div className="confirmation-actions">
                                            <button className="btn btn-primary" onClick={() => window.print()}>
                                                Print Confirmation
                                            </button>
                                            <Link to="/" className="btn btn-outline">
                                                Return to Homepage
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Sidebar - Booking Summary */}
                        {step < 4 && (
                            <div className="booking-sidebar">
                                <div className="summary-card">
                                    <h3>Booking Summary</h3>

                                    {selectedRoom && (
                                        <div className="summary-room">
                                            <img src={getImageForRoom(selectedRoom)} alt={selectedRoom.name} />
                                            <div className="summary-room-info">
                                                <h4>{selectedRoom.name}</h4>
                                                <p>{selectedRoom.view}</p>
                                            </div>
                                        </div>
                                    )}

                                    <div className="summary-dates">
                                        <div className="date-item">
                                            <span className="label">Check-in</span>
                                            <span className="value">{format(new Date(dates.checkIn), 'EEE, MMM d, yyyy')}</span>
                                            <span className="time">From 3:00 PM</span>
                                        </div>
                                        <div className="date-item">
                                            <span className="label">Check-out</span>
                                            <span className="value">{format(new Date(dates.checkOut), 'EEE, MMM d, yyyy')}</span>
                                            <span className="time">Until 11:00 AM</span>
                                        </div>
                                    </div>

                                    <div className="summary-guests">
                                        <span>{guests.adults} Adult{guests.adults > 1 ? 's' : ''}</span>
                                        {guests.children > 0 && <span>, {guests.children} Child{guests.children > 1 ? 'ren' : ''}</span>}
                                        <span className="nights">{nights} Night{nights > 1 ? 's' : ''}</span>
                                    </div>

                                    <div className="summary-breakdown">
                                        {selectedRoom && (
                                            <div className="breakdown-item">
                                                <span>{selectedRoom.name} × {nights} nights</span>
                                                <span>${roomTotal.toFixed(2)}</span>
                                            </div>
                                        )}
                                        {selectedPackages.map(pkg => (
                                            <div key={pkg.id} className="breakdown-item">
                                                <span>{pkg.name}</span>
                                                <span>${pkg.price.toFixed(2)}</span>
                                            </div>
                                        ))}
                                        <div className="breakdown-item subtotal">
                                            <span>Subtotal</span>
                                            <span>${subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="breakdown-item">
                                            <span>Taxes & Fees (12%)</span>
                                            <span>${taxes.toFixed(2)}</span>
                                        </div>
                                        <div className="breakdown-item total">
                                            <span>Total</span>
                                            <span>${total.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <div className="direct-booking-benefits">
                                        <h4>✨ Direct Booking Benefits</h4>
                                        <ul>
                                            <li>✓ Best Rate Guarantee</li>
                                            <li>✓ Complimentary Room Upgrade*</li>
                                            <li>✓ Welcome Amenity</li>
                                            <li>✓ Flexible Cancellation</li>
                                        </ul>
                                        <p className="note">*Subject to availability</p>
                                    </div>
                                </div>

                                <div className="help-card">
                                    <h4>Need Assistance?</h4>
                                    <p>Our reservations team is available 24/7</p>
                                    <a href="tel:+15551234567" className="help-phone">📞 +1 (555) 123-4567</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
