import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF9lNSxPVzVEKszjvAMY3yFUSrlk2bFlw",
  authDomain: "busybuy-3c676.firebaseapp.com",
  projectId: "busybuy-3c676",
  storageBucket: "busybuy-3c676.appspot.com",
  messagingSenderId: "437770437941",
  appId: "1:437770437941:web:50400e10d8c468fe6bb87c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);