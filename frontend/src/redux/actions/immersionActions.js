import axios from 'axios';
import actionTypes from './actionTypes';

export function loadImmersions() {
  return async (dispatch) => {
    const immersions = await axios.get('http://localhost:5000/api/v1/nautilus');

    dispatch({
      type: actionTypes.LOAD_IMMERSIONS,
      immersions: immersions.data
    });
  };
}

export function createImmersion(user) {
  // eslint-disable-next-line no-debugger
  debugger;
  return async (dispatch) => {
    const immersion = await axios.post('http://localhost:5000/api/v1/nautilus', user);

    dispatch({
      type: actionTypes.CREATE_IMMERSION,
      immersion: immersion.data
    });
  };
}
