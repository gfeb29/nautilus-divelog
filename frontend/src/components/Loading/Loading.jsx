import React from 'react';
import loading from '../../img/loading.gif';
import './Loading.css';

function Loading() {
  return (
    <div className="loading-container">
      <img className="loading__img" src={loading} alt="loading" />
      <p className="loading__text">Loading...</p>
    </div>
  );
}

export default Loading;
