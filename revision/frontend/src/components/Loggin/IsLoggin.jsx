import '../../firebase';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction, logoutAction } from '../../redux/actions/loginActions';

function IsLoggin({ user, action }) {
  return (
    <div>
      <button type="button" onClick={action.loginAction}>Log in</button>
      <button type="button" onClick={action.logoutAction}>Logout</button>
      <p>
        user is logged:
        {' '}
        {`${!!user}`}
      </p>

      {
                user && (
                <div>
                  <p>
                    name:
                    {' '}
                    {user.displayName}
                  </p>
                  <p>
                    mail:
                    {' '}
                    {user.email}
                  </p>
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
                )
            }

    </div>
  );
}

IsLoggin.propTypes = {
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
    action: bindActionCreators({ loginAction, logoutAction }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IsLoggin);
