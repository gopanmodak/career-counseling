// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOuloTQDgKQoliGoFH0xUI4_-kxYznt6I",
  authDomain: "career-counseling-76dc6.firebaseapp.com",
  projectId: "career-counseling-76dc6",
  storageBucket: "career-counseling-76dc6.firebasestorage.app",
  messagingSenderId: "153495234881",
  appId: "1:153495234881:web:6fb950d736cb320d70d9c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;