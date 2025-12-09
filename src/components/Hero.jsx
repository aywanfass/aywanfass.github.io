import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroBackground = document.querySelector('.hero-background');
      
      if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-background"></div>
      
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-greeting">Bonjour, je suis</span>
          <h1 className="hero-title">
            Aywan <span className="gradient-text">Fassassi</span>
          </h1>
          <p className="hero-subtitle">Développeur Full-Stack & Designer Créatif</p>
          <p className="hero-description">
            Je transforme des idées en expériences digitales exceptionnelles
          </p>
          <div className="hero-cta">
            <a 
              href="#projects" 
              className="btn-primary"
              onClick={(e) => scrollToSection(e, '#projects')}
            >
              Voir mes projets
            </a>
            <a 
              href="#contact" 
              className="btn-secondary"
              onClick={(e) => scrollToSection(e, '#contact')}
            >
              Me contacter
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <span>💻</span>
          </div>
          <div className="floating-card card-2">
            <span>🎨</span>
          </div>
          <div className="floating-card card-3">
            <span>⚡</span>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
};

export default Hero;
