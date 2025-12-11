import 'dotenv/config';

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyATX8gcQhyGGcBHdBjdkWH0VFQoqxvmQCQ",
    authDomain: "nueva-carpeta-proyecto-final.firebaseapp.com",
    projectId: "nueva-carpeta-proyecto-final",
    storageBucket: "nueva-carpeta-proyecto-final.firebasestorage.app",
    messagingSenderId: "860912709630",
    appId: "1:860912709630:web:6601eaef2b063e8facdaaf",
  measurementId: "G-YG95VLKD27"
};
  


  // Initialize Firebase
const app = initializeApp(firebaseConfig);

  // Initialize Firestore
const db = getFirestore(app);

export { db };