import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var firebaseConfig = {
    apiKey: process.env.REACT_APP_firebase_apiKey,
    authDomain: process.env.REACT_APP_firebase_authDomain,
    databaseURL: process.env.REACT_APP_firebase_databaseURL,
    projectId: process.env.REACT_APP_firebase_projectID,
    storageBucket: process.env.REACT_APP_firebase_storageBucket,
    messagingSenderId: process.env.REACT_APP_firebase_messagingSenderId,
    appId: process.env.REACT_APP_firebase_apiId
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;