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
    featuredImageMobile: 'images/project-image-mobile.png',
    featuredImageDesktop: 'images/project-image-desktop@0.75.png',
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
    projectCardClass: ['card-1'],
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
    projectCardClass: ['card-2'],
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
    projectCardClass: ['card-3'],
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
    projectCardClass: ['card-4'],
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
    projectCardClass: ['card-2', 'card-5'],
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
    projectCardClass: ['card-3', 'card-6'],
  },
];

const workTitle = document.createElement('div');
workTitle.className = 'work-title';
const title = document.createElement('h3');
title.innerText = 'My Recent Works';
title.className = 'title';
const border = document.createElement('div');
border.className = 'border-right';

workTitle.append(title, border);

const projectsContainer = document.createElement('div');
const projectCards = document.createElement('div');
projectCards.className = 'works-card';
for (let i = 0; i < projectData.length; i += 1) {
  if (i === 0) {
    const firstProject = document.createElement('div');
    firstProject.className = 'first-project';

    const featuredImageMobile = document.createElement('div');
    featuredImageMobile.className = 'project-image-mobile';
    const mobileImage = document.createElement('img');
    mobileImage.src = projectData[i].featuredImageMobile;
    featuredImageMobile.append(mobileImage);

    const featuredImageDesktop = document.createElement('div');
    featuredImageDesktop.className = 'project-image-desktop';
    const desktopImage = document.createElement('img');
    desktopImage.src = projectData[i].featuredImageDesktop;
    featuredImageDesktop.append(desktopImage);

    const content = document.createElement('div');
    const name = document.createElement('h4');
    const description = document.createElement('p');
    const technologies = document.createElement('ul');
    const button = document.createElement('button');

    content.className = 'content';
    name.className = 'sub-title';
    description.className = 'description';
    technologies.className = 'technologies';

    name.innerText = projectData[i].name;
    description.innerText = projectData[i].description;

    const technologiesList = projectData[i].technologies;
    for (let j = 0; j < technologiesList.length; j += 1) {
      const list = document.createElement('li');
      list.innerText = technologiesList[i];
      technologies.append(list);
    }

    button.innerText = 'See Project';

    content.append(name, description, technologies, button);
    firstProject.append(featuredImageMobile, featuredImageDesktop, content);
    projectsContainer.append(firstProject);
    i = 1;
  }

  const cardContainer = document.createElement('div');
  const name = document.createElement('h4');
  const description = document.createElement('p');
  const technologies = document.createElement('ul');
  const button = document.createElement('button');

  cardContainer.classList.add('card');
  const listOfClass = projectData[i].projectCardClass;
  for (let k = 0; k < listOfClass.length; k += 1) {
    cardContainer.classList.add(listOfClass[k]);
  }
  name.innerText = projectData[i].name;
  description.innerText = projectData[i].description;
  technologies.className = 'technologies';
  button.innerText = 'See Project';

  const technologiesList = projectData[i].technologies;
  for (let j = 0; j < technologiesList.length; j += 1) {
    const list = document.createElement('li');
    list.innerText = technologiesList[j];
    technologies.append(list);
  }

  cardContainer.append(name, description, technologies, button);
  projectCards.append(cardContainer);
}
projectsContainer.append(projectCards);
worksSection.append(workTitle, projectsContainer);
