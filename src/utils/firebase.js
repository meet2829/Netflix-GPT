
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCzRd-xkTGtqZCQNQ-tMlOeY3QvHg5yIeE",
  authDomain: "netflixgpt-eb4a5.firebaseapp.com",
  projectId: "netflixgpt-eb4a5",
  storageBucket: "netflixgpt-eb4a5.firebasestorage.app",
  messagingSenderId: "35621097581",
  appId: "1:35621097581:web:b49601e5f80fff1fb66f64",
  measurementId: "G-5ZXQY3PK4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);