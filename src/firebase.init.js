// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkFEKxzRL1xBqt4yOyE0EYEfZQOvT_3pU",
  authDomain: "doctor-portel.firebaseapp.com",
  projectId: "doctor-portel",
  storageBucket: "doctor-portel.appspot.com",
  messagingSenderId: "258966137416",
  appId: "1:258966137416:web:0785d674c021d030e1467d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth