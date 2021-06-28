import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAR-F0k5VDefujldYHqQscsResYvwBInBk",
    authDomain: "fireblogsyt-d2990.firebaseapp.com",
    projectId: "fireblogsyt-d2990",
    storageBucket: "fireblogsyt-d2990.appspot.com",
    messagingSenderId: "775751658463",
    appId: "1:775751658463:web:a884fd28eceb927280b26a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp };
  export default firebaseApp.firestore();