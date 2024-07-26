// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSjqq8WTDm4mAXWKaGrjLntydZnGHybiA",
  authDomain: "ecommerce-435bc.firebaseapp.com",
  projectId: "ecommerce-435bc",
  storageBucket: "ecommerce-435bc.appspot.com",
  messagingSenderId: "661867221642",
  appId: "1:661867221642:web:3f8f3203c8a9e0c6d01373",
  measurementId: "G-2T0W5XZF5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}