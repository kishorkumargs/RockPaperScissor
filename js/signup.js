
const auth = window.auth;
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;

    if(password !== confirm){
        alert("Password doesn't match!");
        return;
    }
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('User signed up:', user);
        alert('Account created successfully!');
        window.location.href = 'login.html';
    })
    .catch(err => {
        alert(err.message);
    })
})