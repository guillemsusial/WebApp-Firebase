import firebase from 'firebase/compat/app'
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBLmJNU0ypafWXu9jMhOgvXnzl49zZlGEk",
    authDomain: "quiz-m8-a77e6.firebaseapp.com",
    databaseURL: "https://quiz-m8-a77e6-default-rtdb.firebaseio.com",
    projectId: "quiz-m8-a77e6",
    storageBucket: "quiz-m8-a77e6.appspot.com",
    messagingSenderId: "870992771814",
    appId: "1:870992771814:web:583be2e3b7d6f99ac3d927"
}

if (firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
}

const db = getDatabase()

export {db}