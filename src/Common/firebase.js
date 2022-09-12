import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDbQhIHZdpmAEYRUXxFFx79bFFU9pnAhQQ",
    authDomain: "portfolio-72b26.firebaseapp.com",
    projectId: "portfolio-72b26",
    storageBucket: "portfolio-72b26.appspot.com",
    messagingSenderId: "585601089745",
    appId: "1:585601089745:web:65febe4585fc2890fe45f0",
    measurementId: "G-YVQ50JJ9YR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;