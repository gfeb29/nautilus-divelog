import React from 'react';
import { Link } from 'react-router-dom';

// import './LogBook.css';

function LogBook() {
  return (
    <>
      <div>
        hola
        <Link to="/navigation" className="DARCLASE">AL MENÚ!!!</Link>
      </div>

      <div>
        LA PUÑETERA GRAFICA
      </div>
    </>
  );
}

export default LogBook;
