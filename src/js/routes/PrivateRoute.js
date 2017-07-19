import PropTypes from 'prop-types';

/**
 * @param { component}: Component, authed, ...rest}
 * @param  { authed}
 * @param { ...rest}
 * @returns {route}
 */
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => authed.authed === true
      ? <Component {...props} name = {authed.user} />
      : <Redirect to= {{ pathname: '/', state: { from: props.location } }} />}
    />
  );
};

PrivateRoute.PropTypes = {
  component: PropTypes.any.isRequired,
  authed: PropTypes.bool.isRequired,
};

export default PrivateRoute;
