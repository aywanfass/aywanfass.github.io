import React from "react";

export default function Sections() {
  return (
    <section className="container my-5">
      <div className="row g-4">
        <div className="col-lg-4">
          <h2>Étudiant du BTS SIO</h2>
          <p>
            J'ai choisi de suivre le BTS SIO en alternance car je souhaitais
            pouvoir progresser tout en m'intégrant à la vie active, apprendre à
            être autonome, pouvoir utiliser les outils de collaboration à
            distance et devenir plus responsable en étant capable de me fixer
            moi‑même des contraintes, des limites et des objectifs à atteindre !
          </p>
          <p>
            <a
              className="btn btn-secondary"
              href="https://bts-sio.lyc-bonaparte.fr/"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              En savoir plus »
            </a>
          </p>
        </div>

        <div className="col-lg-4">
          <h2>Le BTS SIO</h2>
          <p>
            Passionné d'informatique depuis mon plus jeune âge, j'aime apprendre
            à faire de nouvelles choses avec mon ordinateur, mon smartphone ou
            ma tablette. Un Geek ? Oui assurément ! Mais j'aimerais maintenant
            passer au niveau au‑dessus et devenir un vrai Nerd, dans le bon sens
            du terme ! Après mon bac, le BTS SIO s'est présenté comme une
            évidence. Avec 60% d'Informatique "pure", 13% d'économie, management
            et droit de l'informatique, 9% d'Anglais, 9% de culture générale et
            9% de Maths, je savais que cette formation allait me mettre le pied
            à l'étrier pour poursuivre ensuite dans cette voie et devenir
            informaticien !
          </p>
          <p>
            <a
              className="btn btn-secondary"
              href="https://fr.wikipedia.org/wiki/Brevet_de_technicien_sup%C3%A9rieur_-_Services_informatiques_aux_organisations"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              En savoir plus »
            </a>
          </p>
        </div>

        <div className="col-lg-4">
          <h2>Option B SLAM</h2>
          <p>
            "Solutions Logicielles et Applications Métiers" est l'option qui m'a
            séduit ! Travailler en équipe à la satisfaction de besoins d'un
            client, définir des spécifications, faire des tests, corriger des
            bugs, faire de la maintenance, veiller à la sécurité des données à
            caractère personnel... tout en apprenant les bases du métier de
            développeur : modélisation des données avec Merise et UML,
            programmation objet avec Java, C# et PHP, conception de bases de
            données sous PostgreSQL et MySQL, réalisation de composants
            logiciels avec Symfony, gestion de projet, méthodes agiles...
            J'étais sûr que ça serait fait pour moi !
          </p>
          <p>
            <a
              className="btn btn-secondary"
              href="https://www.onisep.fr/Ressources/Univers-Formation/Formations/Post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              En savoir plus »
            </a>
          </p>
        </div>
      </div>

      <hr />
      <p className="text-center footer-copy" id="copyright">
        © Aywan FASS 2026
      </p>
    </section>
  );
}
