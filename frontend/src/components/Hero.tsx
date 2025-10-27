import React from "react";

export default function Hero() {
  return (
    <div className="jumbotron-like py-4">
      <div className="container d-flex align-items-start">
        <img
          id="maPhoto"
          className="rounded"
          src="/images/Aywanfass.jpg"
          alt="photo d'Aywan FASS"
        />
        <div>
          <p className="mb-3">
            Je m'appelle Aywan FASS, j'ai 18 ans et ce site a pour vocation de
            me présenter en tant que personne, en tant qu’étudiant et candidat à
            l'obtention du BTS SIO (Services Informatiques aux Organisations) et
            en tant que futur professionnel de l'informatique.
          </p>
          <a className="btn btn-primary btn-lg" href="#cv" role="button">
            En savoir plus »
          </a>
        </div>
      </div>
    </div>
  );
}
