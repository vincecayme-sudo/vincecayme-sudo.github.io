/////////////////////////////////////////////////////



    ///////////////////////////////////////////////////////////////
    //Loader
    window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');
    
    // Smoothly fade out the loader
    loader.style.opacity = '0';
    
    // Remove it from the DOM after the fade animation finishes
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
    
    //ASCII ANIMATION BACKGROUND
    initAsciiMorph(document.body, {
        opacity: 0.15,   // how visible — lower = more subtle
        speed: 0.00022,  // drift speed
        scale: 0.060,    // zoom of noise field — larger = coarser shapes
        cellW: 7.8,  // matches actual character width at 13px Courier New
        cellH: 20,
    });
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