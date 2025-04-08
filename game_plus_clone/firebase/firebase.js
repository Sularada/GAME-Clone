
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXxp9r9Wl6Sy-e3Xj3RIY5LATVW3eCcRo",
  authDomain: "game-plus-database.firebaseapp.com",
  projectId: "game-plus-database",
  storageBucket: "game-plus-database.firebasestorage.app",
  messagingSenderId: "115398640644",
  appId: "1:115398640644:web:f0913048fe97e34d28e151",
  measurementId: "G-5H605WMRE0",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, app, db };