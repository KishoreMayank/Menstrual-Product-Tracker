import * as firebase from 'firebase';
import '@firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: "menstrual-product-tracker-db",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const dbh = firebase.firestore();

export function getAllUsers() {
  return new Promise(executeGetAllUsers);
}

function executeGetAllUsers(resolutionFunc, rejectionFunc) {
  dbh.collection("users").get()
      .then(r => resolutionFunc(r.docs))
      .catch(e => rejectionFunc(e));
}

export function getAllPins() {
  return new Promise(executeGetAllPins);
}

function executeGetAllPins(resolutionFunc, rejectionFunc) {
  dbh.collection("pins").get()
      .then(r => resolutionFunc(r.docs))
      .catch(e => rejectionFunc(e));
}