import { personal, navLinks, contactInfo } from '../data/portfolioData';
import { useLang, t } from '../context/LangContext';
import { IconGitHub, IconLinkedIn, IconMail } from './Icons';
import './Footer.css';

export default function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-monogram">RC</div>
          <div>
            <p className="footer-name">{personal.name}</p>
            <p className="footer-role">{t(personal.title, lang)}</p>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {navLinks.map(link => (
            <button
              key={link.id}
              id={`footer-nav-${link.id}`}
              className="footer-nav-link"
              onClick={() => scrollTo(link.id)}
            >
              {t(link.label, lang)}
            </button>
          ))}
        </nav>

        <div className="footer-socials">
          <a
            id="footer-github"
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub"
          >
            <IconGitHub size={18} />
          </a>
          <a
            id="footer-linkedin"
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn"
          >
            <IconLinkedIn size={18} />
          </a>
          <a
            id="footer-email"
            href={`mailto:${contactInfo.email}`}
            className="footer-social-link"
            aria-label="Email"
          >
            <IconMail size={18} />
          </a>
          <a
            id="footer-cv-fr"
            href={contactInfo.cvFr}
            download="CV_Rahma_Chriha_FR.pdf"
            className="footer-social-link footer-cv-badge"
            aria-label="CV Français (PDF)"
            title="Télécharger le CV (Français)"
          >
            CV FR
          </a>
          <a
            id="footer-cv-en"
            href={contactInfo.cvEn}
            download="CV_Rahma_Chriha_EN.pdf"
            className="footer-social-link footer-cv-badge"
            aria-label="CV English (PDF)"
            title="Download CV (English)"
          >
            CV EN
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copy">
            © {year} {personal.name}. {lang === 'en' ? 'Built with' : 'Conçu avec'} React + Vite.
          </p>
        </div>
      </div>
    </footer>
  );
}
