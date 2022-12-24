import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

/* const app = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
}) */

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYwnSdV36HjvAFjCtO1FavLGVq6gRJ_rQ",
    authDomain: "auth-test-202f0.firebaseapp.com",
    projectId: "auth-test-202f0",
    storageBucket: "auth-test-202f0.appspot.com",
    messagingSenderId: "928898080011",
    appId: "1:928898080011:web:7a5936594da2e2b891d60e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app
