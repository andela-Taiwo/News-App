import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  return (
  <Route
    {...rest}
    render = {props => (authed.authed === false
    ? <Component {...props} name = {authed.user}/>
    : <Redirect to="/sources" />)}
  />
  );
};


export default PublicRoute;

PublicRoute.PropTypes = {
  component: {
    Component: PropTypes.func.isRequired,
    authed: PropTypes.bool.isRequired,
  },
  location: {
    state: PropTypes.bool,
  }
};
