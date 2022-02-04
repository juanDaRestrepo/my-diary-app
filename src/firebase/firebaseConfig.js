import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCjpMFcRSNkfG2b7Mog4P93DP83a62ePmM",
    authDomain: "my-diary-app-726cd.firebaseapp.com",
    projectId: "my-diary-app-726cd",
    storageBucket: "my-diary-app-726cd.appspot.com",
    messagingSenderId: "623110754131",
    appId: "1:623110754131:web:cec4339bfec1c2d6ee9ba6",
    measurementId: "G-L4ZQLZ869C"
  };
  
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}