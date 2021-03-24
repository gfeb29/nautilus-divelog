import '../../firebase';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction } from '../../redux/actions/loginActions';
import './Dashboard.css';

function Dashboard({ user, action }) {
  const [redirectTo, setRedirectTo] = useState(false);

  useEffect(() => {
    if (user) {
      setRedirectTo(true);
    }
  }, [user]);

  if (redirectTo) {
    return <Redirect to="/navigation" />;
  }
  return (
    <div className="principal">
      <div className="fondo">
        <div className="title">
          <h1 className="logo-title">Nautilus</h1>
          <p className="subtitle">your online scuba logbook</p>
          {!user && (
            <button type="button" onClick={action.loginAction} className="log-button">Log in!</button>
          )}
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string,
    photoURL: PropTypes.string
  }).isRequired,

  action: PropTypes.shape({
    loginAction: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps(state) {
  return {
    user: state.loginReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators({ loginAction }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
