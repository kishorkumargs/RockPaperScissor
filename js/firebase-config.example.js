// firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyYOUR_REAL_KEY",
    authDomain: "yourapp.firebaseapp.com",
    projectId: "yourapp",
    storageBucket: "yourapp.appspot.com",
    messagingSenderId: "XXXXXX",
    appId: "1:XXXX:web:YYYY"
};

firebase.initializeApp(firebaseConfig);
window.auth = firebase.auth();