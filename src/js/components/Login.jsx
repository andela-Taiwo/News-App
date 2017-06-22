import React from 'react';
import GoogleLogin from 'react-google-login';
import FontAwesome  from 'react-fontawesome';
// import sourceStore from '../stores/SourceStore';
// import Header from './Header.jsx';

export  default class Login extends React.Component{
  constructor() {
    super();
    this.responseGoogle = this.responseGoogle.bind(this);
  }
  
  // logIn (e) {
  //  this.props.history.push('/sources');
  // }

  responseGoogle(response) {
    const login_profile = response.getBasicProfile();
    const user_profile = {};
     user_profile.name = login_profile.getName();
    user_profile.email = login_profile.getEmail();
    user_profile.image = login_profile.getImageUrl();
    user_profile.idToken = response.googleId;
    localStorage.setItem('userProfile', JSON.stringify(user_profile));
    location.reload();
  }

  render(){
    return(

      <div className="container">
      
        <div className="row"> <div className="head col s6"> <h1 className="">Article Hub</h1></div>
            <div className="google_log col s6">
                          <a id="login_button" href="#!" className="btn btn-large"><GoogleLogin
                        className="btn btn-large"
                        clientId= {process.env.CLIENT_ID}
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                      >
                      <FontAwesome name="google"/>
                      <span> Login with Google</span>
                    </GoogleLogin></a>

            </div>
        </div>
        <div className="col s6"><h3 className="">Get Live Headlines</h3></div>

    </div>


      
  );
  }
}