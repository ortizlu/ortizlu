let cardsDown = document.querySelector('#put-cards-down');
let html = document.querySelector('html');
let spaceDash = document.querySelector('#toggle-card-1');
let spaceDashCard = document.querySelector('.space-dash');
let stageBright = document.querySelector('#toggle-card-2');
let stageBrightCard = document.querySelector('.stagebright');
let cheeYun = document.querySelector('#toggle-card-3');
let cheeYunCard = document.querySelector('.chee-yun');
let wowISS = document.querySelector('#toggle-card-4');
let wowISSCard = document.querySelector('.wow-iss');
let resume = document.querySelector('#toggle-card-5');
let resumeCard = document.querySelector('.me');

//collapses upon click
const collapseNav = function() {
  $('.navbar-collapse').collapse('hide');
};

//target all items in navbar that need collapsing and run the collapse function on them
$('.navbar-nav>li>label').on('click', collapseNav);
$('.navbar-nav>li>div>a').on('click', collapseNav);
$('.navbar-nav>li>div>label').on('click', collapseNav);

html.addEventListener('click', e => {
  //make the click event work only for the HTML tag
  if (e.target.hasAttribute('lang')) {
    cardsDown.checked = true;
    spaceDashCard.style.zIndex = '6';
    stageBrightCard.style.zIndex = '5';
    cheeYunCard.style.zIndex = '4';
    wowISSCard.style.zIndex = '3';
    resumeCard.style.zIndex = '2';
  }
});

spaceDashCard.addEventListener('click', () => {
  spaceDash.checked = true;
  stageBrightCard.style.zIndex = '6';
  wowISSCard.style.zIndex = '5';
  cheeYunCard.style.zIndex = '4';
  resumeCard.style.zIndex = '2';
});

spaceDash.addEventListener('change', () => {
  stageBrightCard.style.zIndex = '6';
});

stageBrightCard.addEventListener('click', e => {
  e.stopPropagation();
  stageBright.checked = true;
  cheeYunCard.style.zIndex = '6';
  spaceDashCard.style.zIndex = '5';
  stageBrightCard.style.zIndex = '4';
  wowISSCard.style.zIndex = '3';
  resumeCard.style.zIndex = '2';
});

stageBright.addEventListener('change', () => {
  cheeYunCard.style.zIndex = '6';
});

cheeYunCard.addEventListener('click', e => {
  e.stopPropagation();
  cheeYun.checked = true;
  wowISSCard.style.zIndex = '6';
  spaceDashCard.style.zIndex = '5';
  stageBrightCard.style.zIndex = '4';
  cheeYunCard.style.zIndex = '3';
  resumeCard.style.zIndex = '2';
});

cheeYun.addEventListener('change', () => {
  wowISSCard.style.zIndex = '6';
});

wowISSCard.addEventListener('click', e => {
  e.stopPropagation();
  wowISS.checked = true;
  resumeCard.style.zIndex = '6';
  spaceDashCard.style.zIndex = '5';
  stageBrightCard.style.zIndex = '4';
  cheeYunCard.style.zIndex = '3';
  wowISSCard.style.zIndex = '2';
});

wowISS.addEventListener('change', () => {
  if (wowISS.checked) {
    resumeCard.style.zIndex = '6';
  }
});

resumeCard.addEventListener('click', e => {
  e.stopPropagation();
  resume.checked = true;
  spaceDashCard.style.zIndex = '6';
  wowISSCard.style.zIndex = '5';
  cheeYunCard.style.zIndex = '4';
  stageBrightCard.style.zIndex = '3';
});

resume.addEventListener('change', () => {
  if (resume.checked) {
    spaceDashCard.style.zIndex = '6';
  }
});
