// ===============================
// FIREBASE CONFIGURATION
// ===============================

const firebaseConfig = {
  apiKey: "AIzaSyA3buYVJmqeri0_KT91M7uW-WYfWNJi60",
  authDomain: "secret-assignment.firebaseapp.com",
  projectId: "secret-assignment",
  storageBucket: "secret-assignment.firebasestorage.app",
  messagingSenderId: "38357243416",
  appId: "1:38357243416:web:25b1df3bb1f44bdff6556d",
  measurementId: "G-1DJ8B4XCDQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore Database
const db = firebase.firestore();