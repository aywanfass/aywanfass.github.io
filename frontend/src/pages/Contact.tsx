import React from "react";

export default function Contact() {
  return (
    <main className="container my-5" id="contact">
      <h1 className="mb-4">Me contacter</h1>
      <p className="text-muted">
        Ajoute ici ton email, un formulaire, ou tes réseaux.
      </p>

      <ul className="list-unstyled">
        <li>
          <span className="fa fa-envelope"></span> ton.email@example.com
        </li>
        <li>
          <span className="fa fa-github"></span>{" "}
          <a
            href="https://github.com/aywanfass"
            target="_blank"
            rel="noreferrer"
          >
            aywanfass
          </a>
        </li>
        <li>
          <span className="fa fa-linkedin"></span>{" "}
          <a href="#" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
    </main>
  );
}
