import React, { useState } from "react";
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
    image: "/images/portfolio-preview.png",
    demoUrl: "https://aywanfass.github.io",
    githubUrl: "https://github.com/aywanfass/aywanfass.github.io",
    category: "personnel",
  },
  {
    id: 2,
    title: "Nolark",
    description:
      "Application de gestion de tâches collaborative avec authentification JWT, système de notifications en temps réel et tableau de bord analytique.",
    tags: ["Java", "Spring Boot", "MySQL", "WebSocket"],
    image: "/images/nolark-preview.png",
    githubUrl: "https://github.com/aywanfass/nolark",
    category: "academique",
  },
  {
    id: 3,
    title: "API REST Entreprise",
    description:
      "Développement d'une API RESTful sécurisée pour la gestion de ressources métier. Implémentation complète CRUD, documentation Swagger et tests unitaires.",
    tags: ["Spring Boot", "PostgreSQL", "Docker", "Swagger"],
    category: "entreprise",
  },
];

export default function Realisations() {
  const [filter, setFilter] = useState<string>("tous");

  const filteredProjects =
    filter === "tous"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <motion.main 
      className="container my-5" 
      role="main" 
      aria-label="Mes réalisations"
      initial="hidden"
      animate="visible"
      variants={fadeIn as any}
    >
      <motion.header className="mb-5 text-center" variants={slideUp as any}>
        <h1 className="display-5 mb-2">Mes Réalisations</h1>
        <p className="lead text-muted">
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
        {['tous', 'personnel', 'academique', 'entreprise'].map((filterOption) => (
          <motion.button
            key={filterOption}
            className={`btn ${filter === filterOption ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setFilter(filterOption)}
            aria-pressed={filter === filterOption}
            variants={scaleIn as any}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
            {filterOption === 'tous' && ` (${projects.length})`}
          </motion.button>
        ))}
      </motion.nav>

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
                className="card h-100 shadow-sm border-0"
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.image && (
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={`Aperçu du projet ${project.title}`}
                    loading="lazy"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h2 className="card-title h5">{project.title}</h2>
                  <p className="card-text text-muted flex-grow-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="badge bg-secondary me-1 mb-1">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="d-flex gap-2 mt-auto">
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
    </motion.main>
  );
}
