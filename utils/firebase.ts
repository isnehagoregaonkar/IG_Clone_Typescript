// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd8_vT_3ZzOtq39EYEOErvTh4YfRBVzx0",
  authDomain: "ig-clone-typescript.firebaseapp.com",
  projectId: "ig-clone-typescript",
  storageBucket: "ig-clone-typescript.appspot.com",
  messagingSenderId: "704226862222",
  appId: "1:704226862222:web:0d1a6781895804cdb2d5df",
  measurementId: "G-N43F802HQB"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth= getAuth(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);
export default FirebaseApp
