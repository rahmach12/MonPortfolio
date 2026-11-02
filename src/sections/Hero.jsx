import { personal } from '../data/portfolioData';
import { useLang, t } from '../context/LangContext';
import { IconGitHub, IconLinkedIn, IconMapPin, IconDownload, IconArrowRight } from '../components/Icons';
import './Hero.css';

export default function Hero() {
  const { lang } = useLang();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="hero" aria-label="Introduction">
      {/* ── Ambient background ── */}
      <div className="hero-ambient" aria-hidden>
        <div className="hero-orb hero-orb--1" />
        <div className="hero-orb hero-orb--2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-container">

        {/* ── Status badge ── */}
        <div className="hero-badge animate-in" style={{ '--delay': '0ms' }}>
          <span className="hero-badge-dot" />
          {t(personal.available, lang)}
        </div>

        {/* ── Name + Title ── */}
        <h1 className="hero-name animate-in" style={{ '--delay': '80ms' }}>
          {personal.name}
        </h1>

        <p className="hero-title animate-in" style={{ '--delay': '160ms' }}>
          {t(personal.title, lang)}
        </p>

        {/* ── Tagline ── */}
        <p className="hero-tagline animate-in" style={{ '--delay': '240ms' }}>
          {t(personal.tagline, lang)}
        </p>

        {/* ── CTA buttons ── */}
        <div className="hero-actions animate-in" style={{ '--delay': '320ms' }}>
          <button
            id="hero-cta-projects"
            className="btn btn-primary"
            onClick={() => scrollTo('projects')}
          >
            {lang === 'en' ? 'View My Projects' : 'Voir mes projets'}
            <IconArrowRight size={16} />
          </button>
          <button
            id="hero-cta-contact"
            className="btn btn-secondary"
            onClick={() => scrollTo('contact')}
          >
            {lang === 'en' ? 'Contact Me' : 'Me contacter'}
          </button>
        </div>

        {/* ── Socials + CV ── */}
        <div className="hero-links animate-in" style={{ '--delay': '400ms' }}>
          <a
            id="hero-github"
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-icon-link"
            aria-label="GitHub"
          >
            <IconGitHub size={20} />
            <span>GitHub</span>
          </a>
          <a
            id="hero-linkedin"
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-icon-link"
            aria-label="LinkedIn"
          >
            <IconLinkedIn size={20} />
            <span>LinkedIn</span>
          </a>

          {/* ── Dual CV Download (FR / EN) ── */}
          <div className="hero-cv-selector" role="group" aria-label={lang === 'en' ? 'Download CV options' : 'Options de téléchargement du CV'}>
            <span className="hero-cv-badge">
              <IconDownload size={15} />
              <span>CV</span>
            </span>
            <div className="hero-cv-options">
              <a
                id="hero-cv-fr"
                href={personal.cvFr}
                download="CV_Rahma_Chriha_FR.pdf"
                className={`hero-cv-btn ${lang === 'fr' ? 'hero-cv-btn--active' : ''}`}
                title="Télécharger le CV en français (PDF)"
                aria-label="Télécharger le CV en français (PDF)"
              >
                FR
              </a>
              <span className="hero-cv-sep" aria-hidden>·</span>
              <a
                id="hero-cv-en"
                href={personal.cvEn}
                download="CV_Rahma_Chriha_EN.pdf"
                className={`hero-cv-btn ${lang === 'en' ? 'hero-cv-btn--active' : ''}`}
                title="Download CV in English (PDF)"
                aria-label="Download CV in English (PDF)"
              >
                EN
              </a>
            </div>
          </div>
        </div>

        {/* ── Location ── */}
        <div className="hero-location animate-in" style={{ '--delay': '480ms' }}>
          <IconMapPin size={14} />
          <span>{personal.location}</span>
        </div>

        {/* ── Avatar ── */}
        <div className="hero-avatar-wrap animate-in" style={{ '--delay': '100ms' }}>
          <div className="hero-avatar-ring" aria-hidden />
          <div className="hero-avatar-ring hero-avatar-ring--2" aria-hidden />
          <img
            src={personal.avatar}
            alt="Rahma Chriha — Software Engineer"
            className="hero-avatar"
            width={280}
            height={280}
            loading="eager"
          />
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div className="hero-scroll-hint" aria-hidden>
        <div className="hero-scroll-line" />
        <span>{lang === 'en' ? 'Scroll' : 'Défiler'}</span>
      </div>
    </section>
  );
}
