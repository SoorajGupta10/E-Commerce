// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "logine-commerce-5f385.firebaseapp.com",
  projectId: "logine-commerce-5f385",
  storageBucket: "logine-commerce-5f385.firebasestorage.app",
  messagingSenderId: "817199678386",
  appId: "1:817199678386:web:c8a9d2463aabe042395aab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider}