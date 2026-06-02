// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "loginvirtualcourses-5b992.firebaseapp.com",
  projectId: "loginvirtualcourses-5b992",
  storageBucket: "loginvirtualcourses-5b992.firebasestorage.app",
  messagingSenderId: "813196930784",
  appId: "1:813196930784:web:23cc0003491bb94af32a85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };