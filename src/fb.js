import { initializeApp } from 'firebase/app';
import { env } from 'process';
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: `AIzaSyCK4cRMMqg4TP2EbVinMESGoe6XbVMujqg`,
    authDomain: `tormetesting.firebaseapp.com`,
    projectId: `tormetesting`,
    storageBucket: `tormetesting.appspot.com`,
    messagingSenderId: `924820813100`,
    appId: `1:924820813100:web:3297c00aa8859ed3c52889`,
    measurementId: `G-9RB3BB40BR`,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(); 

export const loginUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCred) => {
        return userCred.user;
    })
    .catch((err) => {
        return [err.code, err.message];
    })
}

export default app;