import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCw_u-2u7X6GAH58iZuxzsUWE_OHeF94ng",
    authDomain: "book-santa-f43d1.firebaseapp.com",
    projectId: "book-santa-f43d1",
    storageBucket: "book-santa-f43d1.appspot.com",
    messagingSenderId: "961149893897",
    appId: "1:961149893897:web:b9cfde755b0b54a9e267d8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()