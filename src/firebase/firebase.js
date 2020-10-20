import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import firebaseConfig from './config'

const firebase = app
firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.firestore()

function getUserName() {
    return firebase.auth().currentUser.displayName
}

function getProfilePicUrl() {
    return firebase.auth().currentUser.photoURL
}
async function register(email, password, name) {
    return auth
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result)
            return result.user.updateProfile({
                displayName: name,
            })
        })
        .then(() => auth.currentUser)
        .catch((e) => e)
}

function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
}

function signOut() {
    return auth.signOut()
}

function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
}

function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return auth.signInWithPopup(provider)
}

// DB FUNCTIONS

function getTweets() {
    let tweets
    let data = db
        .collection('tweets')
        .get()
        .then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => doc.data())
            return data
        })

    return data
}

function makeTweet(text) {
    return db.collection('tweets').add({
        text: text,
        name: getUserName(),
        profilePicUrl: getProfilePicUrl(),
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        likes: 0,
    })
}

export default firebase

export {
    signOut,
    signInWithGoogle,
    auth,
    register,
    login,
    getTweets,
    makeTweet,
}
