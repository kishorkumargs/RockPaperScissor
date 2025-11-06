const rememberMe = document.getElementById('rememberMe');
const emailInput = document.getElementById('email');
const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-btn');
const auth = window.auth;
const db = window.db;

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("Event listener works!")
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log("Executing try-catch block");
    try {
        console.log("Inside try block!");
        console.log("Signing in");
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        console.log("Login successful");
        localStorage.setItem('userEmail', user.email);
        
        if (rememberMe.checked) localStorage.setItem('rememberedEmail', email);
        else localStorage.removeItem('rememberedEmail');

        // Fetch user score from Firestore
        const doc = await db.collection('users').doc(user.uid).get();
        let userData = {};
        if (doc.exists) {
            userData = doc.data();
            console.log("Document already exists!");
        } else {
            // If doc doesn't exist yet, create a default one
            const name = localStorage.getItem('name');
            userData = { name: name, highScore: 0, totalGames: 0 };
            await db.collection('users').doc(user.uid).set(userData);
            console.log("Default user object created!");
        }
        console.log("Setting user object in localStorage");
        // Store user data in localStorage/sessionStorage
        localStorage.setItem('user', JSON.stringify({
            uid: user.uid,
            name: userData.name,
            highScore: userData.highScore,
            totalGames: userData.totalGames
        }));
        console.log(localStorage.getItem('user'));
        sessionStorage.setItem('showPopUp', 'true');
        window.location = 'rock-paper-scissor.html';
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
})
document.getElementById('forgotPassword').addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();

    if (!email) return alert('Please enter your email first.');

    try {
        await firebase.auth().sendPasswordResetEmail(email);
        alert('Password reset email sent!');
    } catch (error) {
        alert(error.message);
    }
});
document.getElementById('home-btn').addEventListener('click', () => {
    btnClickSound.play();
    setTimeout(() => {
        document.location.href = 'index.html';
    }, 500);
});
// On page load, prefill if remembered
window.addEventListener('load', () => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
        emailInput.value = savedEmail;
        rememberMe.checked = true;
    }
});