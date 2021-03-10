import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
// import './LogBook.css';

function LogBook() {
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

export default LogBook;
