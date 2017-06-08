import React from 'react';
import { Link, HashRouter } from 'react-router-dom';
import Saved from './Save';
class Header extends React.Component {
  navigate(){
    //this.props.history.pushState(null, '/');
    this.props.history.push('/');

  }

    render() {
        return (
            <nav className="nav-wrapper">
              <HashRouter>
              <div className="container-fluid">
                <div className="navbar-header">
                  <a href="" className="brand-logo" to="/">Articles Hub</a>
                </div>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li className="active" onClick={this.navigate.bind(this)}><Link to="/latest">Latest News</Link></li>
                <li>  <Link to="/archives">archives</Link></li>
                <li>  <Link to="/saved"  activeClassName="active" component={Saved}>Saved</Link></li>
                  <li><input type="text"  onChange={this.handleChange} /></li>
                  <li ><Link to="/login">Login</Link></li>

                
              </ul>
            </div>
            </HashRouter>
          </nav>
        );
    }
}

export default Header;