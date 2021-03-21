import React from 'react';
import Header from '../Header/Header';
import buceadorPerfil from '../../img/buceadorPerfil.jpg';

import './LogBook.css';
import DiveChart from '../DiveChart/DiveChart';

function LogBook() {
  return (
    <>
      <Header />
      <div className="logbook">
        <img className="photo_user" src={buceadorPerfil} alt="photo_user" />
        <h3 className="diver">Fulanito de tal</h3>
        <div>
          Immersion Number: 1
        </div>
        <div>
          Tossa de Mar
        </div>
        <div className="history">
          <ul>
            <li>
              <p>nº inm.</p>
              <span>1</span>
              <div>Tossa de Mar</div>
            </li>
            <li>
              <p>nº inm.</p>
              <span>2</span>
              <div>Lago Baikal</div>
            </li>
            <li>
              <p>nº inm.</p>
              <span>3</span>
              <div>Maldivas</div>
            </li>
            <li>
              <p>nº inm.</p>
              <span>4</span>
              <div>Isla de Coco - Costa Rica</div>
            </li>
            <li>
              <p>nº inm.</p>
              <span>5</span>
              <div>TUBBATAHA - Filipinas</div>
            </li>
            <li>
              <p>nº inm.</p>
              <span>6</span>
              <div>RAJA AMPAT - Indonesia</div>
            </li>
            <li>
              <p>nº inm.</p>
              <span>7</span>
              <div>Palau - Micronesia</div>
            </li>
            <li>
              <p>nº inm.</p>
              <span>8</span>
              <div>Sipadan - Borneo</div>
            </li>
          </ul>
        </div>
        <div>
          Date: 18/10/2020 --- Time: 10:37h
        </div>
        <div>
          Max deep: 25 meters
        </div>
        <div>
          Duration: 48 min
        </div>
        <div>
          Minimal Temperature: 17°C
        </div>
        <div>
          <DiveChart />

        </div>
      </div>
    </>
  );
}

export default LogBook;
