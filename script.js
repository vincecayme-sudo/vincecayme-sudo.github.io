
        window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');
    
    // Smoothly fade out the loader
    loader.style.opacity = '0';
    
    // Remove it from the DOM after the fade animation finishes
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
    });
    