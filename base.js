import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBsL_LVl89hkhHe6xgtuZxyWK9yzcNoQb0",
    authDomain: "wesbossample.firebaseapp.com",
    databaseURL: "https://wesbossample.firebaseio.com",
})


const base = Rebase.createClass(firebaseApp.database());

// this is the named export
export { firebaseApp };

// this is the default export
export default base;