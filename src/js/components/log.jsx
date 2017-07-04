import React from 'react';
import GoogleLogin from 'react-google-login';
import FontAwesome from 'react-fontawesome';
import { hashHistory } from 'react-router';


export default class Login extends React.Component {

componentWillMount() {
    if (localStorage.getItem('name')) {
      hashHistory.push('/sources');
    }
  }
  render() {
/**
* @description This stores the user's google details in local storage.
* @param {array} response- response from google
* @returns {void}
*/
    const onSuccess = (response) => {
      localStorage.authenticated = true;
      localStorage.userDetails = JSON.stringify(response.profileObj);
      localStorage.name = JSON.stringify(response.profileObj.name);
      localStorage.email = JSON.stringify(response.profileObj.email);
      hashHistory.push('/sources');
    };

/**
* @description this function runs if the user's authentication failed.
* @method 
*/
    const onFailure = () => {
      //alert('Could not log you in. Please try again');
    };

/**
 * @description Assign the google login component to a variable.
 * @returns react elements
 */
    const loginButton =
    <GoogleLogin
      clientId = {process.env.CLIENT_ID}
      onSuccess={onSuccess}
      onFailure={onFailure}
      tag="button">Login with Google</GoogleLogin>;

  // responseGoogle= (response) => {
  //   const loginProfile = response.getBasicProfile();
  //   const userInfo = {};
  //   userInfo.name = loginProfile.getName();
  //   userInfo.email = loginProfile.getEmail();
  //   userInfo.idToken = response.googleId;
  //   localStorage.setItem('userProfile', JSON.stringify(userInfo));
  //   location.reload();
  // }

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
                  <a id="login_button" href="#!">
                   <span> {loginButton} </span>
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

