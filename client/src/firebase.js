// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-chandu.firebaseapp.com",
  projectId: "mern-blog-chandu",
  storageBucket: "mern-blog-chandu.appspot.com",
  messagingSenderId: "1031901064538",
  appId: "1:1031901064538:web:8a2abfdc764e19a7ab5763",
  measurementId: "G-XPRYN9J9T4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
