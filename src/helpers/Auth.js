import firebase from 'firebase';
import fireAuthentication from '../config/firebase-config';

class Authentication {
  signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    fireAuthentication.signInWithPopup(provider);
  }

  signOut() {
    return fireAuthentication.signOut();
  }
}

const authenticated = new Authentication();
export default authenticated;
