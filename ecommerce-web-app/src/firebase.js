import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQItk5EYDMfr7VAyNFRG2QRTO7Sk_neoU",
  authDomain: "clone-web-app-121e0.firebaseapp.com",
  databaseURL: "https://clone-web-app-121e0-default-rtdb.firebaseio.com",
  projectId: "clone-web-app-121e0",
  storageBucket: "clone-web-app-121e0.appspot.com",
  messagingSenderId: "120652112952",
  appId: "1:120652112952:web:26896aeeccdb71f6e6b2cd",
  measurementId: "G-EEE411H6M6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
