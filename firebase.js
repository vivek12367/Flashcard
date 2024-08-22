// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuyxvk60oFvuoEi0mtSeQgN-3PYS5ZP9o",
  authDomain: "flash-6fd30.firebaseapp.com",
  projectId: "flash-6fd30",
  storageBucket: "flash-6fd30.appspot.com",
  messagingSenderId: "399967424608",
  appId: "1:399967424608:web:ee6cce5a44c872d98f3305",
  measurementId: "G-4R80PQBRVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
