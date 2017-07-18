import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from './Login.jsx';
import Article from './Article.jsx';
import Footer from './Footer.jsx';
import Sources from './Sources.jsx';
import NotFound from './NotFound.jsx';

const history = createBrowserHistory();

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
/**
 * @memberof Layout
 */
  componentDidMount() {
    this.checkUserSignedIn();
  }
/**
 * @memberof Layout
 */
  checkUserSignedIn() {
    this.setState({
      user: localStorage.getItem('userProfile')
    });
  }
/**
 * renders the routes to the components
 * @returns {routes}
 * @memberof Layout
 */
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={this.state.user ?
            Sources : Login} />
            <Route path="/articles/:article/:sortBy"
              component={this.state.user ? Article : Login}/>
            <Route path="/sources" component={this.state.user
              ? Sources : Login} />
            <Route path="*" component={NotFound}/>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default Layout;
