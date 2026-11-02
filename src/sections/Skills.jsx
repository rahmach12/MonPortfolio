import { skills } from '../data/portfolioData';
import { useLang, t } from '../context/LangContext';
import { useReveal } from '../hooks/useReveal';
import './Skills.css';

function SkillCategory({ category, lang, delay }) {
  const ref = useReveal(0.08);
  return (
    <div ref={ref} className={`skill-cat card reveal reveal-delay-${delay}`}>
      <div className="skill-cat-header">
        <div className="skill-cat-icon" aria-hidden>{category.icon}</div>
        <h3 className="skill-cat-name">{t(category.category, lang)}</h3>
      </div>
      <div className="skill-cat-items">
        {category.items.map(item => (
          <span key={item} className="tag tag-neutral skill-item">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { lang } = useLang();
  const headerRef = useReveal(0.1);

  return (
    <section id="skills" className="section skills">
      <div className="container">

        <div ref={headerRef} className="section-header reveal">
          <span className="section-eyebrow">
            {lang === 'en' ? 'Skills' : 'Compétences'}
          </span>
          <h2 className="section-title">
            {lang === 'en' ? 'Technical Skills' : 'Compétences techniques'}
          </h2>
          <p className="section-desc">
            {lang === 'en'
              ? 'Technologies and tools I have used across my projects and studies.'
              : "Technologies et outils utilisés dans mes projets et au cours de mes études."}
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((cat, i) => (
            <SkillCategory
              key={i}
              category={cat}
              lang={lang}
              delay={(i % 4) + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
