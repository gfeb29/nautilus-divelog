import firebase from 'firebase';
import '../../firebase';
import actionTypes from './actionTypes';

export function loadUser() {
  return async (dispatch) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    const {
      user: { displayName, email, photoURL }
    } = await firebase.auth().signInWithPopup(provider);

    dispatch({
      type: actionTypes.USER_SING_IN,
      user: {
        displayName,
        email,
        photoURL
      }
    });
  };
}

export function logout() {
  return async (dispatch) => {
    await firebase.auth().signOut();

    dispatch({
      type: actionTypes.USER_SING_OUT
    });
  };
}
