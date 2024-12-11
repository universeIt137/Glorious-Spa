// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKORSmB0LXKjIhv4Ta5yOB7bsB2gzuCts",
    authDomain: "smartbeautybodyspa.firebaseapp.com",
    projectId: "smartbeautybodyspa",
    storageBucket: "smartbeautybodyspa.firebasestorage.app",
    messagingSenderId: "1026264080593",
    appId: "1:1026264080593:web:2466842bbe5598890425f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 
