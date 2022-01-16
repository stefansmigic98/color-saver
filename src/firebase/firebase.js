// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "@firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp16qtoHzlLzJz-coPlVNtEsa1Q3qahX4",
  authDomain: "colors-saver-eef83.firebaseapp.com",
  projectId: "colors-saver-eef83",
  storageBucket: "colors-saver-eef83.appspot.com",
  messagingSenderId: "400412087970",
  appId: "1:400412087970:web:0cb9f9474d41447277e9fb",
  measurementId: "G-V7HG8JYYYW"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
const provider = new GoogleAuthProvider();
const db = getFirestore();


export { firebase, provider ,db}