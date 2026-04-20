import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGtrOB5iwn7x4U0SsZdM1EbUQCpGmUMqc",
  authDomain: "cybercrakceracademy-backend.firebaseapp.com",
  projectId: "cybercrakceracademy-backend",
  storageBucket: "cybercrakceracademy-backend.firebasestorage.app",
  messagingSenderId: "245533879731",
  appId: "1:245533879731:web:86d608310c0612eeb06fc6",
  measurementId: "G-11G1HS31BR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
