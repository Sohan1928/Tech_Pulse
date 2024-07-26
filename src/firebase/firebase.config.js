// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrlxT75lKBxz9Yf6NA-X6VsMl5TGwffVI",
  authDomain: "tech-pulse-project.firebaseapp.com",
  projectId: "tech-pulse-project",
  storageBucket: "tech-pulse-project.appspot.com",
  messagingSenderId: "532839360407",
  appId: "1:532839360407:web:36c1e69b6f8a9d52e6c6d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
