
import React from 'react';
import { HashRouter as Router, Route, Switch } from
   'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from './Login.jsx';
import Article from './Article.jsx';
import Footer from './Footer.jsx';
import Sources from './Sources.jsx';
import NotFound from './NotFound.jsx';
import fireAuthentication from '../../config/firebase-config';
import PublicRoute from '../routes/PublicRoute';
import PrivateRoute from '../routes/PrivateRoute';

const history = createBrowserHistory();

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
   * @returns {string} any
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
