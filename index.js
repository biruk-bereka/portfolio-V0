const hamburgerButton = document.querySelector('.menu');
const closeButton = document.querySelector('.close-button');
const navItems = document.querySelector('.nav-items');
const myName = document.querySelector('.my-name');
const mailButton = document.getElementById('mail');

function openMenu() {
  hamburgerButton.classList.toggle('invisible');
  myName.classList.toggle('invisible');
  closeButton.classList.toggle('align-close');
  navItems.classList.toggle('display-nav-items');
  mailButton.classList.toggle('invisible');
}

function closeMenu() {
  hamburgerButton.classList.toggle('invisible');
  myName.classList.toggle('invisible');
  closeButton.classList.toggle('align-close');
  navItems.classList.toggle('display-nav-items');
  mailButton.classList.toggle('invisible');
}

hamburgerButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
navItems.addEventListener('click', closeMenu);
