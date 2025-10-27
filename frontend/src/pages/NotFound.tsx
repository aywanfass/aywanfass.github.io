import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container my-5">
      <h1>Page introuvable</h1>
      <p className="text-muted">La page demandée n'existe pas.</p>
      <Link to="/" className="btn btn-primary">
        Retour à l'accueil
      </Link>
    </main>
  );
}
