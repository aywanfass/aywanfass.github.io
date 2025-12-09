import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideInLeft, slideInRight, scaleIn } from "../utils/animations";

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
  description = `Ce site présente mon parcours,
  mes projets et mes objectifs en tant qu’étudiant en BTS SIO et futur professionnel de l’informatique.`,
  ctaLabel = "Voir mon CV",
  ctaHref = "#cv",
  photoSrc = "/images/Aywan.png",
  photoAlt = "Portrait d’Aywan Fass",
}: HeroProps) {
  return (
    <motion.section 
      className="jumbotron-like py-5" 
      aria-label="Présentation"
      initial="hidden"
      animate="visible"
      variants={fadeIn as any}
    >
      <div className="container d-flex align-items-start gap-4">
        <motion.img
          id="maPhoto"
          className="rounded img-fluid shadow-sm"
          src={photoSrc}
          alt={photoAlt}
          width={160}
          height={160}
          loading="eager"
          variants={scaleIn as any}
          whileHover={{ scale: 1.1, rotate: 5 }}
        />
        <div>
          <motion.h1 
            className="h2 mb-2"
            variants={slideInLeft as any}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-muted mb-3"
            variants={slideInLeft as any}
          >
            {subtitle}
          </motion.p>
          <motion.p 
            className="mb-4"
            variants={slideInLeft as any}
          >
            {description}
          </motion.p>
          <motion.a 
            className="btn btn-primary btn-lg" 
            href={ctaHref} 
            role="button" 
            aria-label={ctaLabel}
            variants={scaleIn as any}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            {ctaLabel}
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}