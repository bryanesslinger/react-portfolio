import React from 'react';
import { FaLinkedin, FaGithub, FaSpotify, FaFilm } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {

  const scrollToTop = () => {
    const headerHeight = document.querySelector('.header')?.offsetHeight || 0; // Get the height of the navigation bar (header)
    window.scrollTo({ top: headerHeight, behavior: 'smooth' }); // Smooth scroll to the top
  };


  return (
    <footer className="footer">
      <a href="/">
        <img
          className="footer-img"
          src="/assets/new-cartoon.png"
          alt="Bryan Esslinger"
        />
        </a>
      <a href="mailto:bryanessl@gmail.com">bryanessl@gmail.com</a>
      <div className="social-links">
        <a
          href="https://linkedin.com/in/bryanesslinger/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/bryanesslinger"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://open.spotify.com/user/bmorebry?si=95e50a9eef8f4157"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaSpotify size={24} />
        </a>
        <a
          href="https://letterboxd.com/bmorebry/films/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaFilm size={24} />
        </a>
      </div>
      <nav className="navigation">
      <ul className="nav-list">
        <li><Link to="/about" className="footer-link" onClick={() => {scrollToTop(); }}>About Me</Link></li>
        <li><Link to="/portfolio" className="footer-link" onClick={() => {scrollToTop(); }}>Portfolio</Link></li>
        <li><Link to="/experience" className="footer-link" onClick={() => {scrollToTop(); }}>Experience</Link></li>
        <li><Link to="/resume" className="footer-link" onClick={() => {scrollToTop(); }}>Resume</Link></li>
        <li><Link to="/contact" className="footer-link" onClick={() => {scrollToTop(); }}>Contact</Link></li>
      </ul>
    </nav>
      <p>Built by Bryan | 2025</p>
    </footer>
  );
};

export default Footer;