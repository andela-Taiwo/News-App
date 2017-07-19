import React from 'react';
import FontAwesome from 'react-fontawesome';
import Authentication from '../../helpers/Auth';


export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      authed: false,
      user: ''
    };
    this.login = this.login.bind(this);
  }

  login() {
    Authentication.signIn();
  }


  /**
   *
   * renders the UI for the Login component
   * @returns {Login components}
   * @memberof Login
   */
/*
 *  renders the UI for the Login component
 * @returns {Login components}
 * @memberof Login
 */
  render() {
    return (
      <div className="mainBG">
        <div className="container">
        <div className="row login_row">
          <div className="col s3 l3" />
          <div className="col l6 s6 login_content" >
            <div className="col s1 l1" />
            <div className="col s10 l10"><h2>
              Articles Hub</h2></div>
              <div className="google_log">
                    <button
                       className="btn btn-big btn waves-effect waves-light red"
                        onClick ={this.login}>
                      <FontAwesome name="google"/>
                      <span className="logBtn">  Login with Google</span>
                    </button>
              </div>
              <div className="col s1 l1"><span/> </div>
          </div>
        <div className="col s3 l3" />

      </div>
      </div>
    </div>
    );
  }
}

