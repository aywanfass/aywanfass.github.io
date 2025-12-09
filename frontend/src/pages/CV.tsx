import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideUp, staggerContainer, scaleIn } from "../utils/animations";

export default function CV() {
  return (
    <motion.main
      className="py-5"
      role="main"
      aria-label="Curriculum Vitae"
      initial="hidden"
      animate="visible"
      variants={fadeIn as any}
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #111827 0, #020617 55%)",
        color: "#e5e7eb",
      }}
    >
      <div className="container">
        <motion.header
          className="mb-5 text-center"
          variants={slideUp as any}
        >
          <h1 className="display-5 mb-1">Aywan Fass</h1>
          <p className="lead text-muted">
            Développeur Web & Étudiant BTS SIO SLAM
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap text-muted">
            <span>📍 Toulon, France</span>
            <span>
              📧{" "}
              <a href="mailto:a.fass83000@gmail.com">
                a.fass83000@gmail.com
              </a>
            </span>
            <span>
              🔗{" "}
              <a
                href="https://github.com/aywanfass"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>
          </div>
          <motion.div className="mt-3" variants={scaleIn as any}>
            <motion.button
              className="btn btn-primary rounded-pill px-4"
              onClick={() => window.print()}
              aria-label="Imprimer le CV"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📄 Télécharger / Imprimer
            </motion.button>
          </motion.div>
        </motion.header>

        <div className="row g-4">
          <div className="col-lg-8">
            {/* Profil */}
            <motion.section
              className="mb-4"
              aria-labelledby="profile-heading"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.div
                className="p-4 rounded-4 shadow-sm"
                variants={slideUp as any}
                style={{
                  background: "rgba(15,23,42,0.95)",
                  border: "1px solid rgba(148,163,184,0.25)",
                  color: "#e5e7eb",
                }}
              >
                <h2
                  id="profile-heading"
                  className="h4 border-bottom pb-2 mb-3"
                  style={{ color: "#e5e7eb", borderColor: "#4b5563" }}
                >
                  Profil
                </h2>
                <p className="mb-0">
                  Étudiant passionné en BTS SIO option SLAM, je me spécialise
                  dans le développement d'applications web modernes et
                  performantes. Autonome, curieux et orienté résultats, je
                  cherche à approfondir mes compétences en développement
                  full-stack et à contribuer à des projets innovants.
                </p>
              </motion.div>
            </motion.section>

            {/* Formation */}
            <motion.section
              className="mb-4"
              aria-labelledby="formation-heading"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.div
                className="p-4 rounded-4 shadow-sm"
                variants={slideUp as any}
                style={{
                  background: "rgba(15,23,42,0.95)",
                  border: "1px solid rgba(148,163,184,0.25)",
                  color: "#e5e7eb",
                }}
              >
                <h2
                  id="formation-heading"
                  className="h4 border-bottom pb-2 mb-3"
                  style={{ color: "#e5e7eb", borderColor: "#4b5563" }}
                >
                  Formation
                </h2>
                <article className="mb-3">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h3 className="h5 mb-1">BTS SIO — Option SLAM</h3>
                      <p className="text-muted mb-1">
                        Lycée Bonaparte, Toulon
                      </p>
                    </div>
                    <span className="badge bg-secondary">2024–2026</span>
                  </div>
                  <p className="mt-2 mb-0">
                    Formation en alternance axée sur le développement logiciel,
                    la modélisation (UML, Merise), la gestion de bases de
                    données et les méthodes agiles.
                  </p>
                </article>
                <article>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h3 className="h5 mb-1">Baccalauréat Général</h3>
                      <p className="text-muted mb-1">
                        Lycée du Coudon, La Garde
                      </p>
                    </div>
                    <span className="badge bg-secondary">2024</span>
                  </div>
                  <p className="mt-2 mb-0">
                    Spécialités SI et Mathématiques
                  </p>
                </article>
              </motion.div>
            </motion.section>

            {/* Expériences */}
            <motion.section
              className="mb-4"
              aria-labelledby="experiences-heading"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.div
                className="p-4 rounded-4 shadow-sm"
                variants={slideUp as any}
                style={{
                  background: "rgba(15,23,42,0.95)",
                  border: "1px solid rgba(148,163,184,0.25)",
                  color: "#e5e7eb",
                }}
              >
                <h2
                  id="experiences-heading"
                  className="h4 border-bottom pb-2 mb-3"
                  style={{ color: "#e5e7eb", borderColor: "#4b5563" }}
                >
                  Expériences Professionnelles
                </h2>
                <article className="mb-4">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h3 className="h5 mb-1">
                        Développeur Web — Alternance
                      </h3>
                      <p className="text-muted mb-1">
                        CPAM DU VAR, Toulon
                      </p>
                    </div>
                    <span className="badge bg-primary">
                      Sept 2024 – Présent
                    </span>
                  </div>
                  <ul className="mt-2 mb-0">
                    <li>
                      Développement d'applications web internes avec Symfony
                      pour faciliter le quotidien des utilisateurs
                    </li>
                    <li>
                      Conception et réalisation d'applications métiers adaptées
                      aux besoins des différents services
                    </li>
                    <li>
                      Collaboration avec les équipes pour identifier et
                      automatiser les tâches récurrentes
                    </li>
                    <li>
                      Maintenance et évolution des applications existantes en
                      environnement de production
                    </li>
                  </ul>
                </article>
                <article>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h3 className="h5 mb-1">
                        Stage d'Observation & Développement Web
                      </h3>
                      <p className="text-muted mb-1">
                        Interact Software, Toulon
                      </p>
                    </div>
                    <span className="badge bg-secondary">2021</span>
                  </div>
                  <ul className="mt-2 mb-0">
                    <li>
                      Stage d'observation en entreprise de développement
                      logiciel
                    </li>
                    <li>
                      Création de tableaux de bord interactifs avec graphiques
                      pour visualiser les données
                    </li>
                    <li>
                      Mise en place d'interfaces intuitives permettant aux
                      clients de gérer leurs informations
                    </li>
                  </ul>
                </article>
              </motion.div>
            </motion.section>

            {/* Projets */}
            <motion.section
              className="mb-4"
              aria-labelledby="projets-heading"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.div
                className="p-4 rounded-4 shadow-sm"
                variants={slideUp as any}
                style={{
                  background: "rgba(15,23,42,0.95)",
                  border: "1px solid rgba(148,163,184,0.25)",
                  color: "#e5e7eb",
                }}
              >
                <h2
                  id="projets-heading"
                  className="h4 border-bottom pb-2 mb-3"
                  style={{ color: "#e5e7eb", borderColor: "#4b5563" }}
                >
                  Projets Personnels
                </h2>
                <article className="mb-2">
                  <h3 className="h5 mb-1">Portfolio Personnel</h3>
                  <p className="text-muted mb-1">
                    React, TypeScript, Bootstrap
                  </p>
                  <p className="mb-0">
                    Site web vitrine présentant mes compétences, projets et CV.
                    Déployé sur GitHub Pages.
                  </p>
                </article>
              </motion.div>
            </motion.section>
          </div>

          <div className="col-lg-4">
            {/* Compétences */}
            <motion.section
              className="mb-4"
              aria-labelledby="competences-heading"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.div
                className="p-4 rounded-4 shadow-sm"
                variants={slideUp as any}
                style={{
                  background: "rgba(15,23,42,0.95)",
                  border: "1px solid rgba(148,163,184,0.25)",
                  color: "#e5e7eb",
                }}
              >
                <h2
                  id="competences-heading"
                  className="h4 border-bottom pb-2 mb-3"
                  style={{ color: "#e5e7eb", borderColor: "#4b5563" }}
                >
                  Compétences Techniques
                </h2>
                <div className="row g-3">
                  <div className="col-12">
                    <h3 className="h6">Langages & Frameworks</h3>
                    <ul className="list-unstyled mb-3">
                      <li>
                        • <strong>Front-end : </strong> HTML5, CSS,
                        JavaScript/TypeScript, React
                      </li>
                      <li>
                        • <strong>Back-end : </strong> PHP, Symfony, Java,
                        Spring Boot, Node.js
                      </li>
                      <li>
                        • <strong>Mobile : </strong> React Native (notions)
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <h3 className="h6">Bases de données & Outils</h3>
                    <ul className="list-unstyled mb-0">
                      <li>
                        • <strong>BDD : </strong> MySQL
                      </li>
                      <li>
                        • <strong>Outils : </strong> Git/GitHub, VS Code
                      </li>
                      <li>
                        • <strong>Méthodes : </strong> Agile, UML
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.section>

            {/* Langues */}
            <motion.section
              className="mb-4"
              aria-labelledby="langues-heading"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.div
                className="p-4 rounded-4 shadow-sm"
                variants={slideUp as any}
                style={{
                  background: "rgba(15,23,42,0.95)",
                  border: "1px solid rgba(148,163,184,0.25)",
                  color: "#e5e7eb",
                }}
              >
                <h2
                  id="langues-heading"
                  className="h4 border-bottom pb-2 mb-3"
                  style={{ color: "#e5e7eb", borderColor: "#4b5563" }}
                >
                  Langues
                </h2>
                <ul className="list-unstyled mb-0">
                  <li>
                    <strong>Français : </strong> Langue maternelle
                  </li>
                  <li>
                    <strong>Anglais : </strong> Niveau B2 (lecture technique,
                    documentation)
                  </li>
                </ul>
              </motion.div>
            </motion.section>

            {/* Centres d'intérêt */}
            <motion.section
              aria-labelledby="interets-heading"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.div
                className="p-4 rounded-4 shadow-sm"
                variants={slideUp as any}
                style={{
                  background: "rgba(15,23,42,0.95)",
                  border: "1px solid rgba(148,163,184,0.25)",
                  color: "#e5e7eb",
                }}
              >
                <h2
                  id="interets-heading"
                  className="h4 border-bottom pb-2 mb-3"
                  style={{ color: "#e5e7eb", borderColor: "#4b5563" }}
                >
                  Centres d'Intérêt
                </h2>
                <p className="mb-0">
                  Technologies, jeux vidéo, lecture de science-fiction.
                </p>
              </motion.div>
            </motion.section>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
