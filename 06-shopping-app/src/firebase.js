// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUJ-ruBondPltaH3yRp3QF7ztvicbD8Zc",
  authDomain: "react-shop-test-db8e9.firebaseapp.com",
  projectId: "react-shop-test-db8e9",
  storageBucket: "react-shop-test-db8e9.appspot.com",
  messagingSenderId: "376938769409",
  appId: "1:376938769409:web:a842e5acfbd91368d7a400"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;