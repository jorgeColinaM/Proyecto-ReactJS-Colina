import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Checkout from "../components/Checkout/Checkout";
export const db = getFirestore(Checkout)

const firebaseConfig = {
  apiKey: "AIzaSyArkxIRkJC-rpdMyDDhdzh-l5r59sOe1sY",
  authDomain: "colina-47230.firebaseapp.com",
  projectId: "colina-47230",
  storageBucket: "colina-47230.appspot.com",
  messagingSenderId: "1036881220774",
  appId: "1:1036881220774:web:245575179281ebaacf1067"
};

initializeApp(firebaseConfig);