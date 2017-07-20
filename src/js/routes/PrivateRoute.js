import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

/**
 *
 * @param {*} param
 * @return {route}
 */
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (authed.authed === true
      ? <Component {...props} name = {authed.user} />
      : <Redirect to= {{ pathname: '/', state: { from: props.location } }} />)}
    />
  );
};

PrivateRoute.PropTypes = {
  component: {
    Component: PropTypes.func,
    authed: PropTypes.bool,
  },
  location: {
    state: PropTypes.bool,
  }
};

export default PrivateRoute;
