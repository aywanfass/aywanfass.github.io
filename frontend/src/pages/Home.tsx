import Hero from "../components/Hero";
import Sections from "../components/Sections";

export default function Home() {
  return (
    <main
      role="main"
      aria-label="Page d'accueil"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #111827 0, #020617 55%)",
        color: "#e5e7eb",
      }}
    >
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
