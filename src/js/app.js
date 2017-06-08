import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, } from 'react-router-dom';
import Bootstrap from 'bootstrap-without-jquery';
import Layout from './pages/layout';
import Saved from './pages/Save';
import Archives from './pages/Archives';
import Header from  './pages/Header';
import Search from './pages/Search';
import Login from './pages/Login';
import Register from './pages/Register';
import Latest from './pages/Latest';
import Footer from './pages/Footer';
import {createBrowserHistory} from 'history';

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
    <Route exact path="/latest" component={Latest} />
   
   </switch>
 </Router>
   <Footer />
 </div>,
   app);
