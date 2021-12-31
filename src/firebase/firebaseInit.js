import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCzxWDfjmGzj9A1UoPD7VGbd9Ii76G0aDY",
    authDomain: "justblogsyt.firebaseapp.com",
    projectId: "justblogsyt",
    storageBucket: "justblogsyt.appspot.com",
    messagingSenderId: "523889674115",
    appId: "1:523889674115:web:558b969d41bccd3d9498b6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {timeStamp};
export default firebaseApp.firestore();

