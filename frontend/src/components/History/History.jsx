/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import tossa from '../../img/tossa.jpg';
import { loadImmersions, loadByLocation } from '../../redux/actions/immersionActions';
import './History.css';

export function HistoryComponent({ actions, immersionHistory }) {
  useEffect(() => {
    actions.loadImmersions();
  }, []);

  return (
    <>
      <Header />
      <div className="cards">
        {immersionHistory && immersionHistory.map((immersion) => (
          <div className="card">
            <Link to={`/logbook/${immersion.location}`} type="button" className="shadow-card" key={immersion.location}>
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
            </Link>
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
    loadImmersions: PropTypes.func.isRequired,
    loadByLocation: PropTypes.func.isRequired
  }).isRequired
};

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadImmersions, loadByLocation }, dispatch)
  };
}

export function mapStatetoProps(state) {
  return {
    immersionHistory: state.immersionReducer.immersionHistory

  };
}

export default connect(mapStatetoProps, mapDispatchToProps)(HistoryComponent);
