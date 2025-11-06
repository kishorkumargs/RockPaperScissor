
const auth = window.auth;
const logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click', () => {
    auth.signOut().then(() => {
        localStorage.removeItem('userEmail');
        window.location.href = "login.html";
    }).catch((error) => {
        alert("Logout failed!");
    });
})