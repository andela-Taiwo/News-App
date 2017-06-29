import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';

export default class LoginMessage extends React.Component {
  /*
   * @returns{ <LoginMessage /> }
   * @memberof LoginMessage
   */
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
              <Link to="/sources"><a className="carousel-item" href="#/sources">
                <img src="" id="aj"/></a></Link>
              <Link to="/sources"><a className="carousel-item" href="#/sources">
                <img src="" id="bbc" /></a></Link>
              <Link to="/sources"><a className="carousel-item" href="#/sources">
                <img src="" id="espn" /></a></Link>
              <Link to="/sources"><a className="carousel-item" href="#/sources">
                <img src="" id="abc"/></a></Link>
              <Link to="/sources"><a className="carousel-item" href="#/sources">
                <img src="" id="bbcs"/></a></Link>
            </div>

          </div>

        </div>

    );
  }
}

