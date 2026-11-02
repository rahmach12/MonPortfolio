import { useEffect, useRef } from 'react';
import { t } from '../context/LangContext';
import { IconGitHub, IconExternalLink, IconClose } from './Icons';
import './ProjectModal.css';

export default function ProjectModal({ project, lang, onClose }) {
  const dialogRef = useRef(null);

  /* ── Focus trap + Escape ── */
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={e => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`Case study: ${project.title}`}
    >
      <div className="modal-panel" ref={dialogRef} tabIndex={-1}>

        {/* ── Header ── */}
        <div className="modal-header" style={{ '--project-color': project.color }}>
          <div className="modal-accent-bar" aria-hidden />
          <div className="modal-header-inner">
            <div>
              <div className="modal-meta">
                <span className="tag">{t(project.category, lang)}</span>
                <span className="modal-year">{project.year}</span>
              </div>
              <h2 className="modal-title">{project.title}</h2>
              <p className="modal-subtitle">{t(project.subtitle, lang)}</p>
            </div>
            <button
              id="modal-close-btn"
              className="btn btn-icon modal-close"
              onClick={onClose}
              aria-label="Close modal"
            >
              <IconClose size={20} />
            </button>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="modal-body">

          {/* Description */}
          <p className="modal-desc">{t(project.description, lang)}</p>

          {/* Tech stack */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              {lang === 'en' ? 'Tech Stack' : 'Technologies'}
            </h3>
            <div className="modal-tags">
              {project.tech.map(tech => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              {lang === 'en' ? 'Key Features' : 'Fonctionnalités clés'}
            </h3>
            <ul className="modal-list">
              {t(project.features, lang).map((f, i) => (
                <li key={i} className="modal-list-item">
                  <span className="modal-list-dot" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Role */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              {lang === 'en' ? 'My Role & Contribution' : 'Mon rôle & contribution'}
            </h3>
            <p className="modal-text">{t(project.role, lang)}</p>
          </div>

          {/* Challenges */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              {lang === 'en' ? 'Technical Challenges' : 'Défis techniques'}
            </h3>
            <p className="modal-text">{t(project.challenges, lang)}</p>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="modal-footer">
          {project.github ? (
            <a
              id={`modal-github-${project.id}`}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <IconGitHub size={18} />
              {lang === 'en' ? 'View on GitHub' : 'Voir sur GitHub'}
            </a>
          ) : (
            <span
              className="btn btn-secondary btn-disabled"
              title={lang === 'en' ? 'Repository is private or internal' : 'Dépôt privé ou interne'}
              style={{ opacity: 0.6, cursor: 'not-allowed' }}
            >
              <IconGitHub size={18} />
              {lang === 'en' ? 'Code Unavailable (Private)' : 'Code non disponible (Privé)'}
            </span>
          )}
          {project.demo && (
            <a
              id={`modal-demo-${project.id}`}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <IconExternalLink size={14} />
              {lang === 'en' ? 'Live Demo' : 'Démo live'}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
