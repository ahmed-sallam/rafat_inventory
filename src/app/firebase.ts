import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: 'AIzaSyA3o9YeqdirO4v_PpJxDzte2pPTMBl9lSI',
  authDomain: 'rafat-inventory.firebaseapp.com',
  projectId: 'rafat-inventory',
  storageBucket: 'rafat-inventory.appspot.com',
  messagingSenderId: '528543717574',
  appId: '1:528543717574:web:2200a4959cbb337d4a1fc7',
  measurementId: 'G-40NS2TDBBE',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
