import React from 'react';
import { Link, HashRouter } from 'react-router-dom';
import Authentication from '../../helpers/Auth';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: true,
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    $('.button-collapse').sideNav();
  }
  /**
   *Logout out the user
   * set the state authentictaion
   * @memberof
   */
  logout() {
    if (this.state.authed) {
      Authentication.signOut();
      this.setState({
        authed: false,
        user: ''
      });
    }
  }
  /**
   *
   *
   * @returns Header  renders UI  for the Header component
   * @memberof Header  Header  renders UI  for the Header component
   */

  render() {
    return (
            <nav>
              <HashRouter>
                <div className="">
                  <div className="navBar">
                    <div className="">
                      <Link to="/" className="brand-logo center">
                        Articles Hub</Link>
                    </div>
                    <a href="#" data-activates="mobile-demo"
                      className="button-collapse">
                      <i className="material-icons">toc</i>
                    </a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                      <li><Link to="/sources" >Sources</Link></li>
                    </ul>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                          <a href="#">{this.props.name}</a>
                        </li>
                      <li ><Link to="/"
                          onClick={this.logout}>Logout</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul
                        className="side-nav" id="mobile-demo"
                        style ={{
                          color: '#6D29C5',
                          fontSize: '16px',
                          marginLeft: '3px',
                          padding: '3px 5px',
                          edge: 'right', // Choose the horizontal origin
                          closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                          draggable: true,
                        }}
                        >
                      <li
                        style ={{
                          color: '#6D29C5',
                          fontSize: '15px',
                          marginLeft: '3px',
                          padding: '3px 5px',
                        }}
                      ><i className="material-icons">person_pi</i>{this.props.name}</li>
                      <li ><Link to="/" onClick={this.logout}>Logout</Link></li>
                      <li><Link to="/sources" >Sources</Link></li>

                    </ul>
                  </div>
                </div>
              </HashRouter>
          </nav>
    );
  }
}

export default Header;
