import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyDiPyNc-uFuQh658qwQGdYzkmJgcUGdMlY",
    authDomain: "crwn-db-1ea80.firebaseapp.com",
    databaseURL: "https://crwn-db-1ea80.firebaseio.com",
    projectId: "crwn-db-1ea80",
    storageBucket: "crwn-db-1ea80.appspot.com",
    messagingSenderId: "29928708028",
    appId: "1:29928708028:web:7eda447ebf1ff30e76bdb9",
    measurementId: "G-9N89CTG9X4"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase