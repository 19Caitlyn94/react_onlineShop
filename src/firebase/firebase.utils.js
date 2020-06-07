import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCa9C_lEk5D9BnwtsqQM3HSx0f7632xoJg',
  authDomain: 'crown-db-c4e3e.firebaseapp.com',
  databaseURL: 'https://crown-db-c4e3e.firebaseio.com',
  projectId: 'crown-db-c4e3e',
  storageBucket: 'crown-db-c4e3e.appspot.com',
  messagingSenderId: '556983854876',
  appId: '1:556983854876:web:fbe04954591e29aefbbcd9',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); // Gives us access to GoogleAuthProvider
provider.setCustomParameters({ prompt: 'select_account' }); // Always trigger the google popup whenever we usee the GoogleAuthProvider for auth and signin
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
