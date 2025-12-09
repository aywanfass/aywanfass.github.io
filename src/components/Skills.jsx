import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      icon: '💻',
      title: 'Frontend',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Vue.js', level: 80 }
      ]
    },
    {
      icon: '⚙️',
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'PHP', level: 80 },
        { name: 'SQL', level: 90 }
      ]
    },
    {
      icon: '🎨',
      title: 'Design',
      skills: [
        { name: 'UI/UX', level: 92 },
        { name: 'Figma', level: 88 },
        { name: 'Adobe XD', level: 85 },
        { name: 'Photoshop', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Mes Compétences</h2>
        </div>
        
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div className="skill-category" key={index}>
              <div className="category-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div className="skill-item" key={idx}>
                    <span data-level={`${skill.level}%`}>{skill.name}</span>
                    <div className="skill-bar">
                      <div 
                        className="skill-level" 
                        style={{ '--level': `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
