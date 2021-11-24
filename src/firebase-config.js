import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCaaGw7obIgnCWAfeapT7Oe8JMHVBVLVtc",
    authDomain: "instagram-7b089.firebaseapp.com",
    databaseURL: "https://instagram-7b089-default-rtdb.firebaseio.com",
    projectId: "instagram-7b089",
    storageBucket: "instagram-7b089.appspot.com",
    messagingSenderId: "742125748325",
    appId: "1:742125748325:web:347b57e12eaa63aec4068c",
    measurementId: "G-F4933SPC4N"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore();