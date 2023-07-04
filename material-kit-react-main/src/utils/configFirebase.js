// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export function configFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyA7EP4bvgVZdPUQWJg5xXGK2kxdIZtvKm8",
    authDomain: "ejemplo-material-design.firebaseapp.com",
    projectId: "ejemplo-material-design",
    storageBucket: "ejemplo-material-design.appspot.com",
    messagingSenderId: "79483401017",
    appId: "1:79483401017:web:47fe01751c76349a71aee8",
    measurementId: "G-V2F9GYM2JH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
}