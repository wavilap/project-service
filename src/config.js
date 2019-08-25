import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyBfrjwQuG6MsGtuYzLDUP08XCUE3quZVXw",
  authDomain: "serviceproject-66193.firebaseapp.com",
  projectId: "serviceproject-66193"
})

let db = firebase.firestore()

export default db