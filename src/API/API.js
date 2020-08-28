import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'

firebase.initializeApp({
    apiKey: "AIzaSyDIGxiDTnFCnov6J5IX6gGOSLjpQqEpHxw",
    authDomain: "castcorm.firebaseapp.com",
    databaseURL: "https://castcorm.firebaseio.com",
    projectId: "castcorm",
    storageBucket: "castcorm.appspot.com",
    messagingSenderId: "472888292464",
    appId: "1:472888292464:web:c8f561d1a46258b7bd70b5"
});

export const getDataCards = () => {
    return firebase.database().ref('cards').once('value').then(r => r.val())

}

