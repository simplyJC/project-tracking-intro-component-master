let navLink = document.querySelector('.nav__lists');
let navOpen = document.querySelector('.nav__open');
let navClose = document.querySelector('.nav__close');

navOpen.addEventListener('click', () => {
  navLink.classList.add('nav__lists--active');
  navLink.classList.remove('nav__lists--hide');
  navOpen.classList.add('nav__open--hide');
  navClose.classList.add('nav__close--show');
});

navClose.addEventListener('click', () => {
  navLink.classList.remove('nav__lists--active');
  navOpen.classList.remove('nav__open--hide');
  navClose.classList.remove('nav__close--show');
  navLink.classList.add('nav__lists--hide');
});
