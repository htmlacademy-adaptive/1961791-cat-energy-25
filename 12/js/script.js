let navMain = document.querySelector('.main-navigation');
let navToggle = document.querySelector('.main-header__toogle');

navMain.classList.remove('main-navigation--nojs');
navToggle.classList.remove('main-header__toogle--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');

    navToggle.classList.remove('main-header__toogle--closed');
    navToggle.classList.add('main-header__toogle--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navToggle.classList.remove('main-header__toogle--opened');
    navToggle.classList.add('main-header__toogle--closed');
  }
});
