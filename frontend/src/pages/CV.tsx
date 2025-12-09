import React from "react";

export default function CV() {
  return (
    <main className="container my-5" role="main" aria-label="Curriculum Vitae">
      <header className="mb-5 text-center">
        <h1 className="display-5 mb-2">Aywan Fass</h1>
        <p className="lead text-muted">Développeur Web & Étudiant BTS SIO SLAM</p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <span>📍 Toulon, France</span>
          <span>📧 <a href="mailto:a.fass83000@gmail.com">a.fass83000@gmail.com</a></span>
          <span>🔗 <a href="https://github.com/aywanfass" target="_blank" rel="noopener noreferrer">GitHub</a></span>
        </div>
        <div className="mt-3">
          <button className="btn btn-primary" onClick={() => window.print()} aria-label="Imprimer le CV">
            📄 Télécharger / Imprimer
          </button>
        </div>
      </header>

      <section className="mb-5" aria-labelledby="profile-heading">
        <h2 id="profile-heading" className="h3 border-bottom pb-2 mb-3">Profil</h2>
        <p>
          Étudiant passionné en BTS SIO option SLAM, je me spécialise dans le développement d'applications web
          modernes et performantes. Autonome, curieux et orienté résultats, je cherche à approfondir mes compétences
          en développement full-stack et à contribuer à des projets innovants.
        </p>
      </section>

      <section className="mb-5" aria-labelledby="formation-heading">
        <h2 id="formation-heading" className="h3 border-bottom pb-2 mb-3">Formation</h2>
        <article className="mb-3">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h3 className="h5 mb-1">BTS SIO — Option SLAM</h3>
              <p className="text-muted mb-1">Lycée Bonaparte, Paris</p>
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
              <p className="text-muted mb-1">Spécialités NSI et Mathématiques</p>
            </div>
            <span className="badge bg-secondary">2024</span>
          </div>
        </article>
      </section>

      <section className="mb-5" aria-labelledby="competences-heading">
        <h2 id="competences-heading" className="h3 border-bottom pb-2 mb-3">Compétences Techniques</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <h3 className="h6">Langages & Frameworks</h3>
            <ul className="list-unstyled">
              <li>• <strong>Front-end:</strong> HTML5, CSS3, JavaScript/TypeScript, React</li>
              <li>• <strong>Back-end:</strong> Java, Spring Boot, PHP, Node.js</li>
              <li>• <strong>Mobile:</strong> React Native (notions)</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3 className="h6">Bases de données & Outils</h3>
            <ul className="list-unstyled">
              <li>• <strong>BDD:</strong> MySQL, PostgreSQL, MongoDB (notions)</li>
              <li>• <strong>Outils:</strong> Git/GitHub, Docker, VS Code</li>
              <li>• <strong>Méthodes:</strong> Agile (Scrum), UML, Merise</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-5" aria-labelledby="experiences-heading">
        <h2 id="experiences-heading" className="h3 border-bottom pb-2 mb-3">Expériences Professionnelles</h2>
        <article className="mb-4">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h3 className="h5 mb-1">Développeur Web — Alternance</h3>
              <p className="text-muted mb-1">Entreprise X, Paris</p>
            </div>
            <span className="badge bg-primary">Sept 2024 – Présent</span>
          </div>
          <ul className="mt-2">
            <li>Développement d'interfaces utilisateur réactives avec React et TypeScript</li>
            <li>Participation à la conception et à l'implémentation d'API REST avec Spring Boot</li>
            <li>Collaboration en équipe Agile (sprints, revues de code, stand-ups quotidiens)</li>
            <li>Maintenance et optimisation de bases de données MySQL</li>
          </ul>
        </article>
        <article>
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h3 className="h5 mb-1">Stage Développement Web</h3>
              <p className="text-muted mb-1">Entreprise Y, Paris</p>
            </div>
            <span className="badge bg-secondary">Juin – Juil 2024</span>
          </div>
          <ul className="mt-2">
            <li>Création de maquettes et prototypes avec Figma</li>
            <li>Développement de composants front-end réutilisables</li>
            <li>Tests unitaires et intégration continue (CI/CD)</li>
          </ul>
        </article>
      </section>

      <section className="mb-5" aria-labelledby="projets-heading">
        <h2 id="projets-heading" className="h3 border-bottom pb-2 mb-3">Projets Personnels</h2>
        <article className="mb-3">
          <h3 className="h5">Portfolio Personnel</h3>
          <p className="text-muted">React, TypeScript, Bootstrap</p>
          <p>Site web vitrine présentant mes compétences, projets et CV. Déployé sur GitHub Pages.</p>
        </article>
        <article>
          <h3 className="h5">Application de Gestion de Tâches</h3>
          <p className="text-muted">Java, Spring Boot, MySQL</p>
          <p>Application full-stack permettant de créer, modifier et suivre des tâches avec authentification utilisateur.</p>
        </article>
      </section>

      <section className="mb-5" aria-labelledby="langues-heading">
        <h2 id="langues-heading" className="h3 border-bottom pb-2 mb-3">Langues</h2>
        <ul className="list-unstyled">
          <li>🇫🇷 <strong>Français:</strong> Langue maternelle</li>
          <li>🇬🇧 <strong>Anglais:</strong> Niveau B2 (lecture technique, documentation)</li>
        </ul>
      </section>

      <section aria-labelledby="interets-heading">
        <h2 id="interets-heading" className="h3 border-bottom pb-2 mb-3">Centres d'Intérêt</h2>
        <p>
          Open source, veille technologique (blogs, podcasts), participation à des hackathons,
          jeux vidéo, lecture de science-fiction.
        </p>
      </section>
    </main>
  );
}
