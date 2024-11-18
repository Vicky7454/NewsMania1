// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRHOBw5bWMkO3ec2qeo4YvrqnTe0P1YMI",
  authDomain: "newsmania-75abc.firebaseapp.com",
  projectId: "newsmania-75abc",
  storageBucket: "newsmania-75abc.appspot.com",
  messagingSenderId: "515485605819",
  appId: "1:515485605819:web:bbad610d6d31819f9fae9e",
  measurementId: "G-R3MEHLQ5F6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage  = getStorage(app);

export {fireDb, auth, storage};



// src/firebase.js


