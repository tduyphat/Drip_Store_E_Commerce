import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDJr5YvoS2BVpqOsYqrFhjhs8afX1dp4Ds",
    authDomain: "drip-store-db.firebaseapp.com",
    projectId: "drip-store-db",
    storageBucket: "drip-store-db.appspot.com",
    messagingSenderId: "222923082796",
    appId: "1:222923082796:web:370f7e3eded4aa67ec1589"
};

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createAt = new Date()
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt
            })
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }
    return userDocRef
}