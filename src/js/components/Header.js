import React from 'react';
import { Link, HashRouter } from 'react-router-dom';
import Saved from './Save';
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      authenticated: false
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }



  login() {
    // We can call the show method from Auth0Lock,
    // which is passed down as a prop, to allow
    // the user to log in
    this.props.lock.show((err, profile, token) => {
      if (err) {
        alert(err);
        return;
      }
      this.setState({authenticated: true});
    });
  }

  logout() {
    // AuthActions.logUserOut();
    this.setState({authenticated: false});
  }
  navigate(){
    //this.props.history.pushState(null, '/');
    this.props.history.push('/');

  }

    render() {
        return (
            <nav>
              <HashRouter>
              <div className="nav-wrapper">  
                <div className="navbar-header">
                  <a href="" className="brand-logo" to="/">Articles Hub</a>
                </div>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li  onClick={this.navigate.bind(this)}><Link to="/sources">Latest News</Link></li>
                <li>  <Link to="/archives">archives</Link></li>
                <li>  <Link to="/saved" >Saved</Link></li>
                  {/*<li><input type="text"  onChange={this.handleChange} /></li>*/}
                  {/*<li ><Link to="/login" onClick={this.login}>Login</Link></li>*/}
                  <li ><Link to="/" onClick={this.logout}>Logout</Link></li>

                
              </ul>
            </div>
            </HashRouter>
          </nav>
        );
    }
}

export default Header;