import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKk50XF-NlM6Y9KdFr0qEgkvPVWUVudWo",
  authDomain: "clone-6575.firebaseapp.com",
  projectId: "clone-6575",
  storageBucket: "clone-6575.appspot.com",
  messagingSenderId: "853021827009",
  appId: "1:853021827009:web:4a501e2324221218699940",
  measurementId: "G-BXJWGGX9WM",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
