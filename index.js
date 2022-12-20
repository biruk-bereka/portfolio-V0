const header = document.querySelector('.header');
const hamburgerButton = document.querySelector('.menu');
const closeButton = document.querySelector('.close-button');
const navItems = document.querySelector('.nav-items');
const myName = document.querySelector('.my-name');
const mailButton = document.getElementById('mail');

function openMenu() {
  header.classList.toggle('menu-header');
  hamburgerButton.classList.toggle('invisible');
  myName.classList.toggle('invisible');
  closeButton.classList.toggle('align-close');
  navItems.classList.toggle('display-nav-items');
  mailButton.classList.toggle('invisible');
}

function closeMenu() {
  header.classList.toggle('menu-header');
  hamburgerButton.classList.toggle('invisible');
  myName.classList.toggle('invisible');
  closeButton.classList.toggle('align-close');
  navItems.classList.toggle('display-nav-items');
  mailButton.classList.toggle('invisible');
}

hamburgerButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
navItems.addEventListener('click', closeMenu);

const worksSection = document.querySelector('.works-section');
const projectData = [
  {
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    featuredImage: 'images/project-image-mobile.png',
    technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
    links: [
      {
        liveVersionLink: '',
        sourceLink: '',
      },
    ],
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: 'images/card-1.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    links: [
      {
        liveVersionLink: '',
        sourceLink: '',
      },
    ],
    projectCardClass : ['card-1'],
  },
  {
    name: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: 'images/card-2.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    links: [
      {
        liveVersionLink: '',
        sourceLink: '',
      },
    ],
    projectCardClass : ['card-2'],
  },
  {
    name: 'Website Protfolio',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: 'images/card-3.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    links: [
      {
        liveVersionLink: '',
        sourceLink: '',
      },
    ],
    projectCardClass : ['card-3'],
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: 'images/card-1.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    links: [
      {
        liveVersionLink: '',
        sourceLink: '',
      },
    ],
    projectCardClass : ['card-4'],
  },
  {
    name: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: 'images/card-2.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    links: [
      {
        liveVersionLink: '',
        sourceLink: '',
      },
    ],
    projectCardClass : ['card-2', 'card-5'],
  },
  {
    name: 'Website Protfolio',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: 'images/card-3.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    links: [
      {
        liveVersionLink: '',
        sourceLink: '',
      },
    ],
    projectCardClass : ['card-3', 'card-6'],
  },
];

workTitle = document.createElement('div');
workTitle.className = 'work-title';
title = document.createElement('h3');
title.innerText = 'My Recent Works';
title.className = 'title';
workTitle.append(title);

worksSection.append(workTitle);







