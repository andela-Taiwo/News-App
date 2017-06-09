import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, } from 'react-router-dom';
import Bootstrap from 'bootstrap-without-jquery';
import Layout from './components/layout';
import Saved from './components/Save';
import Archives from './components/Archives';
import Header from  './components/Header';
import Search from './components/Search';
import Login from './components/Login';
import Register from './components/Register';
import Latest from './components/Latest';
import Footer from './components/Footer';
import {createBrowserHistory} from 'history';
import Sources from './components/sources';

require('../sass/style.sass');

const history = createBrowserHistory();

const app = document.getElementById('app');

ReactDOM.render(
  <div>
  <Router history={history}>
    <switch>
   <Route path="/" component={Layout} />
    <Route exact path="/" component={Login} />
    <Route path="/saved"component={Saved} />
    <Route path="/(archives/:articles)" name="archives" component={Archives} />
    <Route path="/search" component={Search} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route exact path="/sources" component={Sources} />
   
   </switch>
 </Router>
   <Footer />
 </div>,
   app);
