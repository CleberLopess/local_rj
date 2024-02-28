// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, get, child } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL3v6ShpM0JvZk-jsEBcR6iLzNAybvJ6E",
  authDomain: "localrj-6f8c3.firebaseapp.com",
  databaseURL: "https://localrj-6f8c3-default-rtdb.firebaseio.com",
  projectId: "localrj-6f8c3",
  storageBucket: "localrj-6f8c3.appspot.com",
  messagingSenderId: "468511731851",
  appId: "1:468511731851:web:114f6e934738325797a48e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
