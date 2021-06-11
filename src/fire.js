import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBXtKMYYmLsNTJ9hcOrNhTlRx5Z3fe9yhM",
  authDomain: "calculator-72c5b.firebaseapp.com",
  projectId: "calculator-72c5b",
  storageBucket: "calculator-72c5b.appspot.com",
  messagingSenderId: "37289751472",
  appId: "1:37289751472:web:2468e037111cfa28335c75",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
