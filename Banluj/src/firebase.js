// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAZAB_WTTrkNpexT9zxnZINqKe_oeeIIxM',
  authDomain: 'banluj-app.firebaseapp.com',
  projectId: 'banluj-app',
  storageBucket: 'banluj-app.firebasestorage.app',
  messagingSenderId: '52523589280',
  appId: '1:52523589280:web:b1903485eb6eaa71e9b3c5',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };