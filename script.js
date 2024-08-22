const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});