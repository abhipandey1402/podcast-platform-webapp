// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPNBGX_8GB4klZjLv2XQnVemZZt50kxGQ",
  authDomain: "podcast-platform-webapp.firebaseapp.com",
  projectId: "podcast-platform-webapp",
  storageBucket: "podcast-platform-webapp.appspot.com",
  messagingSenderId: "258550993047",
  appId: "1:258550993047:web:68db327d2ac010a0e899d2",
  measurementId: "G-X6WQ99RSJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {db, auth, storage};

