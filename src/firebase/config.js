import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUTxOm6gMzag8U6rZHfoTEdEa3lv_rrC4",
  authDomain: "thedojosite-1c725.firebaseapp.com",
  projectId: "thedojosite-1c725",
  storageBucket: "thedojosite-1c725.appspot.com",
  messagingSenderId: "1021643817450",
  appId: "1:1021643817450:web:d4a025ac204e74d755b293",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
