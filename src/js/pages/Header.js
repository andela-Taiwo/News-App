import React from 'react';
import {Link} from 'react-router';
export default class Header extends React.Component {
  navigate(){
    //this.props.history.pushState(null, '/');
    this.props.router.replace('/');

  }

    render() {
        return (
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link className="navbar-brand" to="/">HeadLines.net</Link>
                </div>
                <ul className="nav navbar-nav navbar-right">
                  <li className="active" onClick={this.navigate.bind(this)}><Link to="latest">Latest News</Link></li>
                <li>  <Link to="archives"  >archives</Link></li>
                <li>  <Link to="featured"  activeClassName="active">featured</Link></li>
                  <li><Link to="search">search</Link></li>
                  <li ><Link to="login">Login</Link></li>

                <li ><Link to="register">Register</Link></li>
              </ul>
            </div>
          </nav>
        );
    }
}
