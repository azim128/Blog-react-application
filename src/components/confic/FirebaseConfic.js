import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB4D5mdFTBXqMUWqMBfDfSuTUHbJFw7Nf0",
  authDomain: "protfolio-project-163cb.firebaseapp.com",
  projectId: "protfolio-project-163cb",
  storageBucket: "protfolio-project-163cb.appspot.com",
  messagingSenderId: "715800912150",
  appId: "1:715800912150:web:4a8624b3c0a0701eb93037"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const Auth = getAuth(app);
export const provider = new GoogleAuthProvider();