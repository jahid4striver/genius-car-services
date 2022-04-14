// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAlYRupJQCMwXmo7PCj6KFw6jGxGGg3IY",
  authDomain: "genius-car-services-8b8bd.firebaseapp.com",
  projectId: "genius-car-services-8b8bd",
  storageBucket: "genius-car-services-8b8bd.appspot.com",
  messagingSenderId: "457723277453",
  appId: "1:457723277453:web:d9ae1f645131f958eeb2c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);

export default auth;