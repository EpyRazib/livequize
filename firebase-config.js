// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg3u4vW2P6tt-Anign9boGyzXXM7i0PPQ",
  authDomain: "livequiz-75aef.firebaseapp.com",
  databaseURL: "https://livequiz-75aef-default-rtdb.firebaseio.com",
  projectId: "livequiz-75aef",
  storageBucket: "livequiz-75aef.firebasestorage.app",
  messagingSenderId: "1004225575549",
  appId: "1:1004225575549:web:7984c28909f77f37f30f14",
  measurementId: "G-YWFBW5M2LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);