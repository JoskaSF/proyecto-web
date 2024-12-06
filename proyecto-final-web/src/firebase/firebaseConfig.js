// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC97hSpgbbR2AxhTfNuZW7wieDK-YSbaaU",
  authDomain: "crud-f9982.firebaseapp.com",
  databaseURL: "https://crud-f9982-default-rtdb.firebaseio.com",
  projectId: "crud-f9982",
  storageBucket: "crud-f9982.firebasestorage.app",
  messagingSenderId: "870765716043",
  appId: "1:870765716043:web:bbdfb7cbd0899eef9aa3ce"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;