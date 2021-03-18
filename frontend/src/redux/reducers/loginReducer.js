import actionTypes from '../actions/actionTypes';

export default function loginReducer(state = null, action) {
  switch (action.type) {
    case actionTypes.USER_SING_IN:
      return action.user;

    case actionTypes.USER_SING_OUT:
      return null;

    default:
      return state;
  }
}
