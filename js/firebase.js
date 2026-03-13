// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhwcN1ATAJmy4-zwps_n6nBhHdT-x_bOA",
  authDomain: "wonchi-international-lodge.firebaseapp.com",
  projectId: "wonchi-international-lodge",
  storageBucket: "wonchi-international-lodge.firebasestorage.app",
  messagingSenderId: "1094808203309",
  appId: "1:1094808203309:web:2fbdf4a2b13e3d6c2588a4",
  measurementId: "G-9WN54QG87G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
