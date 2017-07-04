import React from 'react';
import GoogleLogin from 'react-google-login';
import FontAwesome from 'react-fontawesome';


export default class Login extends React.Component {

  responseGoogle= (response) => {
    const login_profile = response.getBasicProfile();
    const user_profile = {};
    user_profile.name = login_profile.getName();
    user_profile.email = login_profile.getEmail();
    user_profile.image = login_profile.getImageUrl();
    user_profile.idToken = response.googleId;
    localStorage.setItem('userProfile', JSON.stringify(user_profile));
    location.reload();
  }

  render() {
    return (
      <div className="mainBG">
        <div className="container">
          <div className="row login_content" >
            <div className=""><h2>
              Articles Hub</h2></div>
              <div className="google_log">
                  <a id="login_button" href="#!">
                    <GoogleLogin
                        className="btn btn-large"
                        clientId= {process.env.CLIENT_ID}
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle} >
                      <FontAwesome name="google"/>
                      <span> Login with Google</span>
                    </GoogleLogin>
                  </a>

              </div>
          </div>

      </div>
    </div>
    );
  }
}
