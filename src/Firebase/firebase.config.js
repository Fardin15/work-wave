// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyLWftkEdaYGaNbAUgGqkJbbnaTj51MLI",
  authDomain: "work-wave-ad55e.firebaseapp.com",
  projectId: "work-wave-ad55e",
  storageBucket: "work-wave-ad55e.appspot.com",
  messagingSenderId: "375388561343",
  appId: "1:375388561343:web:71c079992f8bacc5168b0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
