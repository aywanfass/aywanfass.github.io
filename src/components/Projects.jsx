import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      title: 'E-commerce Platform',
      description: 'Une plateforme e-commerce complète avec gestion des paiements et tableau de bord administrateur.',
      tags: ['React', 'Node.js']
    },
    {
      title: 'Task Management App',
      description: 'Application de gestion de tâches collaborative avec synchronisation en temps réel.',
      tags: ['Vue.js', 'Firebase']
    },
    {
      title: 'Weather Dashboard',
      description: 'Dashboard météo interactif avec visualisations de données et prévisions détaillées.',
      tags: ['Next.js', 'API']
    },
    {
      title: 'Fitness Tracking App',
      description: 'Application mobile de suivi fitness avec plans d\'entraînement personnalisés.',
      tags: ['React Native', 'Mobile']
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Projets Récents</h2>
        </div>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <div className="project-overlay">
                  <a href="#" className="btn-view">Voir le projet →</a>
                </div>
              </div>
              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
