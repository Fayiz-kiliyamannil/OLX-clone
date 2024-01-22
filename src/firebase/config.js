import firebase from 'firebase';
import 'firebase/auth';
 import  'firebase/firebase'
 import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZ17op8HML4eNoQag_BaX0M2yxrVhltOc",
    authDomain: "fir-495c8.firebaseapp.com",
    projectId: "fir-495c8",
    storageBucket: "fir-495c8.appspot.com",
    messagingSenderId: "436268691429",
    appId: "1:436268691429:web:e1c1f762130b74d438090c",
    measurementId: "G-83YJQNT1YF"
  };

   export default  firebase.initializeApp(firebaseConfig)