import { useState } from 'react';
import { projects } from '../data/portfolioData';
import { useLang, t } from '../context/LangContext';
import { useReveal } from '../hooks/useReveal';
import { IconGitHub, IconExternalLink, IconArrowRight } from '../components/Icons';
import ProjectModal from '../components/ProjectModal';
import './Projects.css';

function ProjectCard({ project, lang, onOpen, delay }) {
  const ref = useReveal(0.08);

  return (
    <article
      ref={ref}
      className={`project-card card reveal reveal-delay-${delay} ${project.featured ? 'project-card--featured' : ''}`}
      style={{ '--project-color': project.color }}
      onClick={() => onOpen(project)}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.title} case study`}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onOpen(project)}
    >
      {/* Accent bar */}
      <div className="project-card-accent" aria-hidden />

      <div className="project-card-header">
        <div className="project-card-meta">
          <span className="tag tag-neutral">{t(project.category, lang)}</span>
          <span className="project-year">{project.year}</span>
        </div>
        {project.featured && (
          <span className="project-featured-badge">
            {lang === 'en' ? 'Featured' : 'Vedette'}
          </span>
        )}
      </div>

      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-subtitle">{t(project.subtitle, lang)}</p>
      <p className="project-card-desc">{t(project.description, lang)}</p>

      <div className="project-card-tech">
        {project.tech.slice(0, 5).map(tech => (
          <span key={tech} className="tag">{tech}</span>
        ))}
        {project.tech.length > 5 && (
          <span className="tag tag-neutral">+{project.tech.length - 5}</span>
        )}
      </div>

      <div className="project-card-footer">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm project-repo-link"
            onClick={e => e.stopPropagation()}
            aria-label={`${lang === 'en' ? 'View on GitHub:' : 'Voir sur GitHub :'} ${project.title}`}
          >
            <IconGitHub size={16} />
            <span>{lang === 'en' ? 'View on GitHub' : 'Voir sur GitHub'}</span>
          </a>
        ) : (
          <span
            className="btn btn-ghost btn-sm project-repo-unavailable"
            onClick={e => e.stopPropagation()}
            title={lang === 'en' ? 'Repository is private or internal' : 'Dépôt privé ou interne'}
          >
            <IconGitHub size={16} />
            <span>{lang === 'en' ? 'Code Private' : 'Code Privé'}</span>
          </span>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
            onClick={e => e.stopPropagation()}
            aria-label={`Live demo for ${project.title}`}
          >
            <IconExternalLink size={14} />
            {lang === 'en' ? 'Live' : 'Démo'}
          </a>
        )}
        <button
          className="btn btn-ghost btn-sm project-case-study-btn"
          onClick={() => onOpen(project)}
        >
          {lang === 'en' ? 'Case Study' : 'Étude de cas'}
          <IconArrowRight size={14} />
        </button>
      </div>
    </article>
  );
}

export default function Projects() {
  const { lang } = useLang();
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll]   = useState(false);
  const headerRef = useReveal(0.1);

  const featured = projects.filter(p => p.featured);
  const rest      = projects.filter(p => !p.featured);
  const displayed = showAll ? [...featured, ...rest] : featured;

  return (
    <section id="projects" className="section projects">
      <div className="container">

        <div ref={headerRef} className="section-header reveal">
          <span className="section-eyebrow">
            {lang === 'en' ? 'Work' : 'Projets'}
          </span>
          <h2 className="section-title">
            {lang === 'en' ? 'Featured Projects' : 'Projets réalisés'}
          </h2>
          <p className="section-desc">
            {lang === 'en'
              ? 'Real projects built during my studies and internships — each one with a genuine technical challenge and a clear contribution.'
              : 'Projets réalisés pendant mes études et stages — chacun avec un vrai défi technique et une contribution claire.'}
          </p>
        </div>

        <div className="projects-grid">
          {displayed.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              lang={lang}
              onOpen={setSelected}
              delay={(i % 3) + 1}
            />
          ))}
        </div>

        {!showAll && rest.length > 0 && (
          <div className="projects-show-more">
            <button
              id="projects-show-all-btn"
              className="btn btn-secondary"
              onClick={() => setShowAll(true)}
            >
              {lang === 'en' ? `Show All Projects (${rest.length} more)` : `Voir tous les projets (+${rest.length})`}
            </button>
          </div>
        )}
      </div>

      {selected && (
        <ProjectModal project={selected} lang={lang} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
