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

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;