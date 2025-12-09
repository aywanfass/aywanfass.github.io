import React from "react";

type HeroProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  photoSrc?: string;
  photoAlt?: string;
};

export default function Hero({
  title = "Aywan Fass",
  subtitle = "Développeur web & Étudiant BTS SIO",
  description = `Je m'appelle Aywan FASS, 18 ans. Ce site présente mon parcours,
  mes projets et mes objectifs en tant qu’étudiant en BTS SIO et futur professionnel de l’informatique.`,
  ctaLabel = "Voir mon CV",
  ctaHref = "#cv",
  photoSrc = "/images/Aywan.png",
  photoAlt = "Portrait d’Aywan Fass",
}: HeroProps) {
  return (
    <section className="jumbotron-like py-5" aria-label="Présentation">
      <div className="container d-flex align-items-start gap-4">
        <img
          id="maPhoto"
          className="rounded img-fluid shadow-sm"
          src={photoSrc}
          alt={photoAlt}
          width={160}
          height={160}
          loading="eager"
        />
        <div>
          <h1 className="h2 mb-2">{title}</h1>
          <p className="text-muted mb-3">{subtitle}</p>
          <p className="mb-4">{description}</p>
          <a
            className="btn btn-primary btn-lg"
            href={ctaHref}
            role="button"
            aria-label={ctaLabel}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}