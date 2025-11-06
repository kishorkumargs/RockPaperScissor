const btnClickSound = new Howl({
    src: ['../../sounds/click.mp3'],
    volume: 0.8
});

const btns = document.querySelectorAll('.btn');
const toggleBtn = document.getElementById('theme-toggled');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btnClickSound.play();
    });
});

// Toggle theme
if(localStorage.getItem('theme') === 'light'){
    document.body.classList.add('light-theme');
    toggleBtn.classList.add('toggled');
    toggleBtn.textContent = 'Dark Mode';
}  else {
  document.body.classList.remove('light-theme');
  toggleBtn.textContent = 'Light Mode';
  toggleBtn.classList.remove('toggled');
}
// Event listener for toggle button
toggleBtn.addEventListener('click', () => {
    btnClickSound.play();
    document.body.classList.toggle('light-theme');
    toggleBtn.classList.toggle('toggled');

    if(document.body.classList.contains('light-theme')){
        toggleBtn.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    } else {
        toggleBtn.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    }
});