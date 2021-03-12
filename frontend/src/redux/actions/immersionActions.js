import axios from 'axios';
import actionTypes from './actionTypes';

function loadImmersions() {
  return async (dispatch) => {
    const immersions = await axios.get('http://localhost:5000/api/v1/nautilus');

    dispatch({
      type: actionTypes.LOAD_IMMERSIONS,
      immersions: immersions.data
    });
  };
}

export default loadImmersions;
