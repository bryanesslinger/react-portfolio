import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <button className="mobile-nav-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Me</Link></li>
        <li><Link to="/portfolio" className="nav-link" onClick={() => setIsMenuOpen(false)}>Portfolio</Link></li>
        <li><Link to="/experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>Experience</Link></li>
        <li><Link to="/resume" className="nav-link" onClick={() => setIsMenuOpen(false)}>Resume</Link></li>
        <li><Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;