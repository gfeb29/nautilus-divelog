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
  // const { locationId } = useParams(immersion);
  // console.log(useParams());
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

    // if (immersionHistory) {
    //   actions.loadDive(immersionHistory[0]);
    // }
  }, [immersionHistory]);

  // if (locationId) {
  //   useEffect(() => {
  //     actions.loadDive(locationId);
  //   }, [immersionHistory]);
  // }

  return (
    <>
      <Header />
      <div className="logbook">
        <div>
          <div className="history-box">
            <img className="photo_user" src={buceadorPerfil} alt="photo_user" />
            <span>{locationId}</span>
            <div className="selected-immersion">
              <h3 className="diver">{(immersion?.name)}</h3>
              <div>
                Immersion Number:
                {' '}
                {(immersion?.immersionNumber)}
              </div>
              <div>
                Location:
                {' '}
                {(immersion?.location)}
              </div>
              <div>
                Date:
                {' '}
                {(immersion?.date)}
                {' '}
                --- Time:
                {' '}
                {(immersion?.time)}
                h
              </div>
              <div>
                Max deep:
                {' '}
                {(immersion?.maxDepth)}
                {' '}
                meters
              </div>
              <div>
                Duration:
                {' '}
                {(immersion?.duration)}
                {' '}
                min.
              </div>
              <div>
                Minimal Temperature:
                {' '}
                {(immersion?.minimalTemperature)}
                °C
              </div>
            </div>
            <div className="history">
              <h3 className="immersions-title">Immersions</h3>
              {immersionHistory && immersionHistory.map((selectedImmersion) => (
                <div className="immersion" key={Math.random()}>
                  <button type="button" onClick={() => { actions.loadDive(selectedImmersion); }}>
                    <ul>
                      <h4>{selectedImmersion?.location}</h4>
                      <li>
                        <p>nº inm.</p>
                        <div>{selectedImmersion?.immersionNumber}</div>
                      </li>
                    </ul>
                  </button>

                </div>
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
