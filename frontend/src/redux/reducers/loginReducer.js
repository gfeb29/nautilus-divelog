import actionTypes from '../actions/actionTypes';

export default function loginReducer(state = null, action) {
  switch (action.type) {
    case actionTypes.USER_SIGN_IN:
      return action.user;

    case actionTypes.USER_SIGN_OUT:
      return null;

    default:
      return state;
  }
}
