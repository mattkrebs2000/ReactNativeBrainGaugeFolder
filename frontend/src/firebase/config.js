import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCIEl0IQXIPsXWjw9ypbUXjB0AgcwASeuM",
  authDomain: "reactnativebraingauge.firebaseapp.com",
  databaseURL: "https://reactnativebraingauge.firebaseio.com",
  projectId: "reactnativebraingauge",
  storageBucket: "reactnativebraingauge.appspot.com",
  messagingSenderId: "607391463447",
  appId: "1:607391463447:web:cc4aa2deccb02e52024452",
  measurementId: "G-1BM4XPZWXK",
  
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
