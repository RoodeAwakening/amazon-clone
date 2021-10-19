// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getDatabase } from "firebase/database";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const API_KEY = process.env.REACT_APP_apiKey
const AUTH_DOMAIN = process.env.REACT_APP_authDomain
const ProjectId = process.env.REACT_APP_projectId
const storageBucket = process.env.REACT_APP_storageBucket
const messagingSenderId = process.env.REACT_APP_messagingSenderId
const appId = process.env.REACT_APP_appId
const measurementId = process.env.REACT_APP_measurementId

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: ProjectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Get a reference to the database service
// const database = getDatabase(app);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };