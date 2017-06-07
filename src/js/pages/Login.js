import React from 'react';
import GoogleLogin from 'react-google-login';
import FontAwesome  from 'react-fontawesome';
export  default class Login extends React.Component{

  render(){
    const responseGoogle = (response) => {
      console.log(response);
     }
    return(
      <div>
      Username: <input />
      Password: <input type='password' />
      <input type='submit' />
      <br />
      <p />
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
