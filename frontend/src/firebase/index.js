// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn4uWO9RM55U2WQtW3u8eVyZKJnx9U0mA",
  authDomain: "proj-instrumentacao.firebaseapp.com",
  databaseURL: "https://proj-instrumentacao-default-rtdb.firebaseio.com",
  projectId: "proj-instrumentacao",
  storageBucket: "proj-instrumentacao.appspot.com",
  messagingSenderId: "537585150415",
  appId: "1:537585150415:web:32e3c728fa7610dbfe8aba",
  measurementId: "G-8RZD106MS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);