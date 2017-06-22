  
import React from 'react';
import { HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Header from './Header.jsx' ;
import { ContextTypes, PropTypes } from 'prop-types';


export default class LoginMessage extends React.Component {
  render() {
    const user = JSON.parse(localStorage.getItem('userProfile'));
    const name = user.name;  
    return (
         <div>   
           <Header />
           <div className="message">
            <h2> Welcome {name} </h2>
            <h5> You are currently logged in</h5>         
            <div className="carousel">
              <Link to="/sources"><a className="carousel-item" href="#/sources"><img src= "../../img/aj.png" /></a></Link>
              <Link to="/sources"><a className="carousel-item" href="#/sources"><img src="../../img/bbc.png" /></a></Link>
              <Link to="/sources"><a className="carousel-item" href="#/sources"><img src="../../img/espn.png" /></a></Link>
              <Link to="/sources"><a className="carousel-item" href="#/sources"><img src="../../img/abc.png" /></a></Link>
              <Link to="/sources"><a className="carousel-item" href="#/sources"><img src="../../img/bbcs.png" /></a></Link>
                 <p> <Link to="/sources">View News HeadLines </Link> </p>
            </div>

          </div>

        </div>

    );
  } 
}

