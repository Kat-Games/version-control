// main.js
window.addEventListener('scroll', function() {
    const logoText = document.getElementById('logo-text');
    if (window.scrollY > 50) {
        logoText.classList.add('scrolled');
    } else {
        logoText.classList.remove('scrolled');
    }
});
