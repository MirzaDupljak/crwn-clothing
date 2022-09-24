import {initializeApp} from 'firebase/app'
import{
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword 
}from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCEs1OC3Tce1nCCnpTQwGPDPvWC5rRQD64",
    authDomain: "crwn-cloathing-amd.firebaseapp.com",
    projectId: "crwn-cloathing-amd",
    storageBucket: "crwn-cloathing-amd.appspot.com",
    messagingSenderId: "249753949688",
    appId: "1:249753949688:web:4c2318e8b503974fb8b20d"
  };
  
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const GoogleProvider= new GoogleAuthProvider();
GoogleProvider.setCustomParameters({
    promt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth,GoogleProvider);
export const signInWithGoogleRedirect =()=> signInWithRedirect(auth,GoogleProvider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth,additionalInfo={})=> {
  const userDocRef = doc (db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()){
    const {displayName , email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch(error){
        console.log('ERROR', error.message)
    }

  }
  return userDocRef
};
export const createAuthUserWithEmailAndPassword = async (email,password) =>{
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth,email,password);
}
export const signInAuthUserWithEmailAndPassword = async (email,password) =>{
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth,email,password);
}