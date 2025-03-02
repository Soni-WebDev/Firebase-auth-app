import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJFeQ3HiWYFnI9aeWVXCyPQxAMudlsrZw",
  authDomain: "fir-authentication-be40a.firebaseapp.com",
  projectId: "fir-authentication-be40a",
  storageBucket: "fir-authentication-be40a.firebasestorage.app",
  messagingSenderId: "766765334186",
  appId: "1:766765334186:web:8754a39ae344951ecb9ad3",
  measurementId: "G-N9N8CQ8WLF"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);