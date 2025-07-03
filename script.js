// Project filter
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.getAttribute('data-filter');
    document.querySelectorAll('.project-card').forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animate skills progress bars
window.addEventListener('scroll', () => {
  const skills = document.querySelectorAll('.skill-item');
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    if (rect.top >= 0 && rect.top < window.innerHeight) {
      const progress = skill.querySelector('.skill-progress');
      if (progress) {
        const level = parseInt(skill.querySelector('.progress-bar-text').textContent);
        progress.style.width = `${level}%`;
      }
    }
  });
});

// Trigger animation on load
window.dispatchEvent(new Event('scroll'));
