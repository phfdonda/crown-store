import { initializeApp } from "firebase/app"
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth"

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDe0eA2XlX5X1slxcrHBudMagK-h-9oVlA",
    authDomain: "crwn-db-df7b0.firebaseapp.com",
    projectId: "crwn-db-df7b0",
    storageBucket: "crwn-db-df7b0.appspot.com",
    messagingSenderId: "994872965987",
    appId: "1:994872965987:web:189891c77f19e770ccb156",
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export async function createUserDocumentFromAuth(userAuth) {
    const userDocRef = doc(db, "users", userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, { displayName, email, createdAt })
        } catch (error) {
            console.log("An error ocurred!", error.message)
        }
    }

    return userDocRef
}
