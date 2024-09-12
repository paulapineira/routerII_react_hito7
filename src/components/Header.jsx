import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="header-title">¡Pizzería Mamma Mía!</h1>
        <p className="header-description">¡Tenemos las mejores pizzas que podrías encontrar!</p>
        <img
          src="./img/Header.jpg" 
          alt="Pizza Header"
          className="header-image"
        />
      </div>
    </header>
  );
};

export default Header;


