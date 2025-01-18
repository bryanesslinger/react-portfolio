import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="header">
      <div className="profile-container">
        <img
          className="profile-img"
          src="/assets/cartoon.png"
          alt="Bryan Esslinger"
        />
        <h1>Bryan Esslinger</h1>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;