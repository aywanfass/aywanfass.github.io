import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Merci pour votre message ! Je vous répondrai bientôt.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      link: 'mailto:aywan@example.com',
      text: 'aywan@example.com'
    },
    {
      icon: '📱',
      title: 'Téléphone',
      link: 'tel:+33123456789',
      text: '+33 1 23 45 67 89'
    },
    {
      icon: '🌐',
      title: 'Réseaux sociaux',
      social: [
        { name: 'LinkedIn', link: '#' },
        { name: 'GitHub', link: '#' },
        { name: 'Twitter', link: '#' }
      ]
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Contactez-moi</h2>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Discutons de votre projet</h3>
            <p>Je suis toujours ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me contacter !</p>
            
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <div className="contact-method" key={index}>
                  <div className="method-icon">{method.icon}</div>
                  <div>
                    <h4>{method.title}</h4>
                    {method.link ? (
                      <a href={method.link}>{method.text}</a>
                    ) : (
                      <div className="social-links">
                        {method.social.map((social, idx) => (
                          <a 
                            href={social.link} 
                            key={idx}
                            aria-label={social.name}
                          >
                            {social.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
