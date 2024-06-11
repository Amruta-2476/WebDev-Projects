// *** navbar on scroll : color change ***
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});      //create css style for class 'window-scroll'


// *** Go to top button *** 
//Get the button
var mybutton = document.getElementById("topBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
  

// *** FAQ open toggle - show/hide answer ***
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
      faq.classList.toggle('open');   //create css style for class 'open'  //on clicking it will toggle the class 'open'
      // # toggle the + and - icon #
      const icon = faq.querySelector('.faq_icon i');
      icon.classList.toggle('ri-subtract-line')
    });                                 
});



// responsive
// *** navbar toggle ***
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
menuBtn.addEventListener('click', () => {
  menu.style.display = 'flex';
  closeBtn.style.display = 'inline-block';
  menuBtn.style.display = 'none';
});
closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  menuBtn.style.display = 'inline-block';
});