// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/*import { getAnalytics } from "firebase/analytics";*/
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpXRnsKaMshG6pV-MAqerqw7yVYw49TIw",
  authDomain: "proyecto-realidad-aument-cae7a.firebaseapp.com",
  projectId: "proyecto-realidad-aument-cae7a",
  storageBucket: "proyecto-realidad-aument-cae7a.appspot.com",
  messagingSenderId: "86561719567",
  appId: "1:86561719567:web:7c9ed373c9a77bb44daa7a",
  measurementId: "G-Y570NT6NSW"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const Auth = appFirebase;
/*const analytics = getAnalytics(appFirebase);*/

export { appFirebase };