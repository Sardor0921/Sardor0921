// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAufY2xXflGYzEBEsZGoDlH2kGGyxr1jIA",
  authDomain: "linkedin-clone-ef7fb.firebaseapp.com",
  projectId: "linkedin-clone-ef7fb",
  storageBucket: "linkedin-clone-ef7fb.appspot.com",
  messagingSenderId: "700431117362",
  appId: "1:700431117362:web:dac83e0067967b6608202b",
  measurementId: "G-7W72HZ7WTK"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
