// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEGagzYt-Z_0oKmvcmcrH0I7UEpta4x5c",
  authDomain: "vite-contact-e5546.firebaseapp.com",
  projectId: "vite-contact-e5546",
  storageBucket: "vite-contact-e5546.appspot.com",
  messagingSenderId: "119583835234",
  appId: "1:119583835234:web:a16064628f5ba442053d3b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);