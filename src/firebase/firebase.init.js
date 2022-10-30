// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz1cgN22NcYucHRjTcDojYWl09mLiOgcA",
  authDomain: "news-buzz-dfb11.firebaseapp.com",
  projectId: "news-buzz-dfb11",
  storageBucket: "news-buzz-dfb11.appspot.com",
  messagingSenderId: "815049332911",
  appId: "1:815049332911:web:046ecc5c885fc917fb5c5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;