// main.js
document.addEventListener('DOMContentLoaded', function () {
    var navbarText = document.getElementById('navbar-text');
    var navbar = document.getElementById('navbar');
    var lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        var currentScroll = window.scrollY;
        if (currentScroll > 50) {
            if (currentScroll > lastScrollTop) {
                // Scrolling down
                navbarText.classList.add('slide-out');
                navbar.classList.remove('slide-in');
                navbar.classList.add('outline', 'outline-2', 'outline-white');
            } else {
                // Scrolling up
                navbarText.classList.remove('slide-out');
                navbarText.classList.add('slide-in');
                navbar.classList.add('outline', 'outline-2', 'outline-white');
            }
        } else {
            navbarText.classList.remove('slide-out');
            navbarText.classList.add('slide-in');
            navbar.classList.remove('outline', 'outline-2', 'outline-white');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
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