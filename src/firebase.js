import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import config from './config'

// const config = {};

firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };


// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import config from './config'

// // const config = {};

// const app = initializeApp(config);
// export const auth = getAuth();
// export const db = getFirestore();

// export default app;

