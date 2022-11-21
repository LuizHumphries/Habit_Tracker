// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0TJromopYVRIVD35HW1a2JZWJGObcz2M",
  authDomain: "habit-tracker-2022.firebaseapp.com",
  projectId: "habit-tracker-2022",
  storageBucket: "habit-tracker-2022.appspot.com",
  messagingSenderId: "141794287106",
  appId: "1:141794287106:web:c53060f576dfb6ed94d11b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
