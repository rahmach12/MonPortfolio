import { about, personal } from '../data/portfolioData';
import { useLang, t } from '../context/LangContext';
import { useReveal } from '../hooks/useReveal';
import { IconGitHub, IconLinkedIn, IconDownload } from '../components/Icons';
import './About.css';

function HighlightCard({ item, lang, delay }) {
  const ref = useReveal(0.1);
  return (
    <div ref={ref} className={`about-highlight card reveal reveal-delay-${delay}`}>
      <div className="about-highlight-icon-wrap" aria-hidden>{item.icon}</div>
      <div>
        <h3 className="about-highlight-title">{t(item.title, lang)}</h3>
        <p className="about-highlight-desc">{t(item.desc, lang)}</p>
      </div>
    </div>
  );
}

export default function About() {
  const { lang } = useLang();
  const headerRef  = useReveal(0.1);
  const textRef    = useReveal(0.1);
  const profileRef = useReveal(0.1);

  return (
    <section id="about" className="section about">
      <div className="container">

        {/* ── Section header ── */}
        <div ref={headerRef} className="section-header reveal">
          <span className="section-eyebrow">
            {lang === 'en' ? 'About' : 'À propos'}
          </span>
          <h2 className="section-title">{t(about.headline, lang)}</h2>
        </div>

        <div className="about-layout">
          {/* ── Text ── */}
          <div ref={textRef} className="about-text reveal">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="about-para">
                {t(p, lang)}
              </p>
            ))}
          </div>

          {/* ── Highlights & Profile sidebar ── */}
          <div className="about-highlights">
            <div ref={profileRef} className="about-profile-card card reveal">
              <div className="about-profile-media">
                <img
                  src={personal.avatar}
                  alt="Rahma Chriha — Software Engineer"
                  className="about-profile-photo"
                  width={72}
                  height={72}
                  loading="lazy"
                />
                <div className="about-profile-meta">
                  <span className="about-profile-name">{personal.name}</span>
                  <span className="about-profile-role">{t(personal.title, lang)}</span>
                  <div className="about-profile-status">
                    <span className="about-profile-dot" aria-hidden />
                    <span>{t(personal.available, lang)}</span>
                  </div>
                </div>
              </div>
              <div className="about-profile-actions">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm"
                  aria-label="GitHub Profile"
                >
                  <IconGitHub size={15} /> GitHub
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm"
                  aria-label="LinkedIn Profile"
                >
                  <IconLinkedIn size={15} /> LinkedIn
                </a>
              </div>
              <div className="about-profile-cv-row">
                <span className="about-profile-cv-label">
                  <IconDownload size={13} />
                  <span>CV</span>
                </span>
                <div className="about-profile-cv-links">
                  <a
                    href={personal.cvFr}
                    download="CV_Rahma_Chriha_FR.pdf"
                    className={`about-profile-cv-btn ${lang === 'fr' ? 'about-profile-cv-btn--active' : ''}`}
                    title="Télécharger le CV en français (PDF)"
                  >
                    🇫🇷 Français
                  </a>
                  <span className="about-profile-cv-sep" aria-hidden>·</span>
                  <a
                    href={personal.cvEn}
                    download="CV_Rahma_Chriha_EN.pdf"
                    className={`about-profile-cv-btn ${lang === 'en' ? 'about-profile-cv-btn--active' : ''}`}
                    title="Download CV in English (PDF)"
                  >
                    🇬🇧 English
                  </a>
                </div>
              </div>
            </div>

            {about.highlights.map((item, i) => (
              <HighlightCard key={i} item={item} lang={lang} delay={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
