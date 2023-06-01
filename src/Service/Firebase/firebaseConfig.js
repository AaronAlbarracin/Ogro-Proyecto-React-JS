import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDV6787fAg3_AeKnPExTvCR5NilOaydMAo",
  authDomain: "ogro-29493.firebaseapp.com",
  projectId: "ogro-29493",
  storageBucket: "ogro-29493.appspot.com",
  messagingSenderId: "677598588075",
  appId: "1:677598588075:web:ee4937340aeb5dcc1adbee",
  measurementId: "G-CC6ZGLKY38"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
