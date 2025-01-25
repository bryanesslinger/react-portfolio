import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li><Link to="/about" className="nav-link">About Me</Link></li>
        <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
        <li><Link to="/experience" className="nav-link">Experience</Link></li>
        <li><Link to="/resume" className="nav-link">Resume</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;