// Respect reduced motion: don't even initialize if user prefers reduced motion
const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduce) {
  // Option A: load JSON file (keeps HTML clean)
  particlesJS.load('particles-js', 'particles.json', function () {
    // console.log('particles.js config loaded');
  });

  // Option B: inline config (uncomment to embed):
  /*
  particlesJS('particles-js', {
    // paste the JSON above here as a JS object
  });
  */
}

// Ensure hero fills viewport correctly on mobile
function setHeroHeight() {
  const hero = document.querySelector('.hero');
  hero.style.height = `${window.innerHeight}px`;
}

window.addEventListener('resize', setHeroHeight);
window.addEventListener('load', setHeroHeight);

// --- Projects Filter JS ---
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Toggle active class on buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter projects
      projectItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
  