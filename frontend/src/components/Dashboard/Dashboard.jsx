import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="principal">
      <div className="fondo">
        <div className="title">
          <h1 className="logo-title">Nautilus</h1>
          <p className="subtitle">your online scuba logbook</p>
          <button type="button" className="log-button">Sing in!</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
