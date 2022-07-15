import  firebase from 'firebase'

  const firebaseConfig = {

  apiKey: "AIzaSyAGT-GkdTrxLGm1tBu7iCM9kB8Z5P4wHoQ",
  authDomain: "stock-4323c.firebaseapp.com",
  databaseURL: "https://stock-4323c-default-rtdb.firebaseio.com",
  projectId: "stock-4323c",
  storageBucket: "stock-4323c.appspot.com",
  messagingSenderId: "27030915428",
  appId: "1:27030915428:web:81c35f44e76081b13d9271"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();