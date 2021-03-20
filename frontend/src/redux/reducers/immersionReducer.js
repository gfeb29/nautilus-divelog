import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

function immersionReducer(state = { immersionHistory: initialState.immersionHistory }, action) {
  let newImmersionHistory;

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
        immersionHistory: state.immersionHistory.filter((immersion) => (
          immersion.id !== action.immersion.id
        ))
      };

    default:
      return state;
  }
}

export default immersionReducer;
