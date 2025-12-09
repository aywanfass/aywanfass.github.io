import React from 'react';

const About = () => {
  const stats = [
    { value: '5+', label: 'Années d\'expérience' },
    { value: '50+', label: 'Projets réalisés' },
    { value: '100%', label: 'Satisfaction client' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Qui suis-je ?</span>
          <h2 className="section-title">À propos de moi</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="lead-text">
              Passionné par la technologie et le design, je crée des solutions digitales innovantes qui allient esthétique et performance.
            </p>
            <p>
              Avec plusieurs années d'expérience dans le développement web, je me spécialise dans la création d'applications modernes et responsive. Mon approche combine créativité, rigueur technique et attention aux détails.
            </p>
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div className="stat-card" key={index}>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
