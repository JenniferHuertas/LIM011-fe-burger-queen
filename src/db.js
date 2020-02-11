import * as firebase from 'firebase/app';
import 'firebase/firestore';

const conf = {
  apiKey: 'AIzaSyDzVcT4T1P6PetCQh4tydZT6pK50R__QDk',
  authDomain: 'burger-queen-jenn.firebaseapp.com',
  databaseURL: 'https://burger-queen-jenn.firebaseio.com',
  projectId: 'burger-queen-jenn',
  storageBucket: 'burger-queen-jenn.appspot.com',
  messagingSenderId: '850850160991',
  appId: '1:850850160991:web:7f5ecc27b205c998d4d6ea',
  measurementId: 'G-T2V0N9F4ZS',
};

const db = firebase.initializeApp(conf).firestore();

export default db;
