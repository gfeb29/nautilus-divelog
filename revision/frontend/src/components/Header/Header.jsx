import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="portfolio">
        <h5>
          <Link id="logo" to="/navigation">Nautilus</Link>
        </h5>
      </div>
      <div className="nav-bar">
        <Link to="/profile">Profile</Link>

      </div>
    </header>
  );
}

export default Header;
