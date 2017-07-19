import PropTypes from 'prop-types';


const PublicRoute = ({ component: Component, authed, ...rest }) => {
  return (
  <Route
    {...rest}
    render = { props => authed.authed === false
    ? <Component {...props} name = {authed.user}/>
    : <Redirect to="/sources" />}
  />
  );
};

PublicRoute.PropTypes = {
  component: PropTypes.any.isRequired,
  authed: PropTypes.bool.isRequired,
};

export default PublicRoute;
