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
      .then(r => {
        let users = [];
        r.forEach(item => {
            let user = getUserFromDoc(item);
            users.push(user);
        });
        resolutionFunc(users);
      })
      .catch(e => rejectionFunc(e));
}

function getUserFromDoc(document) {
  let user = {};
  user.fName = document.get("fName");
  user.lName = document.get("lName");
  user.email = document.get("email");
  return user;
}

export function getAllPins() {
  return new Promise(executeGetAllPins);
}

function executeGetAllPins(resolutionFunc, rejectionFunc) {
  dbh.collection("pins").get()
      .then(r => resolutionFunc(r.docs))
      .catch(e => rejectionFunc(e));
}
