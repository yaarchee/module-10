
let menuToggle = document.querySelector('.menuToggle');
let body = document.querySelector('body');
let navListWrap = document.querySelector('.nav-list-wrap');
let overlayPage = document.querySelector('.overlay-page');


menuToggle.addEventListener('click', () => {
  body.classList.toggle('none-scroll');
  navListWrap.classList.toggle('selected');
  overlayPage.classList.toggle('on-overlay');
  menuToggle.classList.toggle('on-hidden');
});

overlayPage.addEventListener('click', () => {
  body.classList.remove('none-scroll');
  navListWrap.classList.remove('selected');
  menuToggle.classList.remove('on-hidden');
  overlayPage.classList.remove('on-overlay');
});

