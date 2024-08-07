// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL_Eht0qauIQ-QUMtvFmrgJ3Or4zWrKoQ",
  authDomain: "inventory-management-573c9.firebaseapp.com",
  projectId: "inventory-management-573c9",
  storageBucket: "inventory-management-573c9.appspot.com",
  messagingSenderId: "593029314920",
  appId: "1:593029314920:web:0939f2e2e372e1d19b3edd",
  measurementId: "G-7Z9W32G5FX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export {firestore};