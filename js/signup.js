const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;
    const name = document.getElementById('firstName').value +' '+ document.getElementById('lastName').value;

    if(password !== confirm){
        alert("Password doesn't match!");
        return;
    }
    try {
        const userCredential = await window.auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        console.log('User signed up:', user);
        alert('Account created successfully!');
        await db.collection('users').doc(user.uid).set({
            name: name,
            email: email,
            highScore: 0,
            totalGames: 0
        });
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