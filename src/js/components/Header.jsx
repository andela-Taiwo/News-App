import React from 'react';
import { Link, HashRouter } from 'react-router-dom';
// import Saved from './Save';
class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      authenticated: false
    }
    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.removeItem('userProfile');
    location.reload();
  }

  navigate(){
    this.props.history.push('/sources');

  }

    render() {
        const user = JSON.parse(localStorage.getItem('userProfile'));
        return (
            <nav>
              <HashRouter>
              <div className="navBar">  
                <div className="navbar-header">
                  <a href="" className="brand-logo" to="/">Articles Hub</a>
                </div>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li  onClick={this.navigate.bind(this)}><Link to="/sources">Latest News</Link></li>
                    <li> {user.name}</li>
                   {/* <li>  <Link to="/saved" >Saved</Link></li>*/}
                    <li ><Link to="/" onClick={this.logout}>Logout</Link></li>

                  
                  </ul>
            </div>
            </HashRouter>
          </nav>
        );
    }
}

export default Header;