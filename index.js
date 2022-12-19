const hamburgerButton = document.querySelector('.menu');
const closeButton = document.querySelector('.close-button');
const navItems = document.querySelector('.nav-items');
const myName = document.querySelector('.my-name');
const mailButton = document.getElementById('mail');

function openMenu() {
  hamburgerButton.classList.add('invisible');
  myName.classList.add('invisible');
  closeButton.classList.add('align-close');
  navItems.classList.add('display-nav-items');
  mailButton.classList.add('invisible');
}

function closeMenu() {

}

hamburgerButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
