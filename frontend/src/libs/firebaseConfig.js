import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAniIftUPSiUjkDP5D6__3Ysyc3UDc73xM",
  authDomain: "expensense-387b2.firebaseapp.com",
  projectId: "expensense-387b2",
  storageBucket: "expensense-387b2.firebasestorage.app",
  messagingSenderId: "1022352371914",
  appId: "1:1022352371914:web:34def600724a5ee9354433",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
