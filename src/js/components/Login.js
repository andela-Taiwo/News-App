import React from 'react';
import GoogleLogin from 'react-google-login';
import FontAwesome  from 'react-fontawesome';
import sourceStore from '../stores/SourceStore';

export  default class Login extends React.Component{
  
  logIn (e) {
   this.props.history.push('/sources');
  }

  responseGoogle(response) {
    const login_profile = response.getBasicProfile();
    const user_profile = {};
    user_profile.name = login_profile.getName();
    user_profile.email = login_profile.getEmail();
    user_profile.idToken = response.googleId;
    localStorage.setItem('userProfile', JSON.stringify(user_profile));
    this.props.history.push('/sources');
  }

  render(){
    const responseGoogle = (response) => {
      const {tokenId} = response;
      if(tokenId){
        this.props.history.push('./sources');
      }else{
        this.props.history.push('./features')
      }
     }

  
    return(
      <div className="container">
        <div className="row">
          <div className="">
            <div className="card-panel" id="loging-box">
              <GoogleLogin
                  clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                >
                <FontAwesome name='google'/>
                <span> Login with Google</span>
              </GoogleLogin>

            </div> 

          </div>
        </div>




    </div>
  );
  }
}