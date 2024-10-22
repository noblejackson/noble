const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


//mix it up projects section
var mixer = mixitup('.projects-gallery');

//certificate section
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.certificate-container');
    const slides = Array.from(container.children);
    
    // Clone first and last slide
    const firstSlide = slides[0].cloneNode(true);
    const lastSlide = slides[slides.length - 1].cloneNode(true);
  
    // Append and prepend the clones
    container.appendChild(firstSlide);
    container.insertBefore(lastSlide, slides[0]);
  
    // Set initial scroll position to the first original slide
    container.scrollLeft = slides[0].offsetWidth;
  
    let isTransitioning = false;
  
    container.addEventListener('scroll', () => {
      if (isTransitioning) return;
  
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
  
      if (container.scrollLeft === 0) {
        isTransitioning = true;
        container.scrollLeft = maxScrollLeft - slides[0].offsetWidth;
        setTimeout(() => { isTransitioning = false; }, 0); // Prevent scroll jump
      } else if (container.scrollLeft >= maxScrollLeft) {
        isTransitioning = true;
        container.scrollLeft = slides[0].offsetWidth;
        setTimeout(() => { isTransitioning = false; }, 0);
      }
    });
});


