import React from 'react';
import { Link } from 'react-router-dom';
import Usuarios from '../User-login/Usuario';

// import './LogBook.css';

function LogBook() {
  return (
    <>
      <div>
        hola
        <Link to="/navigation" className="DARCLASE">AL MENÚ!!!</Link>
      </div>

      <div>
        <Usuarios />
      </div>
    </>
  );
}

export default LogBook;
