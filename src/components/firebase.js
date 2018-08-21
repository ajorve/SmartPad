import firebase from 'firebase'
import apiKey from './secrets/apiKey'

const config = {
    apiKey: apiKey,
    authDomain: "smartpad-reactjs-db.firebaseapp.com",
    databaseURL: "https://smartpad-reactjs-db.firebaseio.com",
    projectId: "smartpad-reactjs-db",
    storageBucket: "smartpad-reactjs-db.appspot.com",
    messagingSenderId: "813236777737"
}

const firebaseApp = firebase.initializeApp(config)

export default firebaseApp