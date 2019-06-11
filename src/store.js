import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
// Reducers
// @todo

const firebaseConfig = {
  apiKey: "AIzaSyBWFvCEu2iBHKvvKyvsZA40ekwqRAQYDU8",
  authDomain: "reactclientpanel-ca0eb.firebaseapp.com",
  databaseURL: "https://reactclientpanel-ca0eb.firebaseio.com",
  projectId: "reactclientpanel-ca0eb",
  storageBucket: "reactclientpanel-ca0eb.appspot.com",
  messagingSenderId: "61365985292"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true //Firestore for Profile instead of realtime DB
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore
const firestore = firebase.firestore();

// settings
const settings = {};
firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// initial state
const initialState = {};

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
