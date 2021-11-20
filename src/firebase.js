import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRorQJ4cqCyz_vKPGVb4gcKDTbrMyOd84",
  authDomain: "clone-7cef0.firebaseapp.com",
  databaseURL: "https://clone-7cef0-default-rtdb.firebaseio.com",
  projectId: "clone-7cef0",
  storageBucket: "clone-7cef0.appspot.com",
  messagingSenderId: "1084470802343",
  appId: "1:1084470802343:web:f4432d02254097c2602882",
  measurementId: "G-8J3B4Z6M47",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
