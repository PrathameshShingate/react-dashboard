import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREASE_KEY,
  authDomain: "reactdashboard-4a32d.firebaseapp.com",
  projectId: "reactdashboard-4a32d",
  storageBucket: "reactdashboard-4a32d.appspot.com",
  messagingSenderId: "905979611802",
  appId: "1:905979611802:web:1363dac9e72da504a82d23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

