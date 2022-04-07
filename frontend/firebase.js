// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCM8oOj1cDwCvVwXi2tuBpngZu_TuQPfNk",
    authDomain: "grupeers-6057c.firebaseapp.com",
    projectId: "grupeers-6057c",
    storageBucket: "grupeers-6057c.appspot.com",
    messagingSenderId: "270075909384",
    appId: "1:270075909384:web:82a27c72667d132b8188bd",
    measurementId: "G-9CX00TCQQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

export { auth, db };