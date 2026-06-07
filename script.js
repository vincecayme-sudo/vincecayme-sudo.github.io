
    window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');
    
    // Smoothly fade out the loader
    loader.style.opacity = '0';
    
    // Remove it from the DOM after the fade animation finishes
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
    });

    //Scroll Progress Bar
    const progressBar = document.getElementById('scroll-progress');

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = progress + '%';
});

//ASCII ART LOADER

 const container = document.getElementById('puppet-container');
  let frames = [];
  let currentFrame = 0;
  const frameRate = 250; // Speed of animation in milliseconds

  // 1. Fetch the text file and split it into frames
  async function initPuppetAnimation() {
    try {
      const response = await fetch('puppet_ascii.txt');
      if (!response.ok) throw new Error('Could not find puppet_ascii.txt');
      
      const fileContent = await response.text();
      
      // Split the text wherever '===' appears on its own line
      frames = fileContent.split(/\r?\n===\r?\n/);
      
      // Start the sequential loop if we found frames
      if (frames.length > 0) {
        setInterval(playNextFrame, frameRate);
      } else {
        container.textContent = "Error: No frames found in file.";
      }
    } catch (error) {
      container.textContent = "Error: Failed to load puppet_ascii.txt";
      console.error(error);
    }
  }

  // 2. Function to cycle through the extracted frames
  function playNextFrame() {
    container.textContent = frames[currentFrame].trim();
    currentFrame = (currentFrame + 1) % frames.length;
  }

  // Initialise the animation loop
  initPuppetAnimation();