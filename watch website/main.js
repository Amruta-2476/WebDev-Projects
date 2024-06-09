// to toggle between open and close of menu
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');
menuBtn.addEventListener('click', (e) => {
  navLinks.classList.toggle('open');
  
    const isOpen = navLinks.classList.contains('open');
    menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
});

// to close the menu automatically when a navLink is clicked
navLinks.addEventListener("click", () => {
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute('class', 'ri-menu-line');
});


// using scrollReveal library to animate elements on scroll
/*header*/
const scrollRevealOption = {
    distance: '50px',
    duration: 1000,
    // easing: 'ease',
    origin: 'bottom',
    // reset: true,
    // scale: 0.9
};
ScrollReveal().reveal(".header_image img", {
  ...scrollRevealOption,
  origin: 'right',
});
ScrollReveal().reveal(".header_content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header_content p", {
  ...scrollRevealOption,
  delay: 700,
});
ScrollReveal().reveal(".header_content h4", {
  ...scrollRevealOption,
  delay: 850,
});
ScrollReveal().reveal(".header_content .header_btns", {
  ...scrollRevealOption,
  delay: 950,
});

ScrollReveal().reveal(".story_image img", {
  ...scrollRevealOption,
  origin: 'left',
});
ScrollReveal().reveal(".story_content .section_header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".story_content h4", {
  ...scrollRevealOption,
  delay: 700,
});
ScrollReveal().reveal(".story_content p", {
  ...scrollRevealOption,
  delay: 850,
});
ScrollReveal().reveal(".story_content .story_btn", {
  ...scrollRevealOption,
  delay: 950,
});

ScrollReveal().reveal(".client_image img", {
  ...scrollRevealOption,
  origin: 'right',
});

// for carousel client reviews
const swiper = new Swiper(".swiper", {
  loop: true,
});