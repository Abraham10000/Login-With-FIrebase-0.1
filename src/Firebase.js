import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4O93KWtE9PjxC8G9iaQ7ycn2txLlPVak",
  authDomain: "login-909c1.firebaseapp.com",
  projectId: "login-909c1",
  storageBucket: "login-909c1.appspot.com",
  messagingSenderId: "151272088470",
  appId: "1:151272088470:web:9e07998cddb47d208633b7"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app); 
export default app;