import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./styles/professional.css";

// Set document metadata
document.documentElement.lang = "fr";
document.title = "Aywan Fass — Portfolio & CV";

// Add meta description if not present
if (!document.querySelector('meta[name="description"]')) {
  const meta = document.createElement("meta");
  meta.name = "description";
  meta.content =
    "Portfolio professionnel d'Aywan Fass, développeur web et étudiant BTS SIO SLAM. Découvrez mes projets, compétences et parcours.";
  document.head.appendChild(meta);
}

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Application error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container my-5 text-center">
          <h1 className="h2 mb-3">Une erreur est survenue</h1>
          <p className="text-muted mb-4">
            Désolé, une erreur inattendue s'est produite. Veuillez recharger la
            page.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            Recharger la page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <HashRouter>
        <App />
      </HashRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
