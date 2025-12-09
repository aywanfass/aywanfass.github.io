import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-5 border-top bg-light" aria-label="Pied de page" role="contentinfo">
      <div className="container">
        <div className="row align-items-start gy-4">
          <div className="col-12 col-md-4">
            <strong className="d-block mb-2" style={{ fontSize: "1.125rem", color: "var(--color-text)" }}>Aywan Fass</strong>
            <p className="mb-3 text-muted" style={{ fontSize: "0.9rem" }}>
              Développeur web — Création d'expériences performantes et accessibles.
            </p>
            {/* Social links */}
            <nav aria-label="Réseaux sociaux">
              <ul className="list-inline m-0">
                <li className="list-inline-item me-3">
                  <a
                    className="text-decoration-none"
                    href="https://www.linkedin.com/aywan-fass/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ouvrir LinkedIn dans un nouvel onglet"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="list-inline-item me-3">
                  <a
                    className="text-decoration-none"
                    href="https://github.com/aywanfass"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ouvrir GitHub dans un nouvel onglet"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-6 col-md-4">
            <h3 className="h6 mb-3" style={{ fontWeight: 600, color: "var(--color-text)" }}>Navigation</h3>
            <nav aria-label="Navigation principale">
              <ul className="list-unstyled m-0">
                <li className="mb-2">
                  <a className="text-decoration-none" href="/realisations">Réalisations</a>
                </li>
                <li className="mb-2">
                  <a className="text-decoration-none" href="/cv">CV</a>
                </li>
                <li>
                  <a className="text-decoration-none" href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-6 col-md-4">
            <h3 className="h6 mb-3" style={{ fontWeight: 600, color: "var(--color-text)" }}>Contact</h3>
            <address className="m-0" aria-label="Coordonnées">
              <div className="mb-2 text-muted" style={{ fontSize: "0.9rem" }}>📍 Toulon, France</div>
              <a
                className="text-decoration-none d-block"
                href="mailto:a.fass83000@gmail.com"
                title="Envoyer un email"
                style={{ fontSize: "0.9rem" }}
              >
                📧 a.fass83000@gmail.com
              </a>
            </address>
          </div>
        </div>

        <hr className="my-4" style={{ opacity: 0.2, borderColor: "var(--color-border)" }} />

        <div className="text-center">
          <small className="text-muted" style={{ fontSize: "0.875rem" }}>
            © {year} Aywan Fass — Tous droits réservés
          </small>
        </div>
      </div>
    </footer>
  );
}
