import { useRef } from 'react';
import { experience, education, certifications, languages } from '../data/portfolioData';
import { useLang, t } from '../context/LangContext';
import { useReveal } from '../hooks/useReveal';
import { IconBriefcase, IconGraduationCap, IconAward } from '../components/Icons';
import './Education.css';

function ExperienceItem({ item, lang, delay }) {
  const ref = useReveal(0.08);
  return (
    <div ref={ref} className={`exp-item reveal reveal-delay-${delay}`}>
      <div className="exp-item-dot" aria-hidden />
      <div className="exp-item-content">
        <div className="exp-item-header">
          <div>
            <span className="exp-item-type">{t(item.type, lang)}</span>
            <h3 className="exp-item-role">{t(item.role, lang)}</h3>
            <p className="exp-item-company">{item.company} · {t(item.period, lang)}</p>
          </div>
        </div>
        <p className="exp-item-desc">{t(item.description, lang)}</p>
        <ul className="exp-item-tasks">
          {t(item.tasks, lang).map((task, i) => (
            <li key={i} className="exp-item-task">
              <span aria-hidden>→</span> {task}
            </li>
          ))}
        </ul>
        <div className="exp-item-tech">
          {item.tech.map(tech => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function EduItem({ item, lang, delay }) {
  const ref = useReveal(0.08);
  return (
    <div ref={ref} className={`edu-item card reveal reveal-delay-${delay}`}>
      <div className="edu-item-period">{item.period}</div>
      <h3 className="edu-item-degree">{t(item.degree, lang)}</h3>
      <p className="edu-item-institution">{item.institution}</p>
      <p className="edu-item-location text-muted">{item.location}</p>
      <p className="edu-item-desc">{t(item.description, lang)}</p>
    </div>
  );
}

function CertItem({ cert, delay }) {
  const ref = useReveal(0.08);
  return (
    <div ref={ref} className={`cert-item card reveal reveal-delay-${delay}`}>
      <span className="cert-icon">{cert.icon}</span>
      <div>
        <h4 className="cert-name">{cert.name}</h4>
        <p className="cert-issuer">{cert.issuer} · {cert.year}</p>
      </div>
    </div>
  );
}

function LangItem({ item, lang, delay }) {
  const ref = useReveal(0.08);
  return (
    <div ref={ref} className={`lang-item card reveal reveal-delay-${delay}`}>
      <h4 className="lang-name">{t(item.name, lang)}</h4>
      <p className="lang-level text-muted">{t(item.level, lang)}</p>
    </div>
  );
}

export default function Experience() {
  const { lang } = useLang();
  const expHeaderRef  = useReveal(0.1);
  const eduHeaderRef  = useReveal(0.1);
  const certHeaderRef = useReveal(0.1);
  const langHeaderRef = useReveal(0.1);

  return (
    <>
      {/* ─── Experience ─────────────────────────────────────────── */}
      <section id="experience" className="section experience">
        <div className="container">
          <div ref={expHeaderRef} className="section-header reveal">
            <span className="section-eyebrow">
              <IconBriefcase size={14} />
              {lang === 'en' ? 'Experience' : 'Expérience'}
            </span>
            <h2 className="section-title">
              {lang === 'en' ? 'Professional Experience' : 'Expérience professionnelle'}
            </h2>
            <p className="section-desc">
              {lang === 'en'
                ? 'Internships and projects where I contributed as a developer.'
                : 'Stages et projets où j\'ai contribué en tant que développeuse.'}
            </p>
          </div>

          <div className="exp-timeline">
            {experience.map((item, i) => (
              <ExperienceItem
                key={item.id}
                item={item}
                lang={lang}
                delay={(i % 3) + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Education ──────────────────────────────────────────── */}
      <section id="education" className="section experience">
        <div className="container">
          <div ref={eduHeaderRef} className="section-header reveal">
            <span className="section-eyebrow">
              <IconGraduationCap size={14} />
              {lang === 'en' ? 'Education' : 'Formation'}
            </span>
            <h2 className="section-title">
              {lang === 'en' ? 'Education' : 'Parcours académique'}
            </h2>
          </div>

          <div className="edu-grid">
            {education.map((item, i) => (
              <EduItem key={item.id} item={item} lang={lang} delay={i + 1} />
            ))}
          </div>

          {/* ── Certifications ── */}
          <div ref={certHeaderRef} className="section-header reveal" style={{ marginTop: 'var(--sp-16)' }}>
            <span className="section-eyebrow">
              <IconAward size={14} />
              {lang === 'en' ? 'Certifications' : 'Certifications'}
            </span>
            <h2 className="section-title">
              {lang === 'en' ? 'Certifications' : 'Certifications'}
            </h2>
          </div>

          <div className="cert-grid">
            {certifications.map((cert, i) => (
              <CertItem key={cert.id} cert={cert} delay={i + 1} />
            ))}
          </div>

          {/* ── Languages ── */}
          <div ref={langHeaderRef} className="section-header reveal" style={{ marginTop: 'var(--sp-16)' }}>
            <span className="section-eyebrow">
              {lang === 'en' ? 'Languages' : 'Langues'}
            </span>
            <h2 className="section-title">
              {lang === 'en' ? 'Languages' : 'Langues parlées'}
            </h2>
          </div>

          <div className="lang-grid">
            {languages.map((l, i) => (
              <LangItem key={i} item={l} lang={lang} delay={i + 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
