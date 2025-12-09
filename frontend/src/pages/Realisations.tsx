import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, slideUp, staggerContainer, scaleIn } from "../utils/animations";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  category: "personnel" | "entreprise" | "academique";
};

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Personnel",
    description:
      "Site web vitrine moderne développé avec React, TypeScript et Spring Boot. Interface responsive, performances optimisées et déploiement automatisé sur GitHub Pages.",
    tags: ["React", "TypeScript", "Spring Boot", "Bootstrap"],
    image: "/images/pagePortfolio.png",
    demoUrl: "https://aywanfass.github.io",
    githubUrl: "https://github.com/aywanfass/aywanfass.github.io",
    category: "personnel",
  },
  {
    id: 2,
    title: "Nolark",
    description:
      "Application fait dans le cadre du BTS SIO qui m'a permis de me familiariser avec HTML/CSS et PHP",
    tags: ["HTML", "CSS", "PHP"],
    image: "/images/PageNolark.png",
    githubUrl: "https://github.com/aywanfass/nolark",
    category: "academique",
  },
  {
    id: 3,
    title: "Application de signature de document",
    description:
      "Application web fait avec le framework Symfony qui permet a la RH de la CPAM du VAR de deposer des documents (Reglement interieur, charte IA), de les versionner et de les mettre en ligne afin que tout les agents de la CPAM puissent les signer. ",
    tags: ["Symfony", "SQLServer", "PHP", "Stimulus", "Twig"],
    image: "/images/signaCharte.png", 
    category: "entreprise",
  },
];

export default function Realisations() {
  const [filter, setFilter] = useState<string>("tous");

  const filteredProjects =
    filter === "tous" ? projects : projects.filter((p) => p.category === filter);

  const categoryLabel: Record<string, string> = {
    tous: "Tous les projets",
    personnel: "Projets personnels",
    academique: "Projets académiques",
    entreprise: "Projets en entreprise",
  };

  return (
    <motion.main
      className="py-5"
      role="main"
      aria-label="Mes réalisations"
      initial="hidden"
      animate="visible"
      variants={fadeIn as any}
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top left, #111827 0, #020617 55%)",
        color: "#e5e7eb",
      }}
    >
      <div className="container">
        <motion.header className="mb-5 text-center" variants={slideUp as any}>
          <h1 className="display-5 mb-2">Mes Réalisations</h1>
          <p className="lead text-muted mb-0">
            Découvrez mes projets personnels, académiques et professionnels
          </p>
        </motion.header>

        {/* Filters */}
        <motion.nav
          className="mb-4 d-flex justify-content-center gap-2 flex-wrap"
          aria-label="Filtrer les projets"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {["tous", "personnel", "academique", "entreprise"].map((filterOption) => (
            <motion.button
              key={filterOption}
              className={`btn btn-sm rounded-pill ${
                filter === filterOption ? "btn-primary text-white" : "btn-outline-primary"
              }`}
              onClick={() => setFilter(filterOption)}
              aria-pressed={filter === filterOption}
              variants={scaleIn as any}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
            >
              {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
              {filterOption === "tous" && ` (${projects.length})`}
            </motion.button>
          ))}
        </motion.nav>

        <p
          className="text-center text-muted mb-4"
          style={{ fontSize: "0.9rem" }}
        >
          {categoryLabel[filter]} — {filteredProjects.length} projet
          {filteredProjects.length > 1 ? "s" : ""}
        </p>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            className="row g-4"
            key={filter}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                className="col-md-6 col-lg-4"
                variants={slideUp as any}
                layout
              >
                <motion.div
                  className="h-100 rounded-4 overflow-hidden"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 24px 60px rgba(15,23,42,0.7)",
                  }}
                  transition={{ type: "spring", stiffness: 260 }}
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(15,23,42,0.95), rgba(15,23,42,0.85))",
                    border: "1px solid rgba(148,163,184,0.25)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {project.image && (
                    <div style={{ position: "relative", overflow: "hidden" }}>
                      <img
                        src={project.image}
                        className="w-100"
                        alt={`Aperçu du projet ${project.title}`}
                        loading="lazy"
                        style={{
                          height: "190px",
                          objectFit: "cover",
                          transform: "scale(1.02)",
                        }}
                      />
                      <span
                        className="badge bg-primary position-absolute top-0 start-0 m-3"
                        style={{ textTransform: "capitalize" }}
                      >
                        {project.category}
                      </span>
                    </div>
                  )}
                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <h2 className="h5 mb-2">{project.title}</h2>
                    <p
                      className="mb-3"
                      style={{ fontSize: "0.92rem", color: "#e5e7eb" }}
                    >
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="badge rounded-pill bg-secondary me-1 mb-1"
                          style={{ fontSize: "0.75rem" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="mt-auto d-flex gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm flex-grow-1"
                          aria-label={`Voir la démo de ${project.title} (ouvre un nouvel onglet)`}
                        >
                          🌐 Démo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-secondary btn-sm flex-grow-1"
                          aria-label={`Voir le code source de ${project.title} sur GitHub (ouvre un nouvel onglet)`}
                        >
                          💻 Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-5">
            <p className="text-muted">Aucun projet trouvé dans cette catégorie.</p>
          </div>
        )}
      </div>
    </motion.main>
  );
}
