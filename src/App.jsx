import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { BookingProvider } from './context/BookingContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AccommodationsPage from './pages/AccommodationsPage';
import DiningPage from './pages/DiningPage';
import SpaPage from './pages/SpaPage';
import ActivitiesPage from './pages/ActivitiesPage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BookingProvider>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/accommodations" element={<AccommodationsPage />} />
              <Route path="/accommodations/:roomId" element={<AccommodationsPage />} />
              <Route path="/dining" element={<DiningPage />} />
              <Route path="/spa" element={<SpaPage />} />
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/booking" element={<BookingPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;
