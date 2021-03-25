import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { loadImmersions, loadDive, loadByLocation } from '../../redux/actions/immersionActions';
import Header from '../Header/Header';
import buceadorPerfil from '../../img/buceadorPerfil.jpg';
import DiveChart from '../DiveChart/DiveChart';
import './LogBook.css';

function LogBook({ actions, immersionHistory, immersion }) {
  const { locationId } = useParams();

  useEffect(() => {
    actions.loadImmersions();
  }, [immersionHistory?.length]);

  useEffect(() => {
    if (locationId) {
      actions.loadByLocation(locationId);
    } else if (immersionHistory) {
      actions.loadDive(immersionHistory[0]);
    }
  }, [immersionHistory]);

  return (
    <>
      <Header />
      <div className="logbook">
        <div>
          <div className="history-box">
            <div className="onethird photo_box">
              <img className="photo_user" src={buceadorPerfil} alt="photo_user" />
            </div>
            <div className="onethird selected-immersion">
              <h3>Dive info</h3>
              <br />
              <div className="diver">
                <b>Diver: </b>
                {(immersion?.name)}
              </div>
              <div>
                <b>Immersion Number:</b>
                {' '}
                {(immersion?.immersionNumber)}
              </div>
              <div>
                <b>Location:</b>
                {' '}
                {(immersion?.location)}
              </div>
              <div>
                <b>Date:</b>
                {' '}
                {(immersion?.date)}
                {' '}
                <b>--- Time:</b>
                {' '}
                {(immersion?.time)}
                h
              </div>
              <div>
                <b>Max depth:</b>
                {' '}
                {(immersion?.maxDepth)}
                {' '}
                meters
              </div>
              <div>
                <b>Duration:</b>
                {' '}
                {(immersion?.duration)}
                {' '}
                min.
              </div>
              <div>
                <b>Minimal Temperature:</b>
                {' '}
                {(immersion?.minimalTemperature)}
                °C
              </div>
            </div>
            <div className="onethird history">
              <h3 className="immersions-title">Immersions</h3>
              {immersionHistory && immersionHistory.map((selectedImmersion, index) => (
                <>
                  <div className="immersion" role="button" tabIndex={index} aria-hidden="true" onClick={() => { actions.loadDive(selectedImmersion); }}>
                    <h4>{selectedImmersion?.location}</h4>
                    <div>
                      nº inm.
                      {selectedImmersion?.immersionNumber}
                    </div>
                    bla
                  </div>
                </>

              ))}
            </div>
          </div>
          <div className="logbook-chart">
            <DiveChart />
          </div>
        </div>
      </div>
    </>
  );
}

LogBook.propTypes = {
  immersionHistory: PropTypes.arrayOf(PropTypes.shape({
    location: PropTypes.string,
    name: PropTypes.string
  })).isRequired,

  immersion: PropTypes.arrayOf(PropTypes.objectOf({
  })).isRequired,

  actions: PropTypes.shape({
    loadImmersions: PropTypes.func.isRequired,
    loadDive: PropTypes.func.isRequired,
    loadByLocation: PropTypes.func.isRequired
  }).isRequired
};

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadImmersions,
      loadDive,
      loadByLocation
    }, dispatch)
  };
}

export function mapStatetoProps(state) {
  return {
    immersionHistory: state.immersionReducer.immersionHistory,
    immersion: state.immersionReducer.immersion
  };
}

export default connect(mapStatetoProps, mapDispatchToProps)(LogBook);
