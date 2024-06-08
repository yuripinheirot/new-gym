import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCyDBEEpTnEvdjb6NqXKVtzyjuhoFDS8R8',
  authDomain: 'gym-native-be1fe.firebaseapp.com',
  projectId: 'gym-native-be1fe',
  storageBucket: 'gym-native-be1fe.appspot.com',
  messagingSenderId: '56095563364',
  appId: '1:56095563364:web:cb3997a1cb13b2efaa8971',
  measurementId: 'G-YVQR44F4L0',
}

const app = firebase.initializeApp(firebaseConfig)

export const db = firestore.initializeFirestore(app)
