import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="principal">
      <div className="fondo">
        <div className="title">
          <h1 className="logo-title">Nautilus</h1>
          <p className="subtitle">your online scuba logbook</p>
          <Link to="/navigation" className="log-button">Log in!</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
