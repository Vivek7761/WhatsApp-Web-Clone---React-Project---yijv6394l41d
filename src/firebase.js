import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2ISPwVelPUsbrlryqtEKaL1Oun3Q7h80",
  authDomain: "whatsapp-clone-73c32.firebaseapp.com",
  projectId: "whatsapp-clone-73c32",
  storageBucket: "whatsapp-clone-73c32.appspot.com",
  messagingSenderId: "777938607",
  appId: "1:777938607:web:a2425c34daf96d5778565a",
  measurementId: "G-C6JVP9Y9B6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const authentication = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { database, authentication, provider };
