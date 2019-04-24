import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCj-xAuISPXRQ-fLaiazImC7juD72yd83w',
  authDomain: 'comments-devreactoto.firebaseapp.com',
  databaseURL: 'https://comments-devreactoto.firebaseio.com',
  projectId: 'comments-devreactoto',
  storageBucket: 'comments-devreactoto.appspot.com',
  messagingSenderId: '931381796810'
};
firebase.initializeApp(config);

export const database = firebase.database();
