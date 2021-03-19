/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { loadImmersions, createImmersion, saveImmersion } from '../../redux/actions/immersionActions';
import './ImmersionForm.css';

// eslint-disable-next-line react/prop-types
function ImmersionForm({ actions, immersionHistory }) {
  useEffect(() => {
    actions.loadImmersions();
  }, [immersionHistory?.length]);

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [maxDepth, setMaxDepth] = useState('');
  const [duration, setDuration] = useState('');
  const [minimalTemperature, setMinimalTemperature] = useState('');
  const [immersionNumber, setImmersionNumber] = useState('');
  const [depthsByTime, setDepthsByTime] = useState('');
  const [failure, setFailure] = useState(false);
  const [error, setError] = useState('');
  const [edit, setEdit] = useState(false);

  const AddInfoImmersion = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setFailure(true);
      setError('Name is required');
      return;
    }

    if (!location.trim()) {
      setFailure(true);
      setError('Location is required');
      return;
    }

    if (!date.trim()) {
      setFailure(true);
      setError('Date is required');
      return;
    }

    if (!time.trim()) {
      setFailure(true);
      setError('Time is required');
      return;
    }

    if (!maxDepth.trim()) {
      setFailure(true);
      setError('Max. Depth is required');
      return;
    }

    if (!duration.trim()) {
      setFailure(true);
      setError('Duration is required');
      return;
    }

    if (!minimalTemperature.trim()) {
      setFailure(true);
      setError('Minimal Temperature is required');
      return;
    }

    if (!immersionNumber.trim()) {
      setFailure(true);
      setError('Immersion Number is required');
      return;
    }

    const user = {
      name,
      location,
      date,
      time,
      maxDepth,
      duration,
      minimalTemperature,
      immersionNumber,
      depthsByTime
    };
    actions.createImmersion(user);
    setName('');
    setLocation('');
    setDate('');
    setTime('');
    setMaxDepth('');
    setDuration('');
    setMinimalTemperature('');
    setImmersionNumber('');
    setDepthsByTime('');
    setFailure(false);
  };

  // Borrdo "" filtra y devuelve pero no elimina( en el state si que lo elimina)
  // eslint-disable-next-line no-shadow
  // const DeleteImmersion = (name) => {
  //   const filtro = immersionHistory.filter((item) => item.name !== name);
  // };

  const FirstEdit = (object) => {
    setName(object.name);
    setLocation(object.location);
    setDate(object.date);
    setTime(object.time);
    setMaxDepth(object.maxDepth);
    setDuration(object.duration);
    setMinimalTemperature(object.minimalTemperature);
    setImmersionNumber(object.immersionNumber);
    setEdit(true);
  };

  const FinalEdit = (e) => {
    e.preventDefault();

    const edited = immersionHistory.map((item) => (item.name === name ? {
      name,
      location,
      date,
      time,
      maxDepth,
      duration,
      minimalTemperature,
      immersionNumber,
      depthsByTime
    } : item));
    actions.saveImmersion(edited);
    // setList(edited);
    setEdit(false);
    setName('');
    setLocation('');
    setDate('');
    setTime('');
    setMaxDepth('');
    setDuration('');
    setMinimalTemperature('');
    setImmersionNumber('');
  };

  return (
    <div className="users">
      <div className="list">
        <h2>Listado de Immersiones</h2>

        {immersionHistory && immersionHistory.map((immersion) => (
          <div key={Math.random()}>
            <ul className="immersion">
              <h4>{immersion.location}</h4>
              <li>
                <p>nº inm.</p>
                <div><span>{immersion.immersionNumber}</span></div>
                <button onClick={() => { FirstEdit(immersion); }} className="" type="button">Editar</button>
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
          <input
            onChange={(e) => { setName(e.target.value); }}
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
          />
          <input
            onChange={(e) => { setLocation(e.target.value); }}
            className="form-control"
            type="text"
            placeholder="Location"
            value={location}
          />
          <input
            onChange={(e) => { setDate(e.target.value); }}
            className="form-control"
            type="number"
            placeholder="date"
            value={date}
          />
          <input
            onChange={(e) => { setTime(e.target.value); }}
            className="form-control"
            type="number"
            placeholder="Time"
            value={time}
          />
          <input
            onChange={(e) => { setMaxDepth(e.target.value); }}
            className="form-control"
            type="number"
            placeholder="Max. depth"
            value={maxDepth}
          />
          <input
            onChange={(e) => { setDuration(e.target.value); }}
            className="form-control"
            type="number"
            placeholder="Duration"
            value={duration}
          />
          <input
            onChange={(e) => { setMinimalTemperature(e.target.value); }}
            className="form-control"
            type="number"
            placeholder="Minimal Temperature"
            value={minimalTemperature}
          />
          <input
            onChange={(e) => { setImmersionNumber(e.target.value); }}
            className="form-control"
            type="number"
            placeholder="Immersion Number"
            value={immersionNumber}
          />
          <input
            onChange={(e) => { setDepthsByTime(e.target.value); }}
            className="form-control"
            type="number"
            placeholder="Depths by time"
            value={depthsByTime}
          />
          {
              edit ? (
                <button
                  onClick={(e) => { FinalEdit(e); }}
                  className="form-button"
                  type="submit"
                >
                  Editar

                </button>
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
    saveImmersion: PropTypes.func.isRequired
  }).isRequired

};

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadImmersions, createImmersion, saveImmersion }, dispatch)
  };
}

export function mapStatetoProps(state) {
  return {

    immersionHistory: state.immersionReducer.immersionHistory,
    newImmersion: state.immersion

  };
}

export default connect(mapStatetoProps, mapDispatchToProps)(ImmersionForm);
