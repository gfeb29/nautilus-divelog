import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="portfolio">
        <h5>
          Nautilus
        </h5>
      </div>
      <div className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/">Profile</Link>
        <Link to="/">List</Link>
      </div>
    </header>
  );
}

export default Header;
