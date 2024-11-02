// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a6b7f.firebaseapp.com",
  projectId: "mern-estate-a6b7f",
  storageBucket: "mern-estate-a6b7f.firebasestorage.app",
  messagingSenderId: "1064086477737",
  appId: "1:1064086477737:web:db704ab131dbfe00d282b8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);