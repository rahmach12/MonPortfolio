import { useState } from 'react';
import { contact, personalInfo } from '../data/portfolioData';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simuler l'envoi du formulaire
        setFormStatus('sending');

        setTimeout(() => {
            setFormStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => {
                setFormStatus('');
            }, 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="section-title">
                    <h2>Contactez-moi</h2>
                    <p className="section-subtitle">
                        N'hésitez pas à me contacter pour toute opportunité ou collaboration
                    </p>
                </div>

                <div className="contact-content">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <h3 className="info-title">Informations de Contact</h3>

                        <div className="contact-cards">
                            <div className="contact-card">
                                <div className="card-icon">📧</div>
                                <h4>Email</h4>
                                <a href={`mailto:${contact.email}`} className="contact-link">
                                    {contact.email}
                                </a>
                            </div>

                            <div className="contact-card">
                                <div className="card-icon">📱</div>
                                <h4>Téléphone</h4>
                                <a href={`tel:${contact.phone}`} className="contact-link">
                                    {contact.phone}
                                </a>
                            </div>

                            <div className="contact-card">
                                <div className="card-icon">📍</div>
                                <h4>Localisation</h4>
                                <p className="contact-text">{contact.location}</p>
                            </div>

                            <div className="contact-card">
                                <div className="card-icon">✨</div>
                                <h4>Disponibilité</h4>
                                <p className="contact-text">{contact.availability}</p>
                            </div>
                        </div>

                        <div className="social-links">
                            <h4>Suivez-moi</h4>
                            <div className="social-buttons">
                                {contact.socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-btn"
                                        aria-label={social.name}
                                    >
                                        <span className="social-icon">{social.icon === 'github' ? '📦' : social.icon === 'linkedin' ? '💼' : '📧'}</span>
                                        {social.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="cv-download">
                            <a href={personalInfo.cvFile} download className="btn btn-primary">
                                📥 Télécharger mon CV
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-container">
                        <h3 className="form-title">Envoyez un Message</h3>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nom Complet *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Votre nom"
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="votre.email@example.com"
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Sujet *</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="Sujet de votre message"
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    placeholder="Votre message..."
                                    className="form-input form-textarea"
                                ></textarea>
                            </div>

                            {formStatus === 'success' && (
                                <div className="form-message success">
                                    ✓ Message envoyé avec succès ! Je vous répondrai bientôt.
                                </div>
                            )}

                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                disabled={formStatus === 'sending'}
                            >
                                {formStatus === 'sending' ? 'Envoi en cours...' : '📤 Envoyer le Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
