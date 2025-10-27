import React from "react";

export default function Realisations() {
  return (
    <main className="container my-5">
      <h1 className="mb-4">Réalisations</h1>
      <p className="text-muted">
        Liste de projets réalisés en autonomie et en entreprise.
      </p>

      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Mon Portfolio</h5>
              <p className="card-text">
                Migration en React + TypeScript + Spring Boot.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Nolark</h5>
              <p className="card-text">Description courte du projet Nolark.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Projet d’entreprise</h5>
              <p className="card-text">
                Résumé de ta mission (ex: CRUD, API, etc.).
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
