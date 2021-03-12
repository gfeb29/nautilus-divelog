import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

function immersionReducer(state = { immersionHistory: initialState.immersionHistory }, action) {
  switch (action.type) {
    case actionTypes.LOAD_IMMERSIONS:
      // eslint-disable-next-line no-debugger
      debugger;
      return { ...state, immersionHistory: action.immersions };
    default:
      return state;
  }
}

export default immersionReducer;
