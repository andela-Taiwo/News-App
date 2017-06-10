import React from 'react';
import GoogleLogin from 'react-google-login';
import FontAwesome  from 'react-fontawesome';
import sourceStore from '../stores/SourceStore';

export  default class Login extends React.Component{
  
  logIn (e) {
   this.props.history.push('/sources');
  }

  responseGoogle(response) {
    const loginProfile = response.getBasicProfile();
    const userProfile = {};
    userProfile.name = loginProfile.getName();
    userProfile.email = loginProfile.getEmail();
    userProfile.idToken = response.googleId;
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
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
      <div>
      <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        >
        <FontAwesome
        name='google'
      />
      <span> Login with Google</span>
    </GoogleLogin>


    </div>
  );
  }
}