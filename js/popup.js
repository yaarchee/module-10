
let menuToggle = document.querySelector('.menuToggle');
let body = document.querySelector('body');
let navListWrap = document.querySelector('.nav-list-wrap');
let overlayPage = document.querySelector('.overlay-page');
let links = document.querySelectorAll('.nav-list__link');


menuToggle.addEventListener('click', () => toggleClass());



overlayPage.addEventListener('click', () => toggleClass());

for( let link of links){
  link.addEventListener('click', () => toggleClass());
}

function toggleClass() {
  body.classList.toggle('none-scroll');
  navListWrap.classList.toggle('selected');
  overlayPage.classList.toggle('on-overlay');
  menuToggle.classList.toggle('on-hidden');
}




