import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo">
            <span className="logo-icon">✨</span>
            <span className="logo-text">Luxury Events</span>
          </Link>

          <div className={`nav-links ${mobileMenu ? 'active' : ''}`}>
            <Link to="/" onClick={() => setMobileMenu(false)}>Home</Link>
            <a href="#services" onClick={() => setMobileMenu(false)}>Services</a>
            <a href="#packages" onClick={() => setMobileMenu(false)}>Packages</a>
            <a href="#gallery" onClick={() => setMobileMenu(false)}>Gallery</a>
            <a href="#testimonials" onClick={() => setMobileMenu(false)}>Testimonials</a>
            <a href="#contact" onClick={() => setMobileMenu(false)}>Contact</a>
          </div>

          <a href="tel:+919876543210" className="nav-phone">
            <Phone size={20} />
            <span>+91 98765 43210</span>
          </a>

          <button className="mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
