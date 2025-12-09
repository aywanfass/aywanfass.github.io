import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-4 border-top bg-light" aria-label="Pied de page" role="contentinfo">
      <div className="container">
        <div className="row align-items-start gy-3">
          <div className="col-12 col-md-4">
            <strong className="d-block" title="Nom de marque">Aywan Fass</strong>
            <p className="mb-2 text-muted">
              Développeur web — Création d’expériences performantes et accessibles.
            </p>
            {/* Social links (replace with actual URLs) */}
            <nav aria-label="Réseaux sociaux">
              <ul className="list-inline m-0">
                <li className="list-inline-item">
                  <a
                    className="text-decoration-none"
                    href="#"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ouvrir LinkedIn dans un nouvel onglet"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="text-decoration-none"
                    href="#"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ouvrir GitHub dans un nouvel onglet"
                  >
                    GitHub
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="text-decoration-none"
                    href="#"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ouvrir Twitter dans un nouvel onglet"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-6 col-md-4">
            <nav aria-label="Navigation principale">
              <ul className="list-unstyled m-0">
                <li><a className="text-decoration-none" href="/#projets">Projets</a></li>
                <li><a className="text-decoration-none" href="/#services">Services</a></li>
                <li><a className="text-decoration-none" href="/#a-propos">À propos</a></li>
                <li><a className="text-decoration-none" href="/#contact">Contact</a></li>
              </ul>
            </nav>
          </div>

          <div className="col-6 col-md-4">
            <address className="m-0" aria-label="Coordonnées">
              <div className="text-muted">Toulon, France</div>
              <a className="text-decoration-none" href="mailto:a.fass83000@gmail.com" title="Envoyer un email">
                a.fass83000@gmail.com
              </a>
            </address>
          </div>
        </div>

        <div className="mt-3 text-center">
          <small className="text-muted">
            © {year} Aywan Fass — Tous droits réservés
          </small>
        </div>
      </div>
    </footer>
  );
}
