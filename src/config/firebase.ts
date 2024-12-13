import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAjnEPAMQpvc6lJEcjSN7hgDLyJj8we7vw",
  authDomain: "patron-ai-app.firebaseapp.com",
  projectId: "patron-ai-app",
  storageBucket: "patron-ai-app.appspot.com",
  messagingSenderId: "396276549631",
  appId: "1:396276549631:web:15de131b4a4379c5aa49ca",
  measurementId: "G-WYS469C3Y2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);