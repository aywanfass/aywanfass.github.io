import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "../utils/animations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for this field when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Le sujet est requis";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: "service_4dy2z8m",
            template_id: "template_tqo3obh",
            user_id: "napxmuIJay-Pr1rKN",
            template_params: {
              from_name: formData.name,
              from_email: formData.email,
              subject: formData.subject,
              message: formData.message,
              to_email: "a.fass83000@gmail.com",
            },
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const errorData = await response.text();
        console.error("EmailJS error:", errorData);
        throw new Error("Échec de l'envoi");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "Erreur lors de l'envoi. Utilisez le bouton 'Email rapide' ci-dessous."
      );
      console.error("Email error:", error);
    }
  };

  const directMailtoLink = `mailto:a.fass83000@gmail.com?subject=Contact depuis le portfolio&body=Bonjour Aywan,%0D%0A%0D%0A`;

  return (
    <motion.main
      className="py-5"
      id="contact"
      role="main"
      aria-label="Page de contact"
      initial="hidden"
      animate="visible"
      variants={fadeIn as any}
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #111827 0, #020617 55%)",
        color: "#e5e7eb",
      }}
    >
      <div className="container">
        <motion.header
          className="mb-5 text-center"
          variants={slideUp as any}
        >
          <h1 className="display-5 mb-2">Me Contacter</h1>
          <p className="lead text-muted mb-0">
            Une question, un projet ou simplement envie d'échanger ? N'hésitez
            pas à me contacter.
          </p>
        </motion.header>

        <div
          className="row g-4 align-items-start"
          style={{ alignItems: "flex-start" }}
        >
          {/* Contact Form */}
          <motion.section
            className="col-lg-7"
            aria-labelledby="form-heading"
            initial="hidden"
            animate="visible"
            variants={slideUp as any}
            style={{ marginTop: "-40px" }} // remonte un peu plus le formulaire
          >
            <div
              className="p-4 p-lg-5 rounded-4 shadow-sm"
              style={{
                background: "rgba(15,23,42,0.95)",
                border: "1px solid rgba(148,163,184,0.25)",
                color: "#e5e7eb",
              }}
            >
              <h2 id="form-heading" className="h3 mb-4">
                Envoyez-moi un message
              </h2>

              {status === "success" && (
                <div className="alert alert-success mb-4" role="alert">
                  ✅ Message envoyé avec succès ! Je vous répondrai dans les
                  plus brefs délais.
                </div>
              )}

              {status === "error" && (
                <div className="alert alert-danger mb-4" role="alert">
                  ❌ {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nom complet <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    placeholder="votre.email@exemple.com"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Sujet <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.subject ? "is-invalid" : ""
                    }`}
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    placeholder="Objet de votre message"
                  />
                  {errors.subject && (
                    <div className="invalid-feedback">{errors.subject}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className={`form-control ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    placeholder="Votre message..."
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100 mb-3 rounded-pill"
                  disabled={status === "sending"}
                >
                  {status === "sending"
                    ? "⏳ Envoi en cours..."
                    : "📧 Envoyer le message"}
                </button>
              </form>

              <div className="text-center mt-3">
                <p className="text-muted mb-2" style={{ fontSize: "0.9rem" }}>
                  Ou utilisez un email vide
                </p>
                <a
                  href={directMailtoLink}
                  className="btn btn-outline-secondary btn-lg w-100 rounded-pill"
                  aria-label="Ouvrir votre client email"
                >
                  ✉️ Email rapide
                </a>
              </div>
            </div>
          </motion.section>

          {/* Contact Info */}
          <motion.aside
            className="col-lg-5"
            aria-labelledby="info-heading"
            initial="hidden"
            animate="visible"
            variants={slideUp as any}
          >
            <div
              className="p-4 p-lg-5 rounded-4 shadow-sm mb-4"
              style={{
                background: "rgba(15,23,42,0.95)",
                border: "1px solid rgba(148,163,184,0.25)",
                color: "#e5e7eb",
              }}
            >
              <h2 id="info-heading" className="h3 mb-4">
                Informations de contact
              </h2>

              <h3 className="h6 text-uppercase text-muted mb-3">
                Coordonnées
              </h3>
              <ul className="list-unstyled mb-4">
                <li className="mb-3 d-flex align-items-start">
                  <span className="me-3" aria-hidden="true">
                    📧
                  </span>
                  <div>
                    <strong className="d-block">Email</strong>
                    <a
                      href="mailto:a.fass83000@gmail.com"
                      className="text-decoration-none"
                    >
                      a.fass83000@gmail.com
                    </a>
                  </div>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="me-3" aria-hidden="true">
                    📍
                  </span>
                  <div>
                    <strong className="d-block">Localisation</strong>
                    <span className="text-muted">Toulon, France</span>
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <span className="me-3" aria-hidden="true">
                    🕐
                  </span>
                  <div>
                    <strong className="d-block">Disponibilité</strong>
                    <span className="text-muted">Réponse sous 24-48h</span>
                  </div>
                </li>
              </ul>

              <h3 className="h6 text-uppercase text-muted mb-3">
                Réseaux sociaux
              </h3>
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
                      <span className="me-2" aria-hidden="true">
                        🔗
                      </span>
                      <strong>GitHub</strong>
                      <span className="ms-2 text-muted">@aywanfass</span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://www.linkedin.com/in/aywan-fass/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none d-flex align-items-center"
                      aria-label="LinkedIn (ouvre un nouvel onglet)"
                    >
                      <span className="me-2" aria-hidden="true">
                        💼
                      </span>
                      <strong>LinkedIn</strong>
                      <span className="ms-2 text-muted">Aywan Fass</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </motion.aside>
        </div>
      </div>
    </motion.main>
  );
}
