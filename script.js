// --- 1. FLOATING BACKGROUND EMOJIS ---
const emojis = ['❤️', '🥺'];

function createFloatingEmoji() {
    const element = document.createElement('div');
    element.classList.add('heart');

    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    element.innerText = randomEmoji;

    element.style.left = Math.random() * 100 + "vw";
    element.style.fontSize = Math.random() * 20 + 15 + "px";
    element.style.animationDuration = Math.random() * 3 + 3 + "s";

    document.body.appendChild(element);

    setTimeout(() => {
        element.remove();
    }, 6000);
}
setInterval(createFloatingEmoji, 400);


// --- 2. RUNAWAY NO BUTTON LOGIC ---
const noBtn = document.querySelector('.no-btn');

// This if-check stops errors from happening on success.html (where there is no No button)
if (noBtn) {
    noBtn.addEventListener('mouseover', () => {
        noBtn.classList.add('run-away');
        const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth - 40) + 20;
        const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight - 40) + 20;
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    });
}