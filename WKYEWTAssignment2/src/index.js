import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyByfYx5TbVPoqSHzVFyzKdCWgjwIqf1LHo",
    authDomain: "kaiyin-demo.firebaseapp.com",
    projectId: "kaiyin-demo",
    storageBucket: "kaiyin-demo.appspot.com",
    messagingSenderId: "513530865667",
    appId: "1:513530865667:web:8e5bcf59112e96e2968636"
});

const auth = getAuth(firebaseApp);
const db= getFirestore(firebaseApp);


