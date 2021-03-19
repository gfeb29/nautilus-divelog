import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

function immersionReducer(state = { immersionHistory: initialState.immersionHistory }, action) {
  let newImmersionHistory;
  // eslint-disable-next-line no-debugger
  debugger;
  switch (action.type) {
    case actionTypes.LOAD_IMMERSIONS:
      return { ...state, immersionHistory: action.immersions };

    case actionTypes.CREATE_IMMERSION:
      newImmersionHistory = [...state.immersionHistory, action.immersion];
      return { ...state, newImmersionHistory, immersion: action.data };
    default:
      return state;
  }
}

export default immersionReducer;
