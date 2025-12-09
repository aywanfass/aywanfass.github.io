import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call, email service)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="container my-5" id="contact" role="main" aria-label="Page de contact">
      <header className="mb-5 text-center">
        <h1 className="display-5 mb-2">Me Contacter</h1>
        <p className="lead text-muted">
          Une question, un projet ou simplement envie d'échanger ? N'hésitez pas à me contacter.
        </p>
      </header>

      <div className="row g-5">
        {/* Contact Form */}
        <section className="col-lg-7" aria-labelledby="form-heading">
          <h2 id="form-heading" className="h3 mb-4">Envoyez-moi un message</h2>
          {submitted && (
            <div className="alert alert-success" role="alert">
              ✓ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
            </div>
          )}
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nom complet <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="Votre nom"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="votre.email@exemple.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Sujet <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="Objet de votre message"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="Votre message..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-lg w-100">
              📩 Envoyer le message
            </button>
          </form>
        </section>

        {/* Contact Info */}
        <aside className="col-lg-5" aria-labelledby="info-heading">
          <h2 id="info-heading" className="h3 mb-4">Informations de contact</h2>
          
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <h3 className="h5 card-title mb-3">Coordonnées</h3>
              <ul className="list-unstyled mb-0">
                <li className="mb-3 d-flex align-items-start">
                  <span className="me-3" aria-hidden="true">📧</span>
                  <div>
                    <strong className="d-block">Email</strong>
                    <a href="mailto:a.fass83000@gmail.coma.fass83000@gmail.com" className="text-decoration-none">
                      a.fass83000@gmail.com
                    </a>
                  </div>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="me-3" aria-hidden="true">📍</span>
                  <div>
                    <strong className="d-block">Localisation</strong>
                    <span className="text-muted">Paris, France</span>
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <span className="me-3" aria-hidden="true">🕐</span>
                  <div>
                    <strong className="d-block">Disponibilité</strong>
                    <span className="text-muted">Réponse sous 24-48h</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5 card-title mb-3">Réseaux sociaux</h3>
              <nav aria-label="Liens vers les réseaux sociaux">
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a
                      href="https://github.com/aywanfass"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none d-flex align-items-center"
                      aria-label="GitHub (ouvre un nouvel onglet)"
                    >
                      <span className="me-2" aria-hidden="true">🔗</span>
                      <strong>GitHub</strong>
                      <span className="ms-2 text-muted">@aywanfass</span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none d-flex align-items-center"
                      aria-label="LinkedIn (ouvre un nouvel onglet)"
                    >
                      <span className="me-2" aria-hidden="true">💼</span>
                      <strong>LinkedIn</strong>
                      <span className="ms-2 text-muted">Aywan Fass</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none d-flex align-items-center"
                      aria-label="Twitter (ouvre un nouvel onglet)"
                    >
                      <span className="me-2" aria-hidden="true">🐦</span>
                      <strong>Twitter</strong>
                      <span className="ms-2 text-muted">@aywanfass</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
