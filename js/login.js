
const auth = window.auth;
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        alert("Login successful");
        localStorage.setItem('userEmail', user.email); 
        window.location.href = '../rock-paper-scissor.html';
    })
    .catch(err =>{
        alert("Invalid credentials", err.message);
    })
})