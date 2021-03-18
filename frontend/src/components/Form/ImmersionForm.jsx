import React, { useState } from 'react';
import './ImmersionForm.css';

function ImmersionFrom() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [maxDepth, setMaxDepth] = useState('');
  const [duration, setDuration] = useState('');
  const [minimalTemperature, setMinimalTemperature] = useState('');
  const [immersionNumber, setImmersionNumber] = useState('');
  const [depthsByTime, setDepthsByTime] = useState('');
  const [list, setList] = useState([]);
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
    setList([...list, user]);
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
  const DeleteImmersion = (name) => {
    const filtro = list.filter((item) => item.name !== name);
    setList(filtro);
  };

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

    const edited = list.map((item) => (item.name === name ? {
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
    setList(edited);
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
        <ul>
          {
              list.map((info) => (
                <li>
                  {`Name: ${info.name}
                  Immersion: ${info.location}`}
                  <button onClick={() => { FirstEdit(info); }} className="" type="button">Editar</button>
                  <button onClick={() => { DeleteImmersion(info.name); }} className="" type="button">Borrar</button>

                </li>
              ))
          }
        </ul>
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
            type="text"
            placeholder="date"
            value={date}
          />
          <input
            onChange={(e) => { setTime(e.target.value); }}
            className="form-control"
            type="text"
            placeholder="Time"
            value={time}
          />
          <input
            onChange={(e) => { setMaxDepth(e.target.value); }}
            className="form-control"
            type="text"
            placeholder="Max. depth"
            value={maxDepth}
          />
          <input
            onChange={(e) => { setDuration(e.target.value); }}
            className="form-control"
            type="text"
            placeholder="Duration"
            value={duration}
          />
          <input
            onChange={(e) => { setMinimalTemperature(e.target.value); }}
            className="form-control"
            type="text"
            placeholder="Minimal Temperature"
            value={minimalTemperature}
          />
          <input
            onChange={(e) => { setImmersionNumber(e.target.value); }}
            className="form-control"
            type="text"
            placeholder="Immersion Number"
            value={immersionNumber}
          />
          <input
            onChange={(e) => { setDepthsByTime(e.target.value); }}
            className="form-control"
            type="text"
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

export default ImmersionFrom;
