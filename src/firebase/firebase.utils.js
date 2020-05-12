import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCLIaNWq4viBMpj1TSI0RUZpERy7wp80ks',
  authDomain: 'e-comerce-db-497a6.firebaseapp.com',
  databaseURL: 'https://e-comerce-db-497a6.firebaseio.com',
  projectId: 'e-comerce-db-497a6',
  storageBucket: 'e-comerce-db-497a6.appspot.com',
  messagingSenderId: '588111283508',
  appId: '1:588111283508:web:7c9e88c6220454ce26d161',
  measurementId: 'G-2VZ8PRG03Z'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
