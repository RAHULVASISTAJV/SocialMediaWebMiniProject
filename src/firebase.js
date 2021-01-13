  import firebase from "firebase";


  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDF3fkpua3nduC2iF6PlTn_mjgUPxw4sX8",
    authDomain: "socialmedia-6487c.firebaseapp.com",
    databaseURL: "https://socialmedia-6487c.firebaseio.com",
    projectId: "socialmedia-6487c",
    storageBucket: "socialmedia-6487c.appspot.com",
    messagingSenderId: "1006161753075",
    appId: "1:1006161753075:web:c0d6266894988c1c479886",
    measurementId: "G-8WLY068B15"
 });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
  export { db, auth, storage };


  //exporrt default db;