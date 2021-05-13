import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'instagram-pac.firebaseapp.com',
  projectId: 'instagram-pac',
  storageBucket: 'instagram-pac.appspot.com',
  messagingSenderId: '380604647019',
  appId: '1:380604647019:web:6a4bd4f3859f762081d32e',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
