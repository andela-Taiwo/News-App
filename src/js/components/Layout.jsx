
import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from
   'react-router-dom';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';
import Login from './Login.jsx';
import Article from './Article.jsx';
import Footer from './Footer.jsx';
import Sources from './Sources.jsx';
import NotFound from './NotFound.jsx';
import fireAuthentication from '../../config/firebase-config';

const history = createBrowserHistory();

/**
 * @param { component}: Component, authed, ...rest}
 * @param  { authed}
 * @param { ...rest}
 * @returns {route}
 */
function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => authed.authed === true
      ? <Component {...props} name = {authed.user} />
      : <Redirect to= {{ pathname: '/', state: { from: props.location } }} />}
    />
  );
}
PrivateRoute.PropTypes = {
  component: PropTypes.any.isRequired,
  authed: PropTypes.bool.isRequired,
};

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
  <Route
    {...rest}
    render = { props => authed.authed === false
    ? <Component {...props} name = {authed.user}/>
    : <Redirect to="/sources" />}
  />
  );
}

PublicRoute.PropTypes = {
  component: PropTypes.any.isRequired,
  authed: PropTypes.bool.isRequired,
};

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      authed: true,
      user: ''
    };
  }
/**
 *
 * checks set the authentication status
 * @memberof Layout
 */
  componentDidMount() {
    fireAuthentication.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
          user: user.displayName
        });
      } else {
        this.setState({
          authed: false,
          loading: false,
          user: ''
        });
      }
    });
  }
  componentWillUnmount() {
    this.removeListener();
  }
  /**
   *
   * Provides route to the UI
   * @returns {routes}
   * @memberof Layout
   */
  // history={new BrowserHistory}
  render() {
    return (
      <div>
        <Router history={history}>
        <Switch>
        <PublicRoute authed ={this.state} exact
          path="/" component={Login} />
        <PrivateRoute authed ={this.state}
          exact path="/articles/:article/:sortBy"
         component={Article}/>
        <PrivateRoute authed ={this.state}
          exact path="/sources" component={Sources} />
        <Route path="*" component={NotFound}/>
        </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default Layout;
