import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

function immersionReducer(state = { immersionHistory: initialState.immersionHistory }, action) {
  let newImmersionHistory;
  let immersion;
  // eslint-disable-next-line no-debugger

  switch (action.type) {
    case actionTypes.LOAD_IMMERSIONS:
      return { ...state, immersionHistory: action.immersions };

    case actionTypes.CREATE_IMMERSION:
      newImmersionHistory = [...state.immersionHistory, action.immersion];
      return { ...state, immersionHistory: newImmersionHistory, immersion: action.data };

    case actionTypes.SAVE_IMMERSION:
      newImmersionHistory = [...state.immersionHistory, action.immersion];
      return { ...state, immersionHistory: newImmersionHistory, immersion: action.data };

    case actionTypes.DELETE_IMMERSION:
      return {
        immersionHistory: state.immersionHistory.filter((dive) => (
          dive.id !== action.immersion.id
        ))
      };

    case actionTypes.LOAD_DIVE:
      immersion = state.immersionHistory.find((dive) => (
        dive.location === action.immersion.location
      ));
      return {
        ...state, immersion
      };

    case actionTypes.LOAD_BY_LOCATION:
      // eslint-disable-next-line no-debugger
      debugger;
      return {
        ...state, immersion: action.immersion
      };

    default:
      return state;
  }
}

export default immersionReducer;
