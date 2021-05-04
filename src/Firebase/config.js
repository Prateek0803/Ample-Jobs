import app from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBlEfLebvRtUzi2P6UgpR2tNb_tnDiGYZk",
  authDomain: "job-portal-app-53bda.firebaseapp.com",
  projectId: "job-portal-app-53bda",
  storageBucket: "job-portal-app-53bda.appspot.com",
  messagingSenderId: "490444155101",
  appId: "1:490444155101:web:14dec64c0aeaee6eb51334",
};

const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export {firebase, firestore, app}