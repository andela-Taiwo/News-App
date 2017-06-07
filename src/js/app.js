import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory, historyListener } from 'react-router';
import Bootstrap from 'bootstrap-without-jquery';
import Layout from './pages/layout';
import Features from './pages/Features';
import Archives from './pages/Archives';
import Header from  './pages/Header';
import Search from './pages/Search';
import Login from './pages/Login';
import Register from './pages/Register';
import Latest from './pages/Latest';

require('../sass/style.sass');

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
   <div>
   <Route path="/" component={Layout}>
    <IndexRoute component={Latest}></IndexRoute>
    <Route path="featured"component={Features}></Route>
    <Route path="(archives/:articles)" name="archives" component={Archives}></Route>
      <Route path="search" component={Search}></Route>
      <Route path="login" component={Login}></Route>
      <Route path="register" component={Register}></Route>

      <Route path="latest" component={Latest}></Route>


   </Route>


   </div>
 </Router>,
  app);
