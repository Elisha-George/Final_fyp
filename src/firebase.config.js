// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh9SR2k11ZNlCHjYJ5gTkynDCBjSuorOY",
  authDomain: "rentalhub-db.firebaseapp.com",
  projectId: "rentalhub-db",
  storageBucket: "rentalhub-db.appspot.com",
  messagingSenderId: "904984678815",
  appId: "1:904984678815:web:b4a373923fc70350dcadaa",
  measurementId: "G-LZX5FMREND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Configured the databse !!!
export const db = getFirestore();