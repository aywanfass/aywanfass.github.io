import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container my-5 text-center" role="main" aria-label="Page d'erreur 404">
      <div className="py-5">
        <div className="mb-4">
          <span className="display-1 text-muted" aria-hidden="true">404</span>
        </div>
        
        <h1 className="h2 mb-3">Page introuvable</h1>
        <p className="lead text-muted mb-4">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5">
          <Link to="/" className="btn btn-primary btn-lg" aria-label="Retourner à la page d'accueil">
            🏠 Retour à l'accueil
          </Link>
          <Link to="/contact" className="btn btn-outline-secondary btn-lg" aria-label="Aller à la page de contact">
            📧 Me contacter
          </Link>
        </div>

        <section aria-label="Liens utiles">
          <h2 className="h5 mb-3">Liens utiles</h2>
          <nav>
            <ul className="list-unstyled d-flex flex-wrap gap-3 justify-content-center">
              <li><Link to="/cv" className="text-decoration-none">Mon CV</Link></li>
              <li><Link to="/#projets" className="text-decoration-none">Mes projets</Link></li>
              <li><Link to="/#a-propos" className="text-decoration-none">À propos</Link></li>
            </ul>
          </nav>
        </section>
      </div>
    </main>
  );
}
