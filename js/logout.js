const auth = window.auth;
const logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click', () => {
    auth.signOut().then(() => {
        btnClickSound.play();
        setTimeout(() => {
            localStorage.removeItem('userEmail');
            window.location.href = "login.html";
        }, 500);
    }).catch((error) => {
        alert("Logout failed!");
    });
})