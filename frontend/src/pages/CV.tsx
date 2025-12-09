import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideUp, staggerContainer, scaleIn } from "../utils/animations";

export default function CV() {
  return (
    <motion.main 
      className="container my-5" 
      role="main" 
      aria-label="Curriculum Vitae"
      initial="hidden"
      animate="visible"
      variants={fadeIn as any}
    >
      <motion.header className="mb-5 text-center" variants={slideUp as any}>
        <h1 className="display-5 mb-2">Aywan Fass</h1>
        <p className="lead text-muted">Développeur Web & Étudiant BTS SIO SLAM</p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <span>📍 Toulon, France</span>
          <span>📧 <a href="mailto:a.fass83000@gmail.com">a.fass83000@gmail.com</a></span>
          <span>🔗 <a href="https://github.com/aywanfass" target="_blank" rel="noopener noreferrer">GitHub</a></span>
        </div>
        <motion.div className="mt-3">
          <motion.button 
            className="btn btn-primary" 
            onClick={() => window.print()} 
            aria-label="Imprimer le CV"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📄 Télécharger / Imprimer
          </motion.button>
        </motion.div>
      </motion.header>

      <motion.section 
        className="mb-5" 
        aria-labelledby="profile-heading"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 id="profile-heading" className="h3 border-bottom pb-2 mb-3" variants={slideUp as any}>
          Profil
        </motion.h2>
        <motion.p variants={slideUp as any}>
          Étudiant passionné en BTS SIO option SLAM, je me spécialise dans le développement d'applications web
          modernes et performantes. Autonome, curieux et orienté résultats, je cherche à approfondir mes compétences
          en développement full-stack et à contribuer à des projets innovants.
        </motion.p>
      </motion.section>

      <motion.section 
        className="mb-5" 
        aria-labelledby="formation-heading"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 id="formation-heading" className="h3 border-bottom pb-2 mb-3" variants={slideUp as any}>
          Formation
        </motion.h2>
        <article className="mb-3">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h3 className="h5 mb-1">BTS SIO — Option SLAM</h3>
              <p className="text-muted mb-1">Lycée Bonaparte, Toulon</p>
            </div>
            <span className="badge bg-secondary">2024–2026</span>
          </div>
          <p className="mt-2">
            Formation en alternance axée sur le développement logiciel, la modélisation (UML, Merise),
            la gestion de bases de données et les méthodes agiles.
          </p>
        </article>
        <article>
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h3 className="h5 mb-1">Baccalauréat Général</h3>
              <p className="text-muted mb-1">Spécialités SI et Mathématiques</p>
            </div>
            <span className="badge bg-secondary">2024</span>
          </div>
        </article>
      </motion.section>

      <motion.section 
        className="mb-5" 
        aria-labelledby="competences-heading"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 id="competences-heading" className="h3 border-bottom pb-2 mb-3" variants={slideUp as any}>
          Compétences Techniques
        </motion.h2>
        <div className="row g-3">
          <div className="col-md-6">
            <h3 className="h6">Langages & Frameworks</h3>
            <ul className="list-unstyled">
              <li>• <strong>Front-end:</strong> HTML5, CSS, JavaScript/TypeScript, React</li>
              <li>• <strong>Back-end:</strong> PHP, Symfony, Java, Spring Boot, Node.js</li>
              <li>• <strong>Mobile:</strong> React Native (notions)</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3 className="h6">Bases de données & Outils</h3>
            <ul className="list-unstyled">
              <li>• <strong>BDD:</strong> MySQL</li>
              <li>• <strong>Outils:</strong> Git/GitHub, VS Code</li>
              <li>• <strong>Méthodes:</strong> Agile, UML</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="mb-5" 
        aria-labelledby="experiences-heading"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 id="experiences-heading" className="h3 border-bottom pb-2 mb-3" variants={slideUp as any}>
          Expériences Professionnelles
        </motion.h2>
        <article className="mb-4">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h3 className="h5 mb-1">Développeur Web — Alternance</h3>
              <p className="text-muted mb-1">CPAM DU VAR, Toulon</p>
            </div>
            <span className="badge bg-primary">Sept 2024 – Présent</span>
          </div>
          <ul className="mt-2">
            <li>Développement d'applications web internes avec Symfony pour faciliter le quotidien des utilisateurs</li>
            <li>Conception et réalisation d'applications métiers adaptées aux besoins des différents services</li>
            <li>Collaboration avec les équipes pour identifier et automatiser les tâches récurrentes</li>
            <li>Maintenance et évolution des applications existantes en environnement de production</li>
          </ul>
        </article>
        <article>
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h3 className="h5 mb-1">Stage d'Observation & Développement Web</h3>
              <p className="text-muted mb-1">Interact Software, Toulon</p>
            </div>
            <span className="badge bg-secondary">2021</span>
          </div>
          <ul className="mt-2">
            <li>Stage d'observation en entreprise de développement logiciel</li>
            <li>Création de tableaux de bord interactifs avec graphiques pour visualiser les données</li>
            <li>Mise en place d'interfaces intuitives permettant aux clients de gérer leurs informations</li>
          </ul>
        </article>
      </motion.section>

      <motion.section 
        className="mb-5" 
        aria-labelledby="projets-heading"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 id="projets-heading" className="h3 border-bottom pb-2 mb-3" variants={slideUp as any}>
          Projets Personnels
        </motion.h2>
        <article className="mb-3">
          <h3 className="h5">Portfolio Personnel</h3>
          <p className="text-muted">React, TypeScript, Bootstrap</p>
          <p>Site web vitrine présentant mes compétences, projets et CV. Déployé sur GitHub Pages.</p>
        </article>
      </motion.section>

      <motion.section 
        className="mb-5" 
        aria-labelledby="langues-heading"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 id="langues-heading" className="h3 border-bottom pb-2 mb-3" variants={slideUp as any}>
          Langues
        </motion.h2>
        <ul className="list-unstyled">
          <li>🇫🇷 <strong>Français:</strong> Langue maternelle</li>
          <li>🇬🇧 <strong>Anglais:</strong> Niveau B2 (lecture technique, documentation)</li>
        </ul>
      </motion.section>

      <motion.section 
        aria-labelledby="interets-heading"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 id="interets-heading" className="h3 border-bottom pb-2 mb-3" variants={slideUp as any}>
          Centres d'Intérêt
        </motion.h2>
        <motion.p variants={slideUp as any}>
          Technologies, jeux vidéo, lecture de science-fiction.
        </motion.p>
      </motion.section>
    </motion.main>
  );
}
