import React from 'react';
import { Link } from 'react-router-dom';
import ImmersionForm from '../Form/ImmersionForm';

// import './LogBook.css';

function LogBook() {
  return (
    <>
      <div>
        hola
        <Link to="/navigation" className="DARCLASE">AL MENÚ!!!</Link>
      </div>

      <div>
        <ImmersionForm />
      </div>
    </>
  );
}

export default LogBook;
