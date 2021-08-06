// header background
let header = document.getElementById('header');
window.onscroll = function (evt) {

 if(window.scrollY > 10 )  {
   header.classList.add('bgOn');
 } else {
     header.classList.remove('bgOn')
 }
};

// slides
var swiper = new Swiper(".slide-testimonials", {
  slidesPerView: 3,
  spaceBetween: 32,
  pagination: {
    el: ".s-testimonials .top .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },

    600: {
      slidesPerView: 2.3,
      spaceBetween: 16,
    },

    1050: {
      slidesPerView: 3,
      spaceBetween: 32,
    }
    
  }
});

// menu
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu (event) {
  if (event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// sub-menu
const subMenu = document.getElementById('sub-menu');
function openMenu (event) {
  const openMenu = document.querySelector('#sub-menu ul');
  openMenu.classList.toggle('open-menu');
}

subMenu.addEventListener('click', openMenu);

// init animate
AOS.init({
  duration: 1000,
  once: true,
});