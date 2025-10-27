import { useEffect, useState } from "react";
import { api } from "./api/client";

export default function App() {
  const [health, setHealth] = useState<string>("…");

  useEffect(() => {
    api
      .health()
      .then((h) => setHealth(h))
      .catch(() => setHealth("offline"));
  }, []);

  return (
    <main
      style={{
        maxWidth: 960,
        margin: "2rem auto",
        padding: "0 1rem",
        fontFamily: "system-ui, Segoe UI, Roboto, Arial",
      }}
    >
      <header
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <h1>Portfolio — React + TypeScript</h1>
        <small>API: {health}</small>
      </header>

      <section>
        <p>Bienvenue dans la version React de ton portfolio.</p>
        <ul>
          <li>Frontend: Vite + React + TypeScript</li>
          <li>Backend: Spring Boot (Java), accessible sous <code>/api</code></li>
        </ul>
      </section>
    </main>
  );
}