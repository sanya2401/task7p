// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration (replace with your own from Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyBtfNtiyCdK9Xud8emupcgYjDGbATV9KAc",
    authDomain: "devdeakin-fda7b.firebaseapp.com",
    databaseURL: "https://devdeakin-fda7b-default-rtdb.firebaseio.com",
    projectId: "devdeakin-fda7b",
    storageBucket: "devdeakin-fda7b.appspot.com",
    messagingSenderId: "159048222925",
    appId: "1:159048222925:web:f05cbedbc111d54825c184",
    measurementId: "G-EGSKH4YZTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
