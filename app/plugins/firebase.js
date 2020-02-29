import firebase from 'firebase/app'
import 'firebase/firestore'

// firebaseの初期化処理
if (!firebase.apps.length) {
  firebase.initializeApp({
    projectId: process.env.PROJECTID
  })
  // firebase.analytics()
}

export default firebase
export const db = firebase.firestore()
export const bindDetectDataRef = db.collection('detectData')
