import '../../firebase';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutAction } from '../../redux/actions/loginActions';
import Header from '../Header/Header';
import './Profile.css';

function Profile({ user, action }) {
  const [redirectTo, setRedirectTo] = useState(false);

  useEffect(() => {
    if (!user) {
      setRedirectTo(true);
    }
  }, [user]);

  if (redirectTo) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header />
      {
      user && (
      <section className="profile">
        <div className="user">
          <div>
            <img className="photo_user" src={user.photoURL} alt={user.displayName} />

            <p>{user.displayName}</p>
            <p>{user.email}</p>
          </div>
          <button type="button" onClick={action.logoutAction}>Logout</button>

        </div>

      </section>
      )
    }

    </>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string,
    photoURL: PropTypes.string
  }).isRequired,

  action: PropTypes.shape({
    loginAction: PropTypes.func.isRequired,
    logoutAction: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps(state) {
  return {
    user: state.loginReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators({ logoutAction }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
