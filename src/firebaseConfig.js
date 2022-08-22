import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB4_ZUKcW5wgr3No_pGiERE1gbBdD-xOJs",
  authDomain: "instagram-7138c.firebaseapp.com",
  projectId: "instagram-7138c",
  storageBucket: "instagram-7138c.appspot.com",
  messagingSenderId: "615569478018",
  appId: "1:615569478018:web:cac88154b84a847a213f9b",
  measurementId: "G-1R2MZRF6DE"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };