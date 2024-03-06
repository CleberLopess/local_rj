// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIRE_BASE_KEY,
  authDomain: "https://site-localrj-default-rtdb.firebaseio.com/",
  projectId: "site-localrj",
  storageBucket: "site-localrj.appspot.com",
  messagingSenderId: "749595535636",
  appId: "1:749595535636:web:373fc8181f4773f1c3ba01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
