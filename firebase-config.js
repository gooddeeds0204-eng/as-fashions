import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBgIseofAVL0KA5XJ4TICetI6R4XKfNZAM",
  authDomain: "as-fashions-f0e91.firebaseapp.com",
  projectId: "as-fashions-f0e91",
  storageBucket: "as-fashions-f0e91.firebasestorage.app",
  messagingSenderId: "152604088667",
  appId: "1:152604088667:web:c1d2b2e487ab6d4e84e27e",
  measurementId: "G-Q784YCEQJF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
