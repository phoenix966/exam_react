import firebase from 'firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAiJ-PRe-xjfR3442505nffXol5A5RCAOA",
    authDomain: "exam-6e12f.firebaseapp.com",
    databaseURL: "https://exam-6e12f-default-rtdb.firebaseio.com",
    projectId: "exam-6e12f",
    storageBucket: "exam-6e12f.appspot.com",
    messagingSenderId: "853788848025",
    appId: "1:853788848025:web:d7bd346730518992826d08"
  };

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export default firebase;