import React from 'react';
import { HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Header from './Header.jsx';
import Request from 'superagent';
import {createBrowserHistory} from 'history';
import * as ArticleAction from '../actions/ArticleAction';
import sourceStore from '../stores/SourceStore';
// import Saved from './Save';
// import Archives from './Archives';
import Search from './Search.jsx';
import Login from './Login.jsx';
import LoginMessage from './LoginMessage.jsx';
import Article from './Article.jsx';
import Footer from './Footer.jsx';
import Sources from './sources.jsx';
import NotFound from './NotFound.jsx';

const history = createBrowserHistory();
class Layout extends React.Component{
  constructor(){
    super();
    this.state ={};
    // console.log(localStorage.getItem('userProfile'));
  }


render(){
    //const user = JSON.parse(localStorage.getItem('userProfile'));

    return(
      <div>
    
      <Router history={history}>
        <Switch>
        {/*<Route path="/" component={Layout} />*/}
          <Route exact path="/" component={localStorage.getItem('userProfile') ? LoginMessage : Login} />
          {/*<Route path="/saved"component={localStorage.getItem('userProfile') ? Saved : Login} />
          <Route path="/(archives/:articles)" name="archives" component={localStorage.getItem('userProfile') ? Archives : Login} />*/}
          <Route path="/search" component={localStorage.getItem('userProfile') ? Search : Login} />
          <Route path="/articles/:article/:sortBy" component={localStorage.getItem('userProfile') ? Article : Login} />   
          <Route  path="/sources" component={localStorage.getItem('userProfile') ? Sources : Login} />
          <Route path="*" component={NotFound} />
        
      </Switch>
    </Router>
      <Footer />
    </div>
  );
  }
}

export default Layout;