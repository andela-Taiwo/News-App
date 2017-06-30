import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Search from './Search.jsx';
import Login from './Login.jsx';
import LoginMessage from './LoginMessage.jsx';
import Article from './Article.jsx';
import Footer from './Footer.jsx';
import Sources from './sources.jsx';
import NotFound from './NotFound.jsx';

const history = createBrowserHistory();

/**
 * @returns{Routes}
 */
function Layout() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={localStorage.getItem('userProfile') ?
           LoginMessage : Login} />
          <Route path="/search" component={localStorage.getItem('userProfile')
            ? Search : Login} />
          <Route path="/articles/:article/:sortBy"
            component={localStorage.getItem('userProfile') ? Article : Login}/>
          <Route path="/sources" component={localStorage.getItem('userProfile')
            ? Sources : Login} />
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default Layout;
