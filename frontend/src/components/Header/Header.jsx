import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="portfolio">
        <h5>
          Nautilus
          <span>.</span>
        </h5>
      </div>
      <div className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
}

export default Header;
