import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDiPyNc-uFuQh658qwQGdYzkmJgcUGdMlY",
  authDomain: "crwn-db-1ea80.firebaseapp.com",
  databaseURL: "https://crwn-db-1ea80.firebaseio.com",
  projectId: "crwn-db-1ea80",
  storageBucket: "crwn-db-1ea80.appspot.com",
  messagingSenderId: "29928708028",
  appId: "1:29928708028:web:7eda447ebf1ff30e76bdb9",
  measurementId: "G-9N89CTG9X4"
};

firebase.initializeApp(config);

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
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
