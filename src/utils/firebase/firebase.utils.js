import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDXg2ZgCk_J9GHEFNo_1mFiugbOeLVCSqI",
    authDomain: "crownwil-db.firebaseapp.com",
    projectId: "crownwil-db",
    storageBucket: "crownwil-db.appspot.com",
    messagingSenderId: "784657526562",
    appId: "1:784657526562:web:421ca613e8070ca265ff7b"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });
  
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);