import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import tossa from '../../img/tossa.jpg';
import './History.css';

function History() {
  return (
    <>
      <Header />
      <div className="a">

        <Link to="/navigation" className="DARCLASE">AL MENÚ!!!</Link>
        <div className="shadow-card">
          <img className="photo_profile" src={tossa} alt="photo_profile" />
          <div className="card">

            <h1>Tossa de Mar</h1>
            <ul>
              <li>
                <p>nº inm.</p>
                <div><span>20</span></div>
              </li>
              <li>
                <p>Max. prof.</p>
                <div><span>20</span></div>
              </li>
              <li>
                <p>Max. time</p>
                <div><span>20</span></div>
              </li>

            </ul>

          </div>
        </div>
      </div>

    </>
  );
}

export default History;
