import React from 'react';
import Header from '../Header/Header';
import buceadorPerfil from '../../img/buceadorPerfil.jpg';
import './Profile.css';

function Profile() {
  return (
    <>
      <Header />
      <section className="profile">
        <div className="user">
          <div>
            <img className="photo_user" src={buceadorPerfil} alt="photo_user" />

            <p>Eloy Galán</p>
            <p>email@email.com</p>
          </div>
        </div>

      </section>

    </>
  );
}

export default Profile;
