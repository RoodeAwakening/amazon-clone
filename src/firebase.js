// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getDatabase } from "firebase/database";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const API_KEY = process.env.REACT_APP_API_KEY
const AUTH_DOMAIN = process.env.REACT_APP_AUTHDOMAIN
const ProjectId = process.env.REACT_APP_PROJECTID
const storageBucket = process.env.REACT_APP_STORAGEBUCKET
const messagingSenderId = process.env.REACT_APP_MESSAGINGSENDERID
const appId = process.env.REACT_APP_APPID
const measurementId = process.env.REACT_APP_MEASURMENTID


const firebaseConfig = {
  apiKey: "AIzaSyAw25fK06c3a_yf_eNIIYAtiw4gFBVTpi8",
  authDomain: "clone-8ecd8.firebaseapp.com",
  projectId: "clone-8ecd8",
  storageBucket: "clone-8ecd8.appspot.com",
  messagingSenderId: "846132749147",
  appId: "1:846132749147:web:a50ca83bb8dd976856707e",
  measurementId: "G-9QKG0XVE2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Get a reference to the database service
// const database = getDatabase(app);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };