import { initializeApp } from 'firebase/app';
import { env } from 'process';
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: `${env.REACT_APP_API_KEY}`,
    authDomain: `${env.REACT_APP_AUTH_DOMAIN}`,
    projectId: `${env.REACT_APP_PROJECT_ID}`,
    storageBucket: `${env.REACT_APP_STORAGE_BUCKET}`,
    messagingSenderId: `${env.REACT_APP_MESSAGINMG_SENDER_ID}`,
    appId: `${env.REACT_APP_APP_ID}`,
    measurementId: `${env.REACT_APP_MEASUREMENT_ID}`,
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