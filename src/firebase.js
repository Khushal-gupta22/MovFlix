// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCinsA_IqEmJjiJirqu061vad-InAIt2oU",
  authDomain: "movflix-e2da9.firebaseapp.com",
  projectId: "movflix-e2da9",
  storageBucket: "movflix-e2da9.appspot.com",
  messagingSenderId: "310911718501",
  appId: "1:310911718501:web:56b48638068e858b9e228c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
