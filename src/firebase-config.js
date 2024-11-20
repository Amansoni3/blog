// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-hp7wKTC4kz8mfd32ZqLyCQ80T45RNOY",
  authDomain: "blog-1b0ea.firebaseapp.com",
  projectId: "blog-1b0ea",
  storageBucket: "blog-1b0ea.firebasestorage.app",
  messagingSenderId: "883270358551",
  appId: "1:883270358551:web:2af34cc234fbca86beae52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()