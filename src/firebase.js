import firebase from "firebase";

const config = {
  apiKey: "AIzaSyB3gokZv6AWzZP45kI-iAQ6EqXXFf5z-eg",
  authDomain: "lunch-rush-58bc8.firebaseapp.com",
  databaseURL: "https://lunch-rush-58bc8.firebaseio.com",
  projectId: "lunch-rush-58bc8",
  storageBucket: "lunch-rush-58bc8.appspot.com",
  messagingSenderId: "928863949759"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
