import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, slideUp, hoverScale } from "../utils/animations";

export default function Sections() {
  return (
    <motion.section
      className="container my-5 my-lg-6"
      aria-label="Présentation de la formation"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="text-center mb-5">
        <h2 className="h2 mb-2">Mon parcours en BTS SIO</h2>
        <p
          className="text-muted mb-0"
          style={{ maxWidth: 640, margin: "0 auto" }}
        >
          Un cursus tourné vers le développement logiciel, les projets concrets
          et l’accompagnement des organisations dans leur transformation numérique.
        </p>
      </div>

      <div className="row g-4">
        <motion.article className="col-lg-4" variants={slideUp as any}>
          <motion.div
            whileHover={hoverScale}
            className="h-100 p-4 rounded-4"
            style={{
              background: "rgba(15,23,42,0.95)",
              boxShadow: "0 18px 40px rgba(15,23,42,0.8)",
              border: "1px solid rgba(148,163,184,0.25)",
              color: "#e5e7eb",
            }}
          >
            <div className="d-flex align-items-center mb-3">
              <span
                className="rounded-circle d-inline-flex align-items-center justify-content-center me-3"
                style={{
                  width: 40,
                  height: 40,
                  background: "rgba(13,110,253,0.1)",
                  color: "var(--bs-primary)",
                  fontSize: "1.1rem",
                }}
                aria-hidden="true"
              >
                🎓
              </span>
              <h3 className="h5 mb-0">Étudiant du BTS SIO</h3>
            </div>
            <p className="text-muted mb-3" style={{ color: "#e5e7eb" }}>
              J'ai choisi le BTS SIO en alternance pour progresser tout en
              m'intégrant à la vie active. Cette formation me permet d'apprendre
              l'autonomie, la collaboration à distance et la gestion d'objectifs
              professionnels.
            </p>
            <a
              className="btn btn-secondary btn-sm rounded-pill px-3"
              href="https://bts-sio.lyc-bonaparte.fr/"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              aria-label="En savoir plus sur le BTS SIO (ouvre un nouvel onglet)"
            >
              En savoir plus »
            </a>
          </motion.div>
        </motion.article>

        <motion.article className="col-lg-4" variants={slideUp as any}>
          <motion.div
            whileHover={hoverScale}
            className="h-100 p-4 rounded-4"
            style={{
              background: "rgba(15,23,42,0.95)",
              boxShadow: "0 18px 40px rgba(15,23,42,0.8)",
              border: "1px solid rgba(148,163,184,0.25)",
              color: "#e5e7eb",
            }}
          >
            <div className="d-flex align-items-center mb-3">
              <span
                className="rounded-circle d-inline-flex align-items-center justify-content-center me-3"
                style={{
                  width: 40,
                  height: 40,
                  background: "rgba(13,110,253,0.1)",
                  color: "var(--bs-primary)",
                  fontSize: "1.1rem",
                }}
                aria-hidden="true"
              >
                📚
              </span>
              <h3 className="h5 mb-0">Le BTS SIO</h3>
            </div>
            <p className="text-muted mb-3" style={{ color: "#e5e7eb" }}>
              Passionné d'informatique depuis toujours, j'ai choisi le BTS SIO
              pour transformer ma passion en compétences professionnelles. Avec 60%
              d'informatique pure, 13% d'économie et droit, 9% d'anglais, et des
              modules en culture générale et mathématiques, cette formation couvre
              tous les fondamentaux du métier d'informaticien.
            </p>
            <a
              className="btn btn-secondary btn-sm rounded-pill px-3"
              href="https://fr.wikipedia.org/wiki/Brevet_de_technicien_sup%C3%A9rieur_-_Services_informatiques_aux_organisations"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              aria-label="En savoir plus sur le BTS SIO (ouvre un nouvel onglet)"
            >
              En savoir plus »
            </a>
          </motion.div>
        </motion.article>

        <motion.article className="col-lg-4" variants={slideUp as any}>
          <motion.div
            whileHover={hoverScale}
            className="h-100 p-4 rounded-4"
            style={{
              background: "rgba(15,23,42,0.95)",
              boxShadow: "0 18px 40px rgba(15,23,42,0.8)",
              border: "1px solid rgba(148,163,184,0.25)",
              color: "#e5e7eb",
            }}
          >
            <div className="d-flex align-items-center mb-3">
              <span
                className="rounded-circle d-inline-flex align-items-center justify-content-center me-3"
                style={{
                  width: 40,
                  height: 40,
                  background: "rgba(13,110,253,0.1)",
                  color: "var(--bs-primary)",
                  fontSize: "1.1rem",
                }}
                aria-hidden="true"
              >
                💻
              </span>
              <h3 className="h5 mb-0">Option B SLAM</h3>
            </div>
            <p className="text-muted mb-3" style={{ color: "#e5e7eb" }}>
              L'option "Solutions Logicielles et Applications Métiers" correspond
              parfaitement à mes aspirations. Elle couvre le travail en équipe, la
              définition de spécifications, les tests, la maintenance et la sécurité
              des données. J'y apprends la modélisation (Merise, UML), la
              programmation objet (Java, PHP), les bases de données
              (MySQL) et les méthodes agiles.
            </p>
            <a
              className="btn btn-secondary btn-sm rounded-pill px-3"
              href="https://www.onisep.fr/Ressources/Univers-Formation/Formations/Post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              aria-label="En savoir plus sur l'option SLAM (ouvre un nouvel onglet)"
            >
              En savoir plus »
            </a>
          </motion.div>
        </motion.article>
      </div>
    </motion.section>
  );
}
