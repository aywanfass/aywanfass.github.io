import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      role="navigation"
      aria-label="Navigation principale"
      style={{
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        background: "rgba(15,23,42,0.95)",
        borderBottom: "1px solid rgba(30,64,175,0.6)",
      }}
    >
      <div className="container">
        <Link
          className="navbar-brand fw-semibold"
          to="/"
          aria-label="Retour à l'accueil"
          style={{ letterSpacing: "0.03em", color: "#e5e7eb" }}
        >
          Aywan Fass
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Basculer la navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav ms-auto align-items-lg-center"
            style={{ gap: "0.5rem" }}
          >
            {(
              [
                { path: "/", label: "Accueil" },
                { path: "/realisations", label: "Réalisations" },
                { path: "/cv", label: "CV" },
                { path: "/contact", label: "Contact" },
              ] as const
            ).map((item) => (
              <li className="nav-item" key={item.path}>
                <Link
                  className={`nav-link px-3 py-2 rounded-pill ${
                    isActive(item.path) ? "active text-white" : ""
                  }`}
                  to={item.path}
                  aria-current={isActive(item.path) ? "page" : undefined}
                  style={
                    isActive(item.path)
                      ? {
                          background:
                            "linear-gradient(135deg, var(--bs-primary), #6c63ff)",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                          transition: "all 0.2s ease",
                          color: "#ffffff",
                        }
                      : {
                          transition: "all 0.2s ease",
                          color: "#e5e7eb",
                        }
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
