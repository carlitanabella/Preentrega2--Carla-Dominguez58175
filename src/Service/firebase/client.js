import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAsRnEP-Vm9OiRJ7vkVWYxwAFt87J0mnBo",
    authDomain: "goodvibes-ecommerce58175.firebaseapp.com",
    projectId: "goodvibes-ecommerce58175",
    storageBucket: "goodvibes-ecommerce58175.appspot.com",
    messagingSenderId: "852530029215",
    appId: "1:852530029215:web:56390236e91d595159f8aa"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);