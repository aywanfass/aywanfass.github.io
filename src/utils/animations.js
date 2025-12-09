export const initAnimations = () => {
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        
        // Animate skill bars
        if (entry.target.classList.contains('skill-category')) {
          const skillLevels = entry.target.querySelectorAll('.skill-level');
          skillLevels.forEach(level => {
            const levelValue = level.style.getPropertyValue('--level');
            setTimeout(() => {
              level.style.width = levelValue;
            }, 100);
          });
        }
      }
    });
  }, observerOptions);

  // Observe sections for scroll animations
  const elements = document.querySelectorAll('section, .skill-category, .project-card, .stat-card');
  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
  });

  // Initialize skill bars to 0
  document.querySelectorAll('.skill-level').forEach(level => {
    level.style.width = '0%';
  });
};
