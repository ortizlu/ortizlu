let html = document.querySelector('html');
let spaceDashCard = document.querySelector('.space-dash');
let stageBrightCard = document.querySelector('.stagebright');
let cheeYunCard = document.querySelector('.chee-yun');
let wowISSCard = document.querySelector('.wow-iss');
let ateballCard = document.querySelector('.ateball');
let resumeCard = document.querySelector('.me');

//  margin-top: -340px;
//-webkit-transform: rotate(0) translateX(-50%);
//transform: rotate(0) translateX(-50%);
//top: 70%;
//z-index: -2;

let mc = new Hammer(resumeCard);

mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

mc.on('panup pandown tap', function(e) {
  if (e.type === 'panup') {
    e.target.style.marginTop = '-340px';
    e.target.style.transform = 'rotate(0) translateX(-50%)';
    e.target.style.top = '70%';
  }
});

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
$('.navbar-nav>li>h1').on('click', collapseNav);
$('.navbar-nav>li>div>a').on('click', collapseNav);
$('.navbar-nav>li>div>p').on('click', collapseNav);
