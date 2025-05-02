// firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

// ✅ Ton vrai config Firebase ici
const firebaseConfig = {
  apiKey: "AIzaSyCX1wg0KXILkWVFJBD9QW0rmSFI8gAFDvg",
  authDomain: "myportfolio-1c456.firebaseapp.com",
  projectId: "myportfolio-1c456",
  storageBucket: "myportfolio-1c456.appspot.com",
  messagingSenderId: "584924503644",
  appId: "1:584924503644:web:b2605f0b88a62085df1099"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

const provider = new GoogleAuthProvider()
export const signInWithGoogle = () => signInWithPopup(auth, provider)
