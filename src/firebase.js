import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9f0z7L6_NO_GkU0KPDhf2foxREJOr6ps",
  authDomain: "moviedux-afb4d.firebaseapp.com",
  projectId: "moviedux-afb4d",
  storageBucket: "moviedux-afb4d.appspot.com",
  messagingSenderId: "124063686050",
  appId: "1:124063686050:web:55cc59c53329ee0707a6fb",
  measurementId: "G-2604NN4ENLW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Storage so you can use them anywhere
export const db = getFirestore(app);
export const storage = getStorage(app);
