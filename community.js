const revealElements = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => observer.observe(el));

const joinButtons = document.querySelectorAll('[data-action="join"]');
joinButtons.forEach((button) => {
  button.addEventListener('click', () => {
    window.location.hash = '#join';
  });
});
