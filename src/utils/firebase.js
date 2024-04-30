// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJVQ6e_6RhSIa034bN2V23ORFV5A_pMjQ",
  authDomain: "netflixgpt-d4edb.firebaseapp.com",
  projectId: "netflixgpt-d4edb",
  storageBucket: "netflixgpt-d4edb.appspot.com",
  messagingSenderId: "1027763317500",
  appId: "1:1027763317500:web:9c19d0e96abf235e5cc579",
  measurementId: "G-Q9ZKQEDM0N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
