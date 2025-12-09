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
  subtitle = "Développeur web Alternant & Étudiant BTS SIO",
  description = `Ce site présente mon parcours,
  mes projets et mes objectifs en tant qu’étudiant en BTS SIO et futur professionnel de l’informatique.`,
  ctaLabel = "Voir mon CV",
  ctaHref = "/cv",
  photoSrc = "/images/Aywan.png",
  photoAlt = "Portrait d’Aywan Fass",
}: HeroProps) {
  return (
    <motion.section
      className="py-5 py-lg-6"
      aria-label="Présentation"
      initial="hidden"
      animate="visible"
      variants={fadeIn as any}
      style={{
        background:
          "radial-gradient(circle at top left, rgba(31,41,55,0.9), transparent 55%), radial-gradient(circle at bottom right, rgba(15,23,42,0.9), transparent 55%)",
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Text column */}
          <div className="col-lg-7">
            <motion.div
              className="d-inline-flex align-items-center px-3 py-1 rounded-pill mb-3"
              variants={slideInLeft as any}
              style={{
                background: "rgba(15,23,42,0.9)",
                border: "1px solid rgba(148,163,184,0.5)",
                backdropFilter: "blur(12px)",
                color: "#e5e7eb",
              }}
            >
              <span
                className="badge rounded-pill bg-primary me-2"
                style={{ fontSize: "0.7rem" }}
              >
                BTS SIO SLAM
              </span>
              <span className="text-muted" style={{ fontSize: "0.85rem" }}>
                Alternance • Développement web
              </span>
            </motion.div>

            <motion.h1
              className="display-4 fw-semibold mb-2"
              variants={slideInLeft as any}
              style={{ color: "#f9fafb" }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="lead text-primary mb-3"
              variants={slideInLeft as any}
              style={{ fontWeight: 500, color: "#1d4ed8" }}
            >
              {subtitle}
            </motion.p>

            <motion.p
              className="mb-4 text-muted"
              variants={slideInLeft as any}
              style={{ maxWidth: "36rem", color: "#e5e7eb" }}
            >
              {description}
            </motion.p>

            <motion.div
              className="d-flex flex-wrap gap-3"
              variants={slideInLeft as any}
            >
              <motion.a
                className="btn btn-primary btn-lg px-4"
                href={ctaHref}
                role="button"
                aria-label={ctaLabel}
                variants={scaleIn as any}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
                }}
                whileTap={{ scale: 0.96 }}
              >
                {ctaLabel}
              </motion.a>

              <motion.a
                href="/realisations"
                className="btn btn-outline-secondary btn-lg px-4"
                role="button"
                aria-label="Voir mes réalisations"
                variants={scaleIn as any}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Voir mes projets
              </motion.a>
            </motion.div>
          </div>

          {/* Photo column */}
          <div className="col-lg-5">
            <motion.div
              className="position-relative mx-auto"
              variants={slideInRight as any}
              style={{ maxWidth: 320 }}
            >
              <motion.div
                className="position-absolute top-0 start-0 translate-middle rounded-circle"
                aria-hidden="true"
                style={{
                  width: 130,
                  height: 130,
                  background:
                    "radial-gradient(circle, rgba(37,99,235,0.6), transparent 70%)",
                  filter: "blur(12px)",
                }}
              />
              <motion.div
                className="rounded-4 shadow-lg position-relative"
                style={{
                  background: "rgba(15,23,42,0.95)",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(148,163,184,0.5)",
                  padding: "1rem",
                }}
                whileHover={{ y: -6 }}
              >
                <motion.img
                  id="maPhoto"
                  className="rounded-3 img-fluid"
                  src={photoSrc}
                  alt={photoAlt}
                  width={260}
                  height={260}
                  loading="eager"
                  variants={scaleIn as any}
                  style={{ transform: "scale(0.9)", transformOrigin: "center" }}
                  whileHover={{ scale: 0.95, rotate: 2 }}
                />

                {/* Badges sur une seule ligne, côte à côte */}
                <div
                  className="mt-3 d-flex justify-content-center"
                  style={{
                    gap: "0.6rem",
                    whiteSpace: "nowrap",
                    fontSize: "0.85rem",
                  }}
                >
                  <span className="badge bg-secondary">
                    Développement web
                  </span>
                  <span className="badge bg-secondary">
                    Applications métiers
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}