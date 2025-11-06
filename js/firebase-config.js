// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBK8kvYJ5PVaA44vpk4T1e40gWthOKctM4",
    authDomain: "rockpaperscissor-ddb1e.firebaseapp.com",
    projectId: "rockpaperscissor-ddb1e",
    storageBucket: "rockpaperscissor-ddb1e.firebasestorage.app",
    messagingSenderId: "13076959693",
    appId: "1:13076959693:web:6adde601993e019f817484"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

window.auth = auth;