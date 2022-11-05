// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkzCV17m0j_RI2pLESB5BGJe6RgPn6SpI",
  authDomain: "altschool-assignment.firebaseapp.com",
  projectId: "altschool-assignment",
  storageBucket: "altschool-assignment.appspot.com",
  messagingSenderId: "150321971536",
  appId: "1:150321971536:web:446ba19ebf78b4f1766c55",
  measurementId: "G-YS0Q7RLZHM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
