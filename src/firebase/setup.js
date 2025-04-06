// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {} from "firebase/auth"
// import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDTofP-Jd83BjjObaE_d5qJhIv4WF32U2g",
  authDomain: "bbc-clone-b0a54.firebaseapp.com",
  projectId: "bbc-clone-b0a54",
  storageBucket: "bbc-clone-b0a54.firebasestorage.app",
  messagingSenderId: "588343968961",
  appId: "1:588343968961:web:ab48464a3708483f7f4040",
  measurementId: "G-Q3CXYRW3RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)