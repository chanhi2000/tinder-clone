import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBttf_R7_ylBfJTqIt9AUDPMzG2HYZZ814",
    authDomain: "tinder-clone-8ae26.firebaseapp.com",
    databaseURL: "https://tinder-clone-8ae26.firebaseio.com",
    projectId: "tinder-clone-8ae26",
    storageBucket: "tinder-clone-8ae26.appspot.com",
    messagingSenderId: "234634992266",
    appId: "1:234634992266:web:17ef872fd35b60efd96b73",
    measurementId: "G-868TEY0MRK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;