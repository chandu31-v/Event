// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import config from "./config"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: config.apiKey,
//   authDomain: config.authDomain,
//   projectId: config.projectId,
//   storageBucket: config.storageBucket,
//   messagingSenderId: config.messagingSenderId,
//   appId: config.appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBk_DBvmH8aksHRzg4MFlr7aSGavhzafWU",
  authDomain: "event-ac257.firebaseapp.com",
  projectId: "event-ac257",
  storageBucket: "event-ac257.appspot.com",
  messagingSenderId: "431688721860",
  appId: "1:431688721860:web:96b191ce4bf69d87d73091"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//Authentication
const auth = getAuth(app)

export async function SiginFun(email, password) {

  try {
    //console.log(email,password)
    const accountCreated = await createUserWithEmailAndPassword(auth, email, password)
    const user = accountCreated.user
    console.log(accountCreated)
  } catch (error) {
    console.log("error while sigining", error)
  }

}

export async function LoginFun(email, password) {

  try {
    const accountLogedIn = await signInWithEmailAndPassword(auth, email, password)
    const user = accountLogedIn.user
    return user
  } catch (error) {
    throw new Error(error)
  }

}

export function logout() {

}
