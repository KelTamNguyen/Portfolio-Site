var hamburguer = document.querySelector('#hamburger');
var navLinks = document.querySelector('#nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});