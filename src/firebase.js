// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCYsEqQokj35uttCLI-y2O2e21BZ3Hjr_M',
  authDomain: 'vodinhphuc-portfilio.firebaseapp.com',
  projectId: 'vodinhphuc-portfilio',
  storageBucket: 'vodinhphuc-portfilio.appspot.com',
  messagingSenderId: '672476764004',
  appId: '1:672476764004:web:f015c03e305c3783470c71',
  measurementId: 'G-1NPZG3KPFC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
