// Sounds
const btnClickSound = new Howl({
    src:['../sounds/click.mp3'],
    volume: 0.8
});
const playBtnSound = new Howl({
    src:['../sounds/play.wav'],
    volume: 0.8
})

document.addEventListener('click', unlockAudioContext, { once: true });
document.addEventListener('touchstart', unlockAudioContext, { once: true });

function unlockAudioContext() {
  if (Howler.ctx && Howler.ctx.state === 'suspended') {
    Howler.ctx.resume().then(() => {
      console.log('✅ Audio context unlocked by user gesture');
    });
  }
}

const toggleBtn = document.getElementById('theme-toggled');
const playBtn = document.getElementById('play-btn');
const btns = document.querySelectorAll('button');
const actionBtn = document.querySelectorAll('.call-to-action');

// Event listener for call-to-action btns
actionBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const page = btn.textContent.toLowerCase().replace(' ', '')+ '.html';
        setTimeout(() => {
            document.location.href = page;
        }, 400);
    });
});

// Event listener for play btn
playBtn.addEventListener('click', () => {
    btnClickSound.play();
    setTimeout(() => {
        playBtnSound.play();
    }, 400);
    setTimeout(() => {
        document.location.href = 'login.html';
    }, 1000);
});

// Event listener for btn click
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btnClickSound.play();
    });
});

// Toggle theme
if(localStorage.getItem('theme') === 'light'){
    document.body.classList.add('light-theme');
    toggleBtn.classList.remove('toggled');
    toggleBtn.textContent = 'Dark Mode';
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
document.getElementById('learn-btn').addEventListener('click', () => {
    document.querySelector('.how-to-play-section').scrollIntoView({ behavior: 'smooth' });
});