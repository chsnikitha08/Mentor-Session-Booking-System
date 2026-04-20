import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDmVc4Fb2RiMtqTbQCuYRukHarYP0DcXDA",
  authDomain: "mentorstudent-session-booking.firebaseapp.com",
  projectId: "mentorstudent-session-booking",
  storageBucket: "mentorstudent-session-booking.firebasestorage.app",
  messagingSenderId: "227280946400",
  appId: "1:227280946400:web:5560600bbca2ea0751fc85",
  measurementId: "G-BH7RWL5RL6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { app, auth, db, analytics };
