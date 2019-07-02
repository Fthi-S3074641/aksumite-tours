import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAV0HY2ElaPE8GJIKOai0btscdHaZq3J4U",
  authDomain: "axumitetours.firebaseapp.com",
  databaseURL: "https://axumitetours.firebaseio.com",
  projectId: "axumitetours",
  storageBucket: "axumitetours.appspot.com",
  messagingSenderId: "102780514692",
  appId: "1:102780514692:web:653811aceb823ffc"
});

export const db = firebaseApp.firestore();