import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

import firebaseConfig from './config'

const firebase = app
firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore
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
            return result.user.updateProfile({
                displayName: name,
            })
        })
        .then(() => {
            db.collection('users').doc(auth.currentUser.uid).set({
                displayName: auth.currentUser.displayName,
                uid: auth.currentUser.uid,
                likedTweets: [],
                following: [],
            })
            return auth.currentUser
        })
        .catch((e) => Promise.reject(e))
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

function changePicUrl(pic) {
    const user = auth.currentUser
    if (pic) {
        document.querySelector('#loading-handler').click()
        const storageRef = firebase.storage().ref()
        storageRef
            .child('images/' + user.uid)
            .put(pic)
            .then((fileSnapshot) => {
                // Get photo url
                return fileSnapshot.ref.getDownloadURL().then((url) => {
                    // update user photo

                    db.collection('tweets')
                        .where('userUid', '==', auth.currentUser.uid)
                        .get()
                        .then((snapshot) => {
                            console.log(snapshot)
                            snapshot.forEach((doc) => {
                                db.collection('tweets')
                                    .doc(doc.id)
                                    .update({ profilePicUrl: url })
                            })
                        })

                    return user.updateProfile({
                        photoURL: url,
                    })
                })
            })
            .then(() => {
                document.querySelector('#loading-handler').click()
            })
            .catch((e) => {
                console.log(e)
            })

        // auth.currentUser.updateProfile({
        //     photoURL: pic,
        // })
    }
}

// DB FUNCTIONS

function makeTweet(text) {
    return db.collection('tweets').add({
        text: text,
        name: getUserName(),
        profilePicUrl: getProfilePicUrl(),
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        likes: 0,
        userUid: auth.currentUser.uid,
    })
}

export default firebase

export {
    firestore,
    db,
    signOut,
    signInWithGoogle,
    auth,
    register,
    login,
    makeTweet,
    changePicUrl,
}
