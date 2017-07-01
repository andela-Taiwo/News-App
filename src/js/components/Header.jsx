import React from 'react';
import { Link, HashRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      authenticated: false
    };
  }
  /**
   * @memberof Header logs out the user when invoked
   */
  logout = () => {
    localStorage.removeItem('userProfile');
    location.reload();
  }
/**
 * @returns {<Header />} A header that provides UI for the Header
 * @memberof Header  renders UI  for the Header component
 */
  render() {
    const user = JSON.parse(localStorage.getItem('userProfile'));
    return (
            <nav>
              <HashRouter>
                <div className="">
                  <div className="navBar">
                    <div className="">
                      <a href="" className="brand-logo center" to="/">
                        Articles Hub</a>
                    </div>
                    <ul id="nav-mobile" className="left">
                      <li><Link to="/sources" >Sources</Link></li>
                      <li> {user.name}</li>
                    </ul>
                    <ul id="nav-mobile" className="right">
                      <li> {user.name}</li>
                      <li ><Link to="/" onClick={this.logout}>Logout</Link></li>
                    </ul>
                  </div>
                </div>
              </HashRouter>
          </nav>
    );
  }
}

export default Header;
