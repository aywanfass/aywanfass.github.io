import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, slideUp, scaleIn } from "../utils/animations";

export default function NotFound() {
  return (
    <motion.main
      className="d-flex align-items-center justify-content-center py-5"
      role="main"
      aria-label="Page d'erreur 404"
      initial="hidden"
      animate="visible"
      variants={fadeIn as any}
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top left, #111827 0, #020617 55%)",
        color: "#e5e7eb",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div
              className="p-4 p-lg-5 rounded-4 shadow-sm text-center"
              style={{
                background: "rgba(15,23,42,0.95)",
                border: "1px solid rgba(148,163,184,0.25)",
                color: "#e5e7eb",
              }}
            >
              <motion.div
                className="mb-3"
                initial="hidden"
                animate="visible"
                variants={scaleIn as any}
              >
                <span
                  className="display-1 text-muted d-block"
                  aria-hidden="true"
                  style={{ letterSpacing: "0.15em" }}
                >
                  404
                </span>
              </motion.div>

              <motion.h1
                className="h3 mb-2"
                initial="hidden"
                animate="visible"
                variants={slideUp as any}
              >
                Page introuvable
              </motion.h1>
              <motion.p
                className="text-muted mb-4"
                initial="hidden"
                animate="visible"
                variants={slideUp as any}
              >
                Désolé, la page que vous recherchez n'existe pas ou a été
                déplacée.
              </motion.p>

              <motion.div
                className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-4"
                initial="hidden"
                animate="visible"
                variants={slideUp as any}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/"
                    className="btn btn-primary btn-lg rounded-pill"
                    aria-label="Retourner à la page d'accueil"
                  >
                    🏠 Retour à l'accueil
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="btn btn-outline-secondary btn-lg rounded-pill"
                    aria-label="Aller à la page de contact"
                  >
                    📧 Me contacter
                  </Link>
                </motion.div>
              </motion.div>

              <motion.section
                aria-label="Liens utiles"
                initial="hidden"
                animate="visible"
                variants={slideUp as any}
              >
                <h2 className="h6 mb-3 text-muted">Liens utiles</h2>
                <nav>
                  <ul className="list-unstyled d-flex flex-wrap gap-3 justify-content-center mb-0">
                    <li>
                      <Link to="/cv" className="text-decoration-none">
                        Mon CV
                      </Link>
                    </li>
                    <li>
                      <Link to="/realisations" className="text-decoration-none">
                        Mes projets
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none">
                        Accueil
                      </Link>
                    </li>
                  </ul>
                </nav>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
