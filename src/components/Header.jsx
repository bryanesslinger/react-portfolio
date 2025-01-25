import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="header">
      <div className="profile-container">
        <a href="/">
        <img
          className="profile-img"
          src="/assets/cartoon.png"
          alt="Bryan Esslinger"
        />
        </a>
        <h1>Bryan Esslinger</h1>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;