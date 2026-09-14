import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src="https://www.westtechfest.com.au/brand/logos/WTF26_Wordmark_Overarching_Horizontal.svg" alt="West Tech Fest" style={{ height: '32px' }} />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="nav-links">
          <Link to="/events" className="nav-item">Program</Link>
          <Link to="/satellite-events" className="nav-item">Satellite events</Link>
          <Link to="/speakers" className="nav-item">Speakers</Link>
          <Link to="/about" className="nav-item">About</Link>
        </nav>

        <div className="actions">
          <a href="/festival-pass" className="btn-primary">Get Tickets</a>
          <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <Link to="/events" className="mobile-nav-item" onClick={toggleMenu}>Program</Link>
          <Link to="/satellite-events" className="mobile-nav-item" onClick={toggleMenu}>Satellite events</Link>
          <Link to="/speakers" className="mobile-nav-item" onClick={toggleMenu}>Speakers</Link>
          <Link to="/about" className="mobile-nav-item" onClick={toggleMenu}>About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
