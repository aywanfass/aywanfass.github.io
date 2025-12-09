import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMenu();
  };

  return (
    <nav 
      className="navbar" 
      style={{
        boxShadow: scrolled 
          ? '0 4px 20px rgba(0, 0, 0, 0.1)' 
          : '0 2px 20px rgba(0, 0, 0, 0.05)'
      }}
    >
      <div className="logo">AF</div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>
            À propos
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => scrollToSection(e, '#skills')}>
            Compétences
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>
            Projets
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className="btn-primary"
            onClick={(e) => scrollToSection(e, '#contact')}
          >
            Contact
          </a>
        </li>
      </ul>
      <div 
        className={`burger ${isOpen ? 'toggle' : ''}`} 
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
