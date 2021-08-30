import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

interface Iproviders {
  Google: firebase.auth.AuthProvider;
  Github: firebase.auth.AuthProvider;
}

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebaseApp.auth();
export const database = firebaseApp.database();

export const Proviers: Iproviders = {
  Google: new firebase.auth.GoogleAuthProvider(),
  Github: new firebase.auth.GithubAuthProvider(),
}


export default firebaseApp;