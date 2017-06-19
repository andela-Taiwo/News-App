  
import React from 'react';
import { HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Header from './Header.jsx' ;
import { ContextTypes, PropTypes } from 'prop-types';


export default class LoginMessage extends React.Component {

  
  render(){
    
    const user = JSON.parse(localStorage.getItem('userProfile'));
    
    return(
      
        
        <div >
             
          <Header />
          <div className="message">
            <h2> Welcome {user.name} </h2>
            <h5> You are currently logged in </h5>
           
            <div className="carousel">
              <a className="carousel-item" href="#/sources"><Link to="/sources" ></Link><img src="http://lorempixel.com/250/250/nature/1" /></a>
              <a className="carousel-item" href="#two!"><img src="http://lorempixel.com/250/250/nature/2" /></a>
              <a className="carousel-item" href="#three!"><img src="http://lorempixel.com/250/250/nature/3" /></a>
              <a className="carousel-item" href="#four!"><img src="http://lorempixel.com/250/250/nature/4" /></a>
              <a className="carousel-item" href="#five!"><img src="http://lorempixel.com/250/250/nature/5" /></a>
                 <p> <Link to="/sources" >View News HeadLines </Link> </p>
            </div>
          

          </div>


          
        </div>

        
      
    );
  } 

}

contextTypes: {
    router: PropTypes.object
  }