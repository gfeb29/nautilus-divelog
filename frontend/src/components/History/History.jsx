/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import tossa from '../../img/tossa.jpg';
import loadImmersions from '../../redux/actions/immersionActions';
import './History.css';

function History({ actions, immersionHistory }) {
  useEffect(() => {
    actions.loadImmersions();
  }, []);

  return (
    <>
      <Header />
      <div className="a">
        <Link to="/navigation" className="DARCLASE">AL MENÚ!!!</Link>
        {immersionHistory && immersionHistory.map((immersion) => (
          <div className="shadow-card">
            <img className="photo_profile" src={tossa} alt="photo_profile" />
            <div className="card">

              <h1>{immersion.location}</h1>
              <ul>
                <li>
                  <p>nº inm.</p>
                  <div><span>{immersion.immersionNumber}</span></div>
                </li>
                <li>
                  <p>Max. prof.</p>
                  <div><span>{immersion.maxDepth}</span></div>
                </li>
                <li>
                  <p>Max. time</p>
                  <div><span>{immersion.duration}</span></div>
                </li>

              </ul>

            </div>
          </div>
        ))}
      </div>

    </>
  );
}

History.propTypes = {
  immersionHistory: PropTypes.arrayOf(PropTypes.shape({
    location: PropTypes.string,
    immersionNumber: PropTypes.number,
    maxDepth: PropTypes.number,
    duration: PropTypes.number
  })).isRequired,

  actions: PropTypes.shape({
    loadImmersions: PropTypes.func.isRequired
  }).isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadImmersions }, dispatch)
  };
}

function mapStatetoProps(state) {
  return {
    immersionHistory: state.immersionReducer.immersionHistory
  };
}

export default connect(mapStatetoProps, mapDispatchToProps)(History);
