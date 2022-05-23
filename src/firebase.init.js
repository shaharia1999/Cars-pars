// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJRWifE_VsC3tw20yse_XCzyB9tVotzw0",
  authDomain: "cars-parts-11bbb.firebaseapp.com",
  projectId: "cars-parts-11bbb",
  storageBucket: "cars-parts-11bbb.appspot.com",
  messagingSenderId: "415549111138",
  appId: "1:415549111138:web:003a861015ba534ed68a3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;
