import firebase from 'firebase';

  // Initialize Firebase
const config = {
  apiKey: process.env.FIRE_API || 'AIz5565yBG345bJo2Zf544RJAvK7iSeljp442PeyEM',
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER_ID
};
firebase.initializeApp(config);

const fireAuthentication = firebase.auth();
export default fireAuthentication;

