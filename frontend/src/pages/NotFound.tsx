import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, slideUp, scaleIn } from "../utils/animations";

export default function NotFound() {
  return (
    <motion.main 
      className="container my-5 text-center" 
      role="main" 
      aria-label="Page d'erreur 404"
      initial="hidden"
      animate="visible"
      variants={fadeIn as any}
    >
      <div className="py-5">
        <motion.div 
          className="mb-4" 
          initial="hidden"
          animate="visible"
          variants={scaleIn as any}
        >
          <span className="display-1 text-muted" aria-hidden="true">404</span>
        </motion.div>
        
        <motion.h1 
          className="h2 mb-3" 
          initial="hidden"
          animate="visible"
          variants={slideUp as any}
        >
          Page introuvable
        </motion.h1>
        <motion.p 
          className="lead text-muted mb-4" 
          initial="hidden"
          animate="visible"
          variants={slideUp as any}
        >
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </motion.p>

        <motion.div 
          className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5"
          initial="hidden"
          animate="visible"
          variants={slideUp as any}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" className="btn btn-primary btn-lg" aria-label="Retourner à la page d'accueil">
              🏠 Retour à l'accueil
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact" className="btn btn-outline-secondary btn-lg" aria-label="Aller à la page de contact">
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
          <h2 className="h5 mb-3">Liens utiles</h2>
          <nav>
            <ul className="list-unstyled d-flex flex-wrap gap-3 justify-content-center">
              <li><Link to="/cv" className="text-decoration-none">Mon CV</Link></li>
              <li><Link to="/realisations" className="text-decoration-none">Mes projets</Link></li>
              <li><Link to="/" className="text-decoration-none">Accueil</Link></li>
            </ul>
          </nav>
        </motion.section>
      </div>
    </motion.main>
  );
}
