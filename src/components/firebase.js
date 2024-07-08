// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBylJyC657TXFdV3KF6tiBJk_ANXtgiBdY",
  authDomain: "yt-music-clone-54d4f.firebaseapp.com",
  databaseURL: "https://yt-music-clone-54d4f-default-rtdb.firebaseio.com",
  projectId: "yt-music-clone-54d4f",
  storageBucket: "yt-music-clone-54d4f.appspot.com",
  messagingSenderId: "47256296388",
  appId: "1:47256296388:web:63752125ad60ee35b26291",
  measurementId: "G-CEYB8JEXY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth(app);
export const db=getFirestore(app);
export default app;