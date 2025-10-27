import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    "nav-link" + (isActive ? " active" : "");

  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-md">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Portfolio Numérique
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="mainNavbar" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className={linkClass} to="/">
                <span className="fa fa-home"></span> Accueil
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={linkClass} to="/cv">
                <span className="fa fa-id-badge"></span> CV
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={linkClass} to="/realisations">
                <span className="fa fa-list-alt"></span> Réalisations
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={linkClass} to="/contact">
                <span className="fa fa-envelope"></span> Me contacter
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
