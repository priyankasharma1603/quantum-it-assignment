document.addEventListener('DOMContentLoaded', function() {
  const featureCards = document.querySelectorAll('.feature-card');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, {
      threshold: 0.1
  });

  featureCards.forEach(card => {
      observer.observe(card);
  });
});
// JavaScript for additional interactivity or validation can go here

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted successfully!');
});
