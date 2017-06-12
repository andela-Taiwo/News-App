import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Bootstrap from 'bootstrap-without-jquery';
// import Layout from './components/layout';
import Saved from './components/Save';
import Archives from './components/Archives';
import Header from  './components/Header';
import Search from './components/Search';
import Login from './components/Login';
import Register from './components/Register';
import Article from './components/Article';
import Footer from './components/Footer';
import {createBrowserHistory} from 'history';
import Sources from './components/sources';
import NotFound from './components/NotFound';
import firebase from 'firebase';

require('../sass/style.sass');

const history = createBrowserHistory();

const app = document.getElementById('app');




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBhmyYqNZGHavPbhtNiNsWCAnw9082t5Eg",
    authDomain: "articlehub-d8b2a.firebaseapp.com",
    databaseURL: "https://articlehub-d8b2a.firebaseio.com",
    projectId: "articlehub-d8b2a",
    storageBucket: "articlehub-d8b2a.appspot.com",
    messagingSenderId: "163462472376"
  };
  firebase.initializeApp(config);

const login = ()=> {

  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

}


ReactDOM.render(
  <div>
    <Header />
  <Router history={history}>
    <Switch>
    {/*<Route path="/" component={Layout} />*/}
      <Route exact path="/" component={Login} />
      <Route path="/saved"component={Saved} />
      <Route path="/(archives/:articles)" name="archives" component={Archives} />
      <Route path="/search" component={Search} />
      <Route path="/articles/:article/:sortBy" component={Article} />   
      <Route path="/register" component={Register} />
      <Route  path="/sources" component={Sources} />
      <Route path="*" component={NotFound} />
    
   </Switch>
 </Router>
   <Footer />
 </div>,
   app);
