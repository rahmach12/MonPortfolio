import { useState } from 'react';
import { contactInfo, personal } from '../data/portfolioData';
import { useLang } from '../context/LangContext';
import { useReveal } from '../hooks/useReveal';
import { IconGitHub, IconLinkedIn, IconMail, IconPhone, IconMapPin, IconSend, IconDownload } from '../components/Icons';
import './Contact.css';

export default function Contact() {
  const { lang } = useLang();
  const headerRef = useReveal(0.1);
  const formRef   = useReveal(0.1);
  const infoRef   = useReveal(0.1);

  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'done' | 'error'

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /* NOTE: No backend is configured. This opens a mailto: link with form data.
     The user will see their mail client. No fake "email sent" is displayed. */
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject  = encodeURIComponent(form.subject || `Portfolio contact — ${form.name}`);
    const body     = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');
    setStatus('done');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(null), 4000);
  };

  const infoItems = [
    {
      icon: <IconMail size={18} />,
      label: lang === 'en' ? 'Email' : 'Email',
      value: contactInfo.email,
      href:  `mailto:${contactInfo.email}`,
    },
    {
      icon: <IconPhone size={18} />,
      label: lang === 'en' ? 'Phone' : 'Téléphone',
      value: contactInfo.phone,
      href:  `tel:${contactInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: <IconMapPin size={18} />,
      label: lang === 'en' ? 'Location' : 'Localisation',
      value: contactInfo.location,
      href:  null,
    },
    {
      icon: <IconGitHub size={18} />,
      label: 'GitHub',
      value: 'rahmach12',
      href:  contactInfo.github,
    },
    {
      icon: <IconLinkedIn size={18} />,
      label: 'LinkedIn',
      value: 'rahmach',
      href:  contactInfo.linkedin,
    },
  ];

  const ui = {
    heading: { en: 'Get In Touch', fr: 'Me contacter' },
    desc: {
      en: 'I am actively looking for my first software engineering position. Feel free to reach out if you have an opportunity, a question, or just want to connect.',
      fr: 'Je recherche activement mon premier poste en ingénierie logicielle. N\'hésitez pas à me contacter pour une opportunité, une question ou simplement pour échanger.',
    },
    nameLabel:    { en: 'Your Name',    fr: 'Votre nom'      },
    emailLabel:   { en: 'Your Email',   fr: 'Votre email'    },
    subjectLabel: { en: 'Subject',      fr: 'Sujet'          },
    messageLabel: { en: 'Message',      fr: 'Message'        },
    sendBtn:      { en: 'Send Message', fr: 'Envoyer'        },
    note: {
      en: 'Submitting will open your email client with the message pre-filled.',
      fr: 'L\'envoi ouvrira votre client email avec le message pré-rempli.',
    },
    doneFeedback: {
      en: '✓ Your email client has been opened.',
      fr: '✓ Votre client email a été ouvert.',
    },
  };

  const tx = (key) => {
    const obj = ui[key];
    return lang === 'en' ? (obj.en || obj) : (obj.fr || obj.en || obj);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">

        <div ref={headerRef} className="section-header reveal">
          <span className="section-eyebrow">
            {lang === 'en' ? 'Contact' : 'Contact'}
          </span>
          <h2 className="section-title">{tx('heading')}</h2>
          <p className="section-desc">{tx('desc')}</p>
        </div>

        <div className="contact-layout">

          {/* ── Contact Info ── */}
          <aside ref={infoRef} className="contact-info reveal">
            <div className="contact-info-card card">
              {infoItems.map((item, i) => (
                <div key={i} className="contact-info-item">
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <p className="contact-info-label">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="contact-info-value contact-info-link"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="contact-info-value">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Dual CV Download (FR / EN) ── */}
            <div className="contact-cv-card card">
              <div className="contact-cv-header">
                <IconDownload size={16} />
                <span className="contact-cv-title">
                  {lang === 'en' ? 'Download CV (PDF)' : 'Télécharger le CV (PDF)'}
                </span>
              </div>
              <div className="contact-cv-actions">
                <a
                  id="contact-cv-fr"
                  href={personal.cvFr}
                  download="CV_Rahma_Chriha_FR.pdf"
                  className={`btn btn-secondary contact-cv-option ${lang === 'fr' ? 'contact-cv-option--active' : ''}`}
                  title="Télécharger le CV en français (PDF)"
                >
                  <span className="contact-cv-flag">🇫🇷</span>
                  <span>Français</span>
                  <span className="contact-cv-tag">PDF</span>
                </a>
                <a
                  id="contact-cv-en"
                  href={personal.cvEn}
                  download="CV_Rahma_Chriha_EN.pdf"
                  className={`btn btn-secondary contact-cv-option ${lang === 'en' ? 'contact-cv-option--active' : ''}`}
                  title="Download CV in English (PDF)"
                >
                  <span className="contact-cv-flag">🇬🇧</span>
                  <span>English</span>
                  <span className="contact-cv-tag">PDF</span>
                </a>
              </div>
            </div>
          </aside>

          {/* ── Form ── */}
          <div ref={formRef} className="contact-form-wrap reveal reveal-delay-2">
            <form
              id="contact-form"
              className="contact-form card"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    {tx('nameLabel')} <span aria-hidden>*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    className="form-input"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder={lang === 'en' ? 'Jane Doe' : 'Jean Dupont'}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    {tx('emailLabel')} <span aria-hidden>*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    className="form-input"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  {tx('subjectLabel')}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  className="form-input"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder={lang === 'en' ? 'Job opportunity / Question' : 'Opportunité / Question'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  {tx('messageLabel')} <span aria-hidden>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-input form-textarea"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={lang === 'en' ? 'Your message...' : 'Votre message...'}
                />
              </div>

              <p className="form-note">{tx('note')}</p>

              <button
                id="contact-submit-btn"
                type="submit"
                className="btn btn-primary"
                disabled={status === 'sending'}
              >
                <IconSend size={16} />
                {tx('sendBtn')}
              </button>

              {status === 'done' && (
                <p className="form-success" role="alert">
                  {tx('doneFeedback')}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
