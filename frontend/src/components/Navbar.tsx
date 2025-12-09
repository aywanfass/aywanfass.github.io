import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top" role="navigation" aria-label="Navigation principale">
      <div className="container">
        <Link className="navbar-brand" to="/" aria-label="Retour à l'accueil">
          Aywan Fass
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Basculer la navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                to="/"
                aria-current={isActive("/") ? "page" : undefined}
              >
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/realisations") ? "active" : ""}`}
                to="/realisations"
                aria-current={isActive("/realisations") ? "page" : undefined}
              >
                Réalisations
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/cv") ? "active" : ""}`}
                to="/cv"
                aria-current={isActive("/cv") ? "page" : undefined}
              >
                CV
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                to="/contact"
                aria-current={isActive("/contact") ? "page" : undefined}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
