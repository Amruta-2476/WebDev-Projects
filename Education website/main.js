// navbar on scroll : color change
window.addEventListener('scroll', function () {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});      //create css style for class 'window-scroll'