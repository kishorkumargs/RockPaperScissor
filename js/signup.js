const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const termsChecked = document.getElementById('terms').checked;

    const errorFields = ['firstName', 'lastName', 'email', 'password', 'confirmPassword', 'terms'];
    errorFields.forEach(id =>{
        document.getElementById(id + 'Error').textContent = '';
        document.getElementById(id).classList.remove('is-invalid');
    });
    let valid = true;

    if (!firstName) {
        document.getElementById('firstNameError').textContent = "First name is required!";
        document.getElementById('firstName').classList.add('is-invalid');
        valid = false;
    }
    if (!lastName) {
        document.getElementById('lastNameError').textContent = "Last name is required!";
        document.getElementById('lastName').classList.add('is-invalid');
        valid = false;
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email!";
        document.getElementById('email').classList.add('is-invalid');
        valid = false;
    }
    if (!password || password.length < 8) {
        document.getElementById('passwordError').textContent = "Password must be at least 8 characters!";
        document.getElementById('password').classList.add('is-invalid');
        valid = false;
    }
    if (password !== confirm) {
        document.getElementById('confirmPasswordError').textContent = "Passwords do not match!";
        document.getElementById('confirmPassword').classList.add('is-invalid');
        valid = false;
    }
    if (!termsChecked) {
        document.getElementById('termsError').textContent = "You must agree to the Terms of Service!";
        valid = false;
    }

    if (!valid) return; 
    const name = firstName + ' ' + lastName;
    
    try {
        const userCredential = await window.auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        await db.collection('users').doc(user.uid).set({
            name: name,
            email: email,
            highScore: 0,
            totalGames: 0
        });
        console.log('User signed up:', user);
        alert('Account created successfully!');
        window.location.href = 'login.html';
    } catch(err) {
        console.log(err.message);
    }
})
document.getElementById('home-btn').addEventListener('click', () => {
    btnClickSound.play();
    setTimeout(() => {
        document.location.href = 'index.html';
    }, 500);
});
localStorage.setItem('name', document.getElementById('firstName').value +' '+ document.getElementById('lastName').value);