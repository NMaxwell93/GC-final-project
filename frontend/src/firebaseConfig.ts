import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDzyz4iOboV5FqtWt4twrzOLkX5qgA53wY",
    authDomain: "quick-click-gc.firebaseapp.com",
    projectId: "quick-click-gc",
    storageBucket: "quick-click-gc.appspot.com",
    messagingSenderId: "27316607268",
    appId: "1:27316607268:web:20a4372d1ccb90b5093bb1",
    measurementId: "G-CRZTL4PCXJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const authProvider = new firebase.auth.GoogleAuthProvider();

  export function signInWithGoogle(): void {
      firebase.auth().signInWithPopup(authProvider);
  }

  export function signOut(): void {
      firebase.auth().signOut();
  }

  export default firebase;