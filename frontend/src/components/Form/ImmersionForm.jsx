/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  loadImmersions, createImmersion, saveImmersion, deleteImmersion
} from '../../redux/actions/immersionActions';
import Header from '../Header/Header';
import './ImmersionForm.css';

// eslint-disable-next-line react/prop-types
function ImmersionForm({ actions, immersionHistory }) {
  useEffect(() => {
    actions.loadImmersions();
  }, [immersionHistory?.length]);

  // const [id] = useState('');
  // const [name, setName] = useState('');
  // const [location, setLocation] = useState('');
  // const [date, setDate] = useState('');
  // const [time, setTime] = useState('');
  // const [maxDepth, setMaxDepth] = useState('');
  // const [duration, setDuration] = useState('');
  // const [minimalTemperature, setMinimalTemperature] = useState('');
  // const [immersionNumber, setImmersionNumber] = useState('');
  // const [depthsByTime, setDepthsByTime] = useState('');
  const [failure, setFailure] = useState(false);
  const [error, setError] = useState('');
  const [edit, setEdit] = useState(false);

  const [immersionObj, setImmersion] = useState({});

  const defaultObject = {
    name: '',
    location: '',
    date: '',
    time: '',
    maxDepth: '',
    duration: '',
    minimalTemperature: '',
    immersionNumber: '',
    depthsByTime: ''
    // id
  };

  const onChangeHandler = (e) => {
    setImmersion({
      ...immersionObj,
      [e.target.name]: e.target.value
    });
  };

  const AddInfoImmersion = (e) => {
    e.preventDefault();

    if (!immersionObj.name.trim()) {
      setFailure(true);
      setError('Name is required');
      return;
    }

    if (!immersionObj.location.trim()) {
      setFailure(true);
      setError('Location is required');
      return;
    }

    if (!immersionObj.date.trim()) {
      setFailure(true);
      setError('Date is required');
      return;
    }

    if (!immersionObj.time.trim()) {
      setFailure(true);
      setError('Time is required');
      return;
    }

    if (!immersionObj.maxDepth.trim()) {
      setFailure(true);
      setError('Max. Depth is required');
      return;
    }

    if (!immersionObj.duration.trim()) {
      setFailure(true);
      setError('Duration is required');
      return;
    }

    if (!immersionObj.minimalTemperature.trim()) {
      setFailure(true);
      setError('Minimal Temperature is required');
      return;
    }

    if (!immersionObj.immersionNumber.trim()) {
      setFailure(true);
      setError('Immersion Number is required');
      return;
    }

    // const user = {
    //   id,
    //   name,
    //   location,
    //   date,
    //   time,
    //   maxDepth,
    //   duration,
    //   minimalTemperature,
    //   immersionNumber,
    //   depthsByTime
    // };
    actions.createImmersion(immersionObj);
    setImmersion({ ...defaultObject });
    // setName('');
    // setLocation('');
    // setDate('');
    // setTime('');
    // setMaxDepth('');
    // setDuration('');
    // setMinimalTemperature('');
    // setImmersionNumber('');
    // setDepthsByTime('');
    setFailure(false);
  };

  const FirstEdit = (object) => {
    setImmersion({
      ...object,
      id: object._id
    });
    setEdit(true);
  };

  const FinalEdit = (e) => {
    e.preventDefault();
    // const edited = {
    //   name,
    //   location,
    //   date,
    //   time,
    //   maxDepth,
    //   duration,
    //   minimalTemperature,
    //   immersionNumber,
    //   depthsByTime,
    //   id
    // };
    actions.saveImmersion(immersionObj);
    setEdit(false);
    setImmersion({});
    // setName('');
    // setLocation('');
    // setDate('');
    // setTime('');
    // setMaxDepth('');
    // setDuration('');
    // setMinimalTemperature('');
    // setImmersionNumber('');
  };

  return (
    <>
      <Header />
      <div className="users">
        <div className="list">
          <h2>Listado de Immersiones</h2>

          {immersionHistory && immersionHistory.map((immersion) => (
            <div key={immersion._id}>
              <ul className="immersion">
                <h4>{immersion?.location}</h4>
                <li>
                  <p>nº inm.</p>
                  <div><span>{immersion?.immersionNumber}</span></div>
                  <button onClick={() => { FirstEdit(immersion); }} className="" type="button">Editar</button>
                  <button onClick={() => { actions.deleteImmersion(immersion._id); }} className="" type="button">Borrar</button>

                </li>

              </ul>
            </div>
          ))}

        </div>
        <div className="form">
          <h2>Formulario de Immersiones</h2>
          {
            failure ? (<span>{error}</span>) : (<span />)
        }
          <form className="form-group">
            <div>
              <label htmlFor="name">Name</label>
              <input className="form-control" type="text" placeholder="Name" name="name" id="name" value={immersionObj.name} onChange={onChangeHandler} />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <input className="form-control" type="text" placeholder="Location" name="location" id="location" value={immersionObj.location} onChange={onChangeHandler} />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input className="form-control" type="date" placeholder="date" name="date" id="date" value={immersionObj.date} onChange={onChangeHandler} />
            </div>
            <div>
              <label htmlFor="time">Time</label>
              <input className="form-control" type="time" placeholder="time" name="time" id="time" value={immersionObj.time} onChange={onChangeHandler} />
            </div>
            <div>
              <label htmlFor="maxDepth">Max Depth</label>
              <input className="form-control" type="number" placeholder="maxDepth" name="maxDepth" id="maxDepth" value={immersionObj.maxDepth} onChange={onChangeHandler} />
            </div>
            <div>
              <label htmlFor="duration">Duration</label>
              <input className="form-control" type="number" placeholder="duration" name="duration" id="duration" value={immersionObj.duration} onChange={onChangeHandler} />
            </div>
            <div>
              <label htmlFor="minimalTemperature">Minimal Temperature</label>
              <input className="form-control" type="number" placeholder="minimalTemperature" name="minimalTemperature" id="minimalTemperature" value={immersionObj.minimalTemperature} onChange={onChangeHandler} />
            </div>
            <div>
              <label htmlFor="immersionNumber">Immersion Number</label>
              <input className="form-control" type="number" placeholder="immersionNumber" name="immersionNumber" id="immersionNumber" value={immersionObj.immersionNumber} onChange={onChangeHandler} />
            </div>
            {
              edit ? (
                <>
                  <button
                    onClick={(e) => { FinalEdit(e); }}
                    className="form-button"
                    type="submit"
                  >
                    Editar

                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setEdit(false);
                      setImmersion({ ...defaultObject });
                    }}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={(e) => { AddInfoImmersion(e); }}
                  className="form-button"
                  type="submit"
                >
                  Agregar

                </button>
              )
          }
          </form>
        </div>
      </div>

    </>
  );
}

ImmersionForm.protoTypes = {

  immersionHistory: PropTypes.arrayOf(PropTypes.shape({
    location: PropTypes.string,
    name: PropTypes.string
  })).isRequired,

  actions: PropTypes.shape({
    loadImmersions: PropTypes.func.isRequired,
    createImmersion: PropTypes.func.isRequired,
    saveImmersion: PropTypes.func.isRequired,
    deleteImmersion: PropTypes.func.isRequired
  }).isRequired

};

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadImmersions, createImmersion, saveImmersion, deleteImmersion
    }, dispatch)
  };
}

export function mapStatetoProps(state) {
  return {

    immersionHistory: state.immersionReducer.immersionHistory,
    newImmersion: state.immersion

  };
}

export default connect(mapStatetoProps, mapDispatchToProps)(ImmersionForm);
