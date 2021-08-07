import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC5XcF3PdlJS-IAcBVXxNSn0zWQw5mc40s',
  authDomain: 'wheres-waldo-96fdc.firebaseapp.com',
  projectId: 'wheres-waldo-96fdc',
  storageBucket: 'wheres-waldo-96fdc.appspot.com',
  messagingSenderId: '922907798250',
  appId: '1:922907798250:web:571d0e497ecd4f11f24593',
  measurementId: 'G-KHF84NPBH0',
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export default firestore;
