// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-14267.firebaseapp.com",
  projectId: "mern-auth-14267",
  storageBucket: "mern-auth-14267.appspot.com",
  messagingSenderId: "152087971537",
  appId: "1:152087971537:web:9bcf5bb886106233fb27f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// always remember to have too gemail account in your setting window 