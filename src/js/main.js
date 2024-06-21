// main.js
document.addEventListener('DOMContentLoaded', function () {
    var navbarText = document.getElementById('navbar-text');
    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbarText.classList.add('slide-out');
            navbar.classList.add('outline', 'outline-2', 'outline-white');
        } else {
            navbarText.classList.remove('slide-out');
            navbar.classList.remove('outline', 'outline-2', 'outline-white');
        }
    });

    // Smooth scrolling for navbar links
    document.querySelectorAll('a.navbutton').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
});

const hiddenElements = document.querySelectorAll('.hiddens');
hiddenElements.forEach((el) => observer.observe(el));