import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBf1obYsI_JjS0mkLZC_F0IblTHH0FrtFQ",
    authDomain: "fir-project-1-d7839.firebaseapp.com",
    projectId: "fir-project-1-d7839",
    storageBucket: "fir-project-1-d7839.firebasestorage.app",
    messagingSenderId: "965624308102",
    appId: "1:965624308102:web:37329f4e676ac5ca65cc07"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Add Firestore export