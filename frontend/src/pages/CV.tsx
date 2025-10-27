import React from "react";

export default function CV() {
  return (
    <main className="container my-5">
      <h1 className="mb-4">CV</h1>
      <p className="text-muted">
        Cette page présentera ton CV détaillé (formation, compétences,
        expériences, certifications).
      </p>

      <section className="mb-4">
        <h2>Formation</h2>
        <ul>
          <li>BTS SIO option SLAM — lycée … (20XX–20XX)</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2>Compétences</h2>
        <ul>
          <li>Front-end: HTML, CSS, JavaScript/TypeScript, React</li>
          <li>Back-end: Java, Spring Boot</li>
          <li>Base de données: MySQL, PostgreSQL</li>
          <li>Outils: Git/GitHub, Docker (si applicable)</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2>Expériences</h2>
        <ul>
          <li>Alternance — Entreprise X (missions principales…)</li>
        </ul>
      </section>
    </main>
  );
}
