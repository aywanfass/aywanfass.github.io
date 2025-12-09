import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="pt-5 pb-4 mt-auto"
      aria-label="Pied de page"
      role="contentinfo"
      style={{
        background: "#0f172a",
        color: "#e5e7eb",
        borderTop: "1px solid rgba(148,163,184,0.3)",
      }}
    >
      <div className="container">
        <div className="row align-items-start gy-4">
          <div className="col-12 col-md-4">
            <strong
              className="d-block mb-2"
              style={{ fontSize: "1.125rem" }}
            >
              Aywan Fass
            </strong>
            <p className="mb-3" style={{ fontSize: "0.9rem", color: "#9ca3af" }}>
              Développeur web — Création d'expériences performantes et
              accessibles.
            </p>
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
                    style={{ color: "#e5e7eb" }}
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
                    style={{ color: "#e5e7eb" }}
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-6 col-md-4">
            <h3
              className="h6 mb-3 text-uppercase"
              style={{ fontWeight: 600, color: "#9ca3af", letterSpacing: "0.08em" }}
            >
              Navigation
            </h3>
            <nav aria-label="Navigation principale">
              <ul className="list-unstyled m-0">
                <li className="mb-2">
                  <a
                    className="text-decoration-none"
                    href="/realisations"
                    style={{ color: "#e5e7eb" }}
                  >
                    Réalisations
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="text-decoration-none"
                    href="/cv"
                    style={{ color: "#e5e7eb" }}
                  >
                    CV
                  </a>
                </li>
                <li>
                  <a
                    className="text-decoration-none"
                    href="/contact"
                    style={{ color: "#e5e7eb" }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-6 col-md-4">
            <h3
              className="h6 mb-3 text-uppercase"
              style={{ fontWeight: 600, color: "#9ca3af", letterSpacing: "0.08em" }}
            >
              Contact
            </h3>
            <address className="m-0" aria-label="Coordonnées">
              <div className="mb-2" style={{ fontSize: "0.9rem", color: "#9ca3af" }}>
                📍 Toulon, France
              </div>
              <a
                className="text-decoration-none d-block"
                href="mailto:a.fass83000@gmail.com"
                title="Envoyer un email"
                style={{ fontSize: "0.9rem", color: "#e5e7eb" }}
              >
                📧 a.fass83000@gmail.com
              </a>
            </address>
          </div>
        </div>

        <hr
          className="my-4"
          style={{ opacity: 0.2, borderColor: "rgba(148,163,184,0.6)" }}
        />

        <div className="text-center">
          <small style={{ fontSize: "0.875rem", color: "#9ca3af" }}>
            © {year} Aywan Fass — Tous droits réservés
          </small>
        </div>
      </div>
    </footer>
  );
}
