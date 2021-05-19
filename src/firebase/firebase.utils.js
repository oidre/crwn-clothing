import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCsPrd17UrCh6f-6_1hMPi-lywS5INd8-8",
  authDomain: "crwn-db-52ce8.firebaseapp.com",
  projectId: "crwn-db-52ce8",
  storageBucket: "crwn-db-52ce8.appspot.com",
  messagingSenderId: "873893398102",
  appId: "1:873893398102:web:84df627b3817355e871df7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;