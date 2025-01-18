import React from 'react';
import { FaLinkedin, FaGithub, FaSpotify } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p>2025 Bryan Esslinger. All Rights Reserved.</p>
      <div className="social-links">
        <a
          href="linkedin.com/in/bryanesslinger/"
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
      </div>
    </footer>
  );
};

export default Footer;