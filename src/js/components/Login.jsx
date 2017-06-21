import React from 'react';
import GoogleLogin from 'react-google-login';
import FontAwesome  from 'react-fontawesome';
// import sourceStore from '../stores/SourceStore';
// import Header from './Header.jsx';

export default class Login extends React.Component {
  constructor() {
    super();
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  responseGoogle(response) {
    const loginProfile = response.getBasicProfile();
    const userProfile = {};
    userProfile.name = loginProfile.getName();
    userProfile.email = loginProfile.getEmail();
    userProfile.image = loginProfile.getImageUrl();
    userProfile.idToken = response.googleId;
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    location.reload();
  }

  render() {
    return (

      <div className="container">
        <div className="row"> <div className="head col s6">
          <h1 className="">Article Hub</h1>
        </div>
        <div className="google_log col s6">
          <a id="login_button" href="#!" className="btn btn-large">
            <GoogleLogin
              className="btn btn-large"
              clientId= {process.env.CLIENT_ID}
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}>
              <FontAwesome name="google"/>
              <span> Login with Google</span>
            </GoogleLogin>
          </a>

        </div>
        </div>
        <div className="col s6"><h3 className="">Get Live Headlines</h3></div>

    </div>
    );
  }
}
