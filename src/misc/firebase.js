import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyBk5NUwLZ2GIk1tGxado-SUAju8m0OC9Wk',
  authDomain: 'friendlychat-4ea48.firebaseapp.com',
  projectId: 'friendlychat-4ea48',
  storageBucket: 'friendlychat-4ea48.appspot.com',
  messagingSenderId: '756256783876',
  appId: '1:756256783876:web:3ec5ae128c05a80649ff51',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
