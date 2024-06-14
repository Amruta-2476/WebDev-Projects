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


// ***$$$ ABOUT PAGE COUNTER BOXES ***$$$
let valueDisplays = document.querySelectorAll('.num');
let duration = 1400; // 1.4 second
let interval = 60; // 70 ms
valueDisplays.forEach(valueDisplay => {
  let endValue = parseInt(valueDisplay.getAttribute('data-val'));  //parseInt(valueDisplay
  let startValue = 0;
  // console.log(endValue)
  let increment = (endValue - startValue) / (duration / interval);
  let current = startValue;
  let timer = setInterval(() => {
    current += increment;
    valueDisplay.innerText = Math.floor(current);
    if (current >= endValue) {
      clearInterval(timer);
      valueDisplay.innerText = endValue;
    }
  }, interval);
});


// Function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
// Function to handle scroll reveal
function scrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  revealElements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('scroll-reveal-visible');
    }
  });
}
// Add event listener for scroll and initial load
window.addEventListener('scroll', scrollReveal);
window.addEventListener('load', scrollReveal);


function scrollReveal2() {
  const revealElements = document.querySelectorAll('.scroll-reveal-2');
  revealElements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('scroll-reveal-visible-2');
    }
  });
}
// Add event listener for scroll and initial load
window.addEventListener('scroll', scrollReveal2);
window.addEventListener('load', scrollReveal2);

