// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsC4CUIRQglyvziASQ3g4JYfJMzgN5XCk",
  authDomain: "my-project-d19cb.firebaseapp.com",
  projectId: "my-project-d19cb",
  storageBucket: "my-project-d19cb.firebasestorage.app",
  messagingSenderId: "553502556756",
  appId: "1:553502556756:web:130eae240edf9b8252a3c1",
  measurementId: "G-VL3T8G6Z9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth()
const provider = new GoogleAuthProvider()

export { auth, provider}