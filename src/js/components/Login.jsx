import React from 'react';
import GoogleLogin from 'react-google-login';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {

  responseGoogle= (response) => {
    const loginProfile = response.getBasicProfile();
    const userInfo = {};
    userInfo.name = loginProfile.getName();
    userInfo.email = loginProfile.getEmail();
    userInfo.idToken = response.googleId;
    localStorage.setItem('userProfile', JSON.stringify(userInfo));
    location.reload();
  }

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
                  <a id="" href="#!">
                    <GoogleLogin
                        className="btn btn-big btn waves-effect waves-light red"
                        clientId= {process.env.CLIENT_ID}
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle} >
                      <FontAwesome name="google"/>
                      <span> Login with Google</span>
                    </GoogleLogin>
                  </a>

              </div>
              <div className="col s1 l1"> </div>
          </div>
        <div className="col s3 l3" />

      </div>
      </div>
    </div>
    );
  }
}
