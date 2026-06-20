/////////////////////////////////////////////////////
// Loader: count 0% → 100% then fade out
const loaderWrapper = document.getElementById('loader-wrapper');
const loaderPercent = document.getElementById('loader-percent');
const loaderBars1 = document.getElementById('loader-bars1');
const loaderBars2 = document.getElementById('loader-bars2');

const BAR_HEIGHT = 3;
const BAR_GAP = 4;
const BAR_COUNT = Math.floor(window.innerHeight / (BAR_HEIGHT + BAR_GAP));

const bars1 = [];
const bars2 = [];
for (let i = 0; i < BAR_COUNT; i++) {
  const b1 = document.createElement('div');
  b1.classList.add('loader-bar');
  loaderBars1.appendChild(b1);
  bars1.push(b1);

  const b2 = document.createElement('div');
  b2.classList.add('loader-bar');
  loaderBars2.appendChild(b2);
  bars2.push(b2);
}

let count = 0;
const loaderInterval = setInterval(() => {
  count = count + 2;
  loaderPercent.textContent = count + '%';

  const filledBars = Math.floor((count / 100) * BAR_COUNT);
  bars1.forEach((bar, i) => { bar.style.width = i < filledBars ? '100%' : '0%'; });
  bars2.forEach((bar, i) => { bar.style.width = i < filledBars ? '100%' : '0%'; });

  if (count >= 100) {
    clearInterval(loaderInterval);
    setTimeout(() => {
      loaderWrapper.classList.add('hidden');
      loaderWrapper.addEventListener('transitionend', () => loaderWrapper.remove(), { once: true });
    }, 300);
  }
}, 35); //ms per tick

    //ASCII ANIMATION BACKGROUND
    initAsciiMorph(document.body, {
        opacity: 0.15,   // how visible — lower = more subtle
        speed: 0.00022,  // drift speed
        scale: 0.060,    // zoom of noise field — larger = coarser shapes
        cellW: 7.8,  // matches actual character width at 13px Courier New
        cellH: 20,
    });
    

/////////////////////////////////////////////////////////
//Scroll Progress Bar
const progressBar = document.getElementById('scroll-progress');

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = progress + '%';
});


  //////////////////////////////////////////////
  //project slides
  const slides = document.querySelectorAll('.project-slide');
  const counter = document.getElementById('project-counter');
  let current = 0;

function goToSlide(index) {
    slides[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    counter.textContent = `${current + 1} / ${slides.length}`;
}

document.getElementById('prev-btn').addEventListener('click', () => goToSlide(current - 1));
document.getElementById('next-btn').addEventListener('click', () => goToSlide(current + 1));