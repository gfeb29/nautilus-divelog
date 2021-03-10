import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
// import './History.css';

function History() {
  return (
    <>
      <Header />
      <div>
        hola
        <Link to="/navigation" className="DARCLASE">AL MENÚ!!!</Link>

      </div>
    </>
  );
}

export default History;
