import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth"
import {

} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDNzmyPGWAGhC_1ugk-yGGExJg7EnoN-bE",
  authDomain: "elite-25ede.firebaseapp.com",
  projectId: "elite-25ede",
  storageBucket: "elite-25ede.appspot.com",
  messagingSenderId: "118731321843",
  appId: "1:118731321843:web:bdacd58eb9fb0f43622286",
  measurementId: "G-FWKTWKHZ1Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()

export const signInUserWithEmailAndPassword = async({email, password}) => {

}
