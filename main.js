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
let ateball = document.querySelector('#toggle-card-5');
let ateballCard = document.querySelector('.ateball');
let resume = document.querySelector('#toggle-card-6');
let resumeCard = document.querySelector('.me');

let triggers = document.querySelectorAll('[data-cardid]');
let cards = [
  spaceDashCard,
  stageBrightCard,
  cheeYunCard,
  wowISSCard,
  ateballCard,
  resumeCard
];

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

for (let i = 0; i < triggers.length; i++) {
  triggers[i].addEventListener('click', e => {
    switch (e.target.dataset.cardid) {
      case '1':
        spaceDash.checked = true;
        stageBrightCard.style.zIndex = '6';
        cheeYunCard.style.zIndex = '5';
        wowISSCard.style.zIndex = '4';
        ateballCard.style.zIndex = '3';
        resumeCard.style.zIndex = '2';
        break;
      case '2':
        stageBright.checked = true;
        cheeYunCard.style.zIndex = '6';
        wowISSCard.style.zIndex = '5';
        ateballCard.style.zIndex = '4';
        resumeCard.style.zIndex = '3';
        spaceDashCard.style.zIndex = '2';
        break;
      case '3':
        cheeYun.checked = true;
        wowISSCard.style.zIndex = '6';
        ateballCard.style.zIndex = '5';
        resumeCard.style.zIndex = '4';
        spaceDashCard.style.zIndex = '3';
        stageBrightCard.style.zIndex = '2';
        break;
      case '4':
        wowISS.checked = true;
        ateballCard.style.zIndex = '6';
        resumeCard.style.zIndex = '5';
        spaceDashCard.style.zIndex = '4';
        stageBrightCard.style.zIndex = '3';
        cheeYunCard.style.zIndex = '2';
        break;
      case '5':
        ateball.checked = true;
        resumeCard.style.zIndex = '6';
        spaceDashCard.style.zIndex = '5';
        stageBrightCard.style.zIndex = '4';
        cheeYunCard.style.zIndex = '3';
        wowISSCard.style.zIndex = '2';
        break;
      case '6':
        resume.checked = true;
        spaceDashCard.style.zIndex = '6';
        stageBrightCard.style.zIndex = '5';
        cheeYunCard.style.zIndex = '4';
        wowISSCard.style.zIndex = '3';
        ateballCard.style.zIndex = '2';
        break;
      default:
    }
  });
}
