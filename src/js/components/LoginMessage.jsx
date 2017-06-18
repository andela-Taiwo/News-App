  
import React from 'react';
import { HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Header from './Header.jsx' ;
import { ContextTypes, PropTypes } from 'prop-types';
export default class LoginMessage extends React.Component {

  render(){
    
    const user = JSON.parse(localStorage.getItem('userProfile'));
    
    return(
      
        
        <div>
             
          <Header />
          <h2> Welcome {user.name} </h2>
          <p> <Link to="/sources" >View News HeadLines </Link> </p>
        </div>
      
    );
  } 

}

contextTypes: {
    router: PropTypes.object
  }