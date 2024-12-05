// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUiyDC7V8kDSfiI3HYOAvpq54JWOMo1tM",
  authDomain: "proyectowebdb-6bedd.firebaseapp.com",
  projectId: "proyectowebdb-6bedd",
  storageBucket: "proyectowebdb-6bedd.firebasestorage.app",
  messagingSenderId: "749872551857",
  appId: "1:749872551857:web:e1230da384b9c7a8274f90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);