import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, slideUp, hoverScale } from "../utils/animations";

export default function Sections() {
  return (
    <motion.section
      className="container my-5"
      aria-label="Présentation de la formation"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="row g-4">
        <motion.article className="col-lg-4" variants={slideUp as any}>
          <motion.div whileHover={hoverScale}>
            <h2 className="h4">Étudiant du BTS SIO</h2>
            <p>
              J'ai choisi le BTS SIO en alternance pour progresser tout en
              m'intégrant à la vie active. Cette formation me permet d'apprendre
              l'autonomie, la collaboration à distance et la gestion d'objectifs
              professionnels.
            </p>
            <p>
              <a
                className="btn btn-secondary"
                href="https://bts-sio.lyc-bonaparte.fr/"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                aria-label="En savoir plus sur le BTS SIO (ouvre un nouvel onglet)"
              >
                En savoir plus »
              </a>
            </p>
          </motion.div>
        </motion.article>

        <motion.article className="col-lg-4" variants={slideUp as any}>
          <motion.div whileHover={hoverScale}>
            <h2 className="h4">Le BTS SIO</h2>
            <p>
              Passionné d'informatique depuis toujours, j'ai choisi le BTS SIO
              pour transformer ma passion en compétences professionnelles. Avec 60%
              d'
              informatique pure, 13% d'économie et droit, 9% d'anglais, et des
              modules en culture générale et mathématiques, cette formation couvre
              tous les fondamentaux du métier d'informaticien.
            </p>
            <p>
              <a
                className="btn btn-secondary"
                href="https://fr.wikipedia.org/wiki/Brevet_de_technicien_sup%C3%A9rieur_-_Services_informatiques_aux_organisations"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                aria-label="En savoir plus sur le BTS SIO (ouvre un nouvel onglet)"
              >
                En savoir plus »
              </a>
            </p>
          </motion.div>
        </motion.article>

        <motion.article className="col-lg-4" variants={slideUp as any}>
          <motion.div whileHover={hoverScale}>
            <h2 className="h4">Option B SLAM</h2>
            <p>
              L'option "Solutions Logicielles et Applications Métiers" correspond
              parfaitement à mes aspirations. Elle couvre le travail en équipe, la
              définition de spécifications, les tests, la maintenance et la sécurité
              des données. J'y apprends la modélisation (Merise, UML), la
              programmation objet (Java, PHP), les bases de données
              (MySQL) et les méthodes agiles.
            </p>
            <p>
              <a
                className="btn btn-secondary"
                href="https://www.onisep.fr/Ressources/Univers-Formation/Formations/Post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                aria-label="En savoir plus sur l'option SLAM (ouvre un nouvel onglet)"
              >
                En savoir plus »
              </a>
            </p>
          </motion.div>
        </motion.article>
      </div>
    </motion.section>
  );
}
