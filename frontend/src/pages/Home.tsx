import React from "react";
import Hero from "../components/Hero";
import Sections from "../components/Sections";

export default function Home() {
  return (
    <main role="main" aria-label="Page d'accueil">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="visually-hidden-focusable">
        Aller au contenu principal
      </a>

      <div id="main-content">
        <Hero />
        <Sections />
      </div>
    </main>
  );
}
