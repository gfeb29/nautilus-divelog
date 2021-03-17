import React, { useState } from 'react';
import './Usuarios.css';

function Usuarios() {
  const [name, setName] = useState('');
  const [immersion, setImmersion] = useState('');
  const [list, setList] = useState([]);
  const [failure, setfailure] = useState(false);
  const [error, setError] = useState('');
  const [edit, setEdit] = useState(false);

  const AddInfoImmersion = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setfailure(true);
      setError('Name is required');
      return;
    }

    if (!immersion.trim()) {
      setfailure(true);
      setError('Immersion is required');
      return;
    }

    const user = {
      name,
      immersion
    };
    setList([...list, user]);
    setName('');
    setImmersion('');
    setfailure(false);
  };

  // Borrdo "" filtra y devuelve pero no elimina( en el state si que lo elimina)
  // eslint-disable-next-line no-shadow
  const DeleteImmersion = (name) => {
    const filtro = list.filter((item) => item.name !== name);
    setList(filtro);
  };

  const FirstEdit = (object) => {
    setName(object.name);
    setImmersion(object.immersion);
    setEdit(true);
  };

  const FinalEdit = (e) => {
    e.preventDefault();
    const edited = list.map((item) => (item.name === name ? { name, immersion } : item));
    setList(edited);
    setEdit(false);
    setName('');
    setImmersion('');
  };

  return (
    <div className="users">
      <div className="list">
        <h2>Listado de Usuarios</h2>
        <ul>
          {
              list.map((info) => (
                <li>
                  {`Name: ${info.name}
                  Immersion: ${info.immersion}`}
                  <button onClick={() => { FirstEdit(info); }} className="" type="button">Editar</button>
                  <button onClick={() => { DeleteImmersion(info.name); }} className="" type="button">Borrar</button>

                </li>
              ))
          }
        </ul>
      </div>
      <div className="form">
        <h2>Formulario de Usuarios o immersiones</h2>
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
            onChange={(e) => { setImmersion(e.target.value); }}
            className="form-control"
            type="text"
            placeholder="immersion"
            value={immersion}
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

export default Usuarios;
