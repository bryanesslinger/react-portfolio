import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-container">
          <a href="/">
            <img
              className="profile-img"
              src="/assets/new-cartoon.png"
              alt="Bryan Esslinger"
            />
          </a>
          <h1>Bryan Esslinger</h1>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;