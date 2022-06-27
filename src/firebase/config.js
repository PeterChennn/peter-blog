import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA2O5xmhbwr8yoRtxwmOOJA5oXZ7AtlGyU',
  authDomain: 'vue-firebase-sites-de191.firebaseapp.com',
  projectId: 'vue-firebase-sites-de191',
  storageBucket: 'vue-firebase-sites-de191.appspot.com',
  messagingSenderId: '266426501855',
  appId: '1:266426501855:web:6afc576629f6dbf30f376a',
};

//init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
