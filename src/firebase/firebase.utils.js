import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAGnxZyR8sIYSAuRFspXIoCdqlC-LLO0-Y",
  authDomain: "crw-db-68313.firebaseapp.com",
  databaseURL: "https://crw-db-68313.firebaseio.com",
  projectId: "crw-db-68313",
  storageBucket: "crw-db-68313.appspot.com",
  messagingSenderId: "1041016297155",
  appId: "1:1041016297155:web:e3379c01c4d9c0bf8af476"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;