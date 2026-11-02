import { useState, useEffect, useRef } from 'react';
import { useLang, t } from '../context/LangContext';
import { navLinks, personal } from '../data/portfolioData';
import { IconGitHub, IconLinkedIn, IconMenu, IconClose } from './Icons';
import './Header.css';

export default function Header() {
  const { lang, toggle } = useLang();
  const [scrolled, setScrolled]   = useState(false);
  const [active, setActive]       = useState('home');
  const [menuOpen, setMenuOpen]   = useState(false);
  const menuRef = useRef(null);

  /* ── Scroll: backdrop blur + active section ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean);
      const scrollY  = window.scrollY + 100;

      let current = 'home';
      sections.forEach(sec => {
        if (scrollY >= sec.offsetTop) current = sec.id;
      });
      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Close on outside click ── */
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  /* ── Lock body scroll when menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`nav-header ${scrolled ? 'nav-scrolled' : ''}`} role="banner">
      <div className="container nav-inner">

        {/* ── Logo ── */}
        <button
          id="nav-logo-btn"
          className="nav-logo"
          onClick={() => scrollTo('home')}
          aria-label="Back to top"
        >
          <span className="nav-logo-monogram">RC</span>
          <span className="nav-logo-name">Rahma Chriha</span>
        </button>

        {/* ── Desktop nav ── */}
        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map(link => (
            <button
              key={link.id}
              id={`nav-${link.id}`}
              className={`nav-link ${active === link.id ? 'nav-link--active' : ''}`}
              onClick={() => scrollTo(link.id)}
            >
              {t(link.label, lang)}
            </button>
          ))}
        </nav>

        {/* ── Controls ── */}
        <div className="nav-controls">
          {/* Social icons */}
          <a
            id="nav-github-link"
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-icon"
            aria-label="GitHub"
          >
            <IconGitHub size={18} />
          </a>
          <a
            id="nav-linkedin-link"
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-icon"
            aria-label="LinkedIn"
          >
            <IconLinkedIn size={18} />
          </a>

          {/* CV Quick Download */}
          <a
            id="nav-cv-link"
            href={lang === 'en' ? personal.cvEn : personal.cvFr}
            download={lang === 'en' ? 'CV_Rahma_Chriha_EN.pdf' : 'CV_Rahma_Chriha_FR.pdf'}
            className="btn btn-secondary btn-sm nav-cv-btn"
            title={lang === 'en' ? 'Download CV in English (PDF)' : 'Télécharger le CV en français (PDF)'}
          >
            CV
          </a>

          {/* Language toggle */}
          <button
            id="nav-lang-toggle"
            className="nav-lang-btn"
            onClick={toggle}
            aria-label={`Switch to ${lang === 'en' ? 'French' : 'English'}`}
          >
            {lang === 'en' ? 'FR' : 'EN'}
          </button>

          {/* Mobile hamburger */}
          <button
            id="nav-menu-toggle"
            className="btn btn-icon nav-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <IconClose size={20} /> : <IconMenu size={20} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        ref={menuRef}
        className={`nav-drawer ${menuOpen ? 'nav-drawer--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="nav-drawer-links" aria-label="Mobile navigation">
          {navLinks.map(link => (
            <button
              key={link.id}
              id={`nav-mobile-${link.id}`}
              className={`nav-drawer-link ${active === link.id ? 'nav-drawer-link--active' : ''}`}
              onClick={() => scrollTo(link.id)}
            >
              {t(link.label, lang)}
            </button>
          ))}
        </nav>
        <div className="nav-drawer-foot">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">LinkedIn</a>
          <a href={personal.cvFr} download="CV_Rahma_Chriha_FR.pdf" className="btn btn-secondary btn-sm">CV (FR)</a>
          <a href={personal.cvEn} download="CV_Rahma_Chriha_EN.pdf" className="btn btn-secondary btn-sm">CV (EN)</a>
        </div>
      </div>

      {/* Overlay backdrop */}
      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} aria-hidden />
      )}
    </header>
  );
}
