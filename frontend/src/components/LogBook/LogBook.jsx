import React from 'react';
import { Link } from 'react-router-dom';
import DiveChart from '../DiveChart/DiveChart';
import Header from '../Header/Header';
// import './LogBook.css';

function LogBook() {
  return (
    <>
      <Header />
      <div>
        hola
        <Link to="/navigation" className="DARCLASE">AL MENÚ!!!</Link>
        <DiveChart />
      </div>
    </>
  );
}

export default LogBook;
