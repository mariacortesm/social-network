/* eslint-disable max-len */
/* eslint-disable no-console */
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  // GoogleAuthProvider,
  // signInWithRedirect,
  // getRedirectResult,
  // onAuthStateChanged,
} from 'firebase/auth';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBoksBP2QG9EJ8irLNvEFyYmGjRi142OSE',
  authDomain: 'social-network-namnam.firebaseapp.com',
  projectId: 'social-network-namnam',
  storageBucket: 'social-network-namnam.appspot.com',
  messagingSenderId: '307339733356',
  appId: '1:307339733356:web:e06952230f8be8399d2b49',
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...navigateTo('/')
//   }
// });
