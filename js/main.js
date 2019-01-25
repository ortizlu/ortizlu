// alert('welcome!');
//update current year for copyright purposes
let year = new Date().getFullYear().toString();
let yearSpan = document.querySelector('.year');
yearSpan.innerText = year;

//MOBILE NAVBAR
// let burger = document.querySelector('.hamburger');
// let closeBtn = document.querySelector('.mobile-overlay .close');
// let mobileOverlay = document.querySelector('.mobile-overlay');
// let menuItemsMobile = document.querySelector('.menu-items-mobile');
// let body = document.querySelector('body');
// let social = document.querySelector('.social-btn-mobile');
// let socialExpanded = document.querySelector('.social-expanded');
// let projectsBtn = document.querySelector('.projects-btn-mobile');
// let aboutBtn = document.querySelector('.about-btn-mobile');

//performs close function
// function closeFunc() {
//   mobileOverlay.style.width = '0%';
//   body.style.overflow = 'visible';
// }

//performs open function
// function openFunc() {
//   menuItemsMobile.style.transform = 'translateX(0%)';
//   menuItemsMobile.style.height = '100%';
//   mobileOverlay.style.width = '100%';
//   body.style.overflow = 'hidden';
// }

//show additional social buttons
// function socialToggle(e) {
//   e.preventDefault();
//   menuItemsMobile.style.transform = 'translateX(-200%)';
//   menuItemsMobile.style.height = '0%';
//   socialExpanded.style.transform = 'translateX(0%)';
// }

//on click of hamburger, menu pops from the side
// burger.addEventListener('click', openFunc);

//close menu upon clicking the projects/about button
// projectsBtn.addEventListener('click', closeFunc);
// aboutBtn.addEventListener('click', closeFunc);

//clicking the X button
// closeBtn.addEventListener('click', closeFunc);

//clicking on social button
// social.addEventListener('click', socialToggle);

//swiping to social instead of clicking the button
// let swipeToSocial = new Hammer(social);
// swipeToSocial.on('panleft', function(ev) {
//   socialToggle(ev);
// });

//swiping back to the menu
// let swipeFromSocial = new Hammer(socialExpanded);
// swipeFromSocial.on('panright', function(ev) {
//   openFunc();
// });

// CAROUSEL

let projectsObj = [
  {
    title:
      '<a class="project-title" href="http://ortizlu.com/Space-Dash/" target="_blank">Space-Dash</a>',
    link: 'http://ortizlu.com/Space-Dash/',
    description:
      'A fun card game about the cold war, spaceships, and blowing your enemies spaceships up! Made with HTML, CSS, and JS along with a library called Typed.JS. Will soon be refactored to use React.JS.',
    images: [
      {
        alt: 'React.JS',
        src: 'react.png'
      }
    ]
  },
  {
    title:
      '<a class="project-title" href="https://stagebright.herokuapp.com/" target="_blank">Stagebright</a>',
    link: 'https://stagebright.herokuapp.com/',
    description:
      'StageBright is a full-screen "instagram-like" hub where users can upload pictures (or other media planned for a future release) and see other people\'s work in their feed. It is built with the MEHN stack and soon to be refactored to use Vue.js for the front-end.',
    images: [
      {
        alt: 'MongoDB',
        src: 'mongo.png'
      },
      {
        alt: 'Express.JS',
        src: 'express.png'
      },
      {
        alt: 'Vue.JS',
        src: 'vue.png'
      },
      {
        alt: 'Node',
        src: 'node.png'
      },
      {
        alt: 'AWS S3',
        src: 'aws.png'
      }
    ]
  },
  {
    title:
      '<a class="project-title" href="http://www.chee-yun.net/" target="_blank">Chee-Yun</a>',
    link: 'http://www.chee-yun.net/',
    description:
      'This is a website created for world-renowned violinist Chee-Yun.',
    images: [
      {
        alt: 'Bootstrap CSS Library',
        src: 'bootstrap.png'
      },
      {
        alt: 'jQuery',
        src: 'jquery.png'
      },
      {
        alt: 'javaScript',
        src: 'js.png'
      }
    ]
  },
  {
    title:
      '<a class="project-title" href="http://wow-iss.surge.sh/" target="_blank">WOW-ISS</a>',
    link: 'http://wow-iss.surge.sh/',
    description:
      'This is a project created in collaboration with <a href="https://github.com/ntartaro" target="_blank">Nick Tartaro</a> where we used the International Space Station\'s and Google Maps\' API in order to track the current location of the ISS. Users can log in, add their favorite locations, and see how far the ISS is is from their saved locations.',
    images: [
      {
        alt: 'MongoDB',
        src: 'mongo.png'
      },
      {
        alt: 'Express.JS',
        src: 'express.png'
      },
      {
        alt: 'React.JS',
        src: 'react.png'
      },
      {
        alt: 'Node',
        src: 'node.png'
      }
    ]
  },
  {
    title:
      '<a class="project-title" href="http://ateball.surge.sh/" target="_blank">Ate-Ball</a>',
    link: 'http://ateball.surge.sh/',
    description:
      'This is a project created in collaboration with <a href="https://github.com/juancbaires" target="_blank">Juan Baires</a> where we used Yelp and Google Maps\' API in order to end dinner-deciding feuds everywhere. A user puts in three favorite foods along with their significant other, and the magic Ateball magically chooses where they should eat according to their favorite foods/location.',
    images: [
      {
        alt: 'MongoDB',
        src: 'mongo.png'
      },
      {
        alt: 'Express.JS',
        src: 'express.png'
      },
      {
        alt: 'React.JS',
        src: 'react.png'
      },
      {
        alt: 'Node',
        src: 'node.png'
      }
    ]
  }
];
