document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const aboutToggle = document.getElementById('aboutToggle');
    const aboutSection = document.getElementById('aboutSection');
    const container = document.querySelector('.container');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    aboutToggle.addEventListener('click', function(e) {
        e.preventDefault();
        aboutSection.classList.toggle('open');
        container.classList.toggle('shift');
    });
});

