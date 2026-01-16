import { skills } from '../data/portfolioData';
import SkillBar from '../components/SkillBar';
import './Skills.css';

function Skills() {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <div className="section-title">
                    <h2>Compétences</h2>
                    <p className="section-subtitle">
                        Technologies et outils que je maîtrise pour créer des solutions performantes
                    </p>
                </div>

                <div className="skills-grid">
                    {/* Languages */}
                    <div className="skill-category">
                        <h3 className="category-title">
                            <span className="category-icon">💻</span>
                            Langages de Programmation
                        </h3>
                        <div className="skill-list">
                            {skills.languages.map((skill, index) => (
                                <SkillBar key={skill.name} skill={skill} delay={index * 100} />
                            ))}
                        </div>
                    </div>

                    {/* Frameworks */}
                    <div className="skill-category">
                        <h3 className="category-title">
                            <span className="category-icon">⚙️</span>
                            Frameworks & Bibliothèques
                        </h3>
                        <div className="skill-list">
                            {skills.frameworks.map((skill, index) => (
                                <SkillBar key={skill.name} skill={skill} delay={index * 100} />
                            ))}
                        </div>
                    </div>

                    {/* Databases */}
                    <div className="skill-category">
                        <h3 className="category-title">
                            <span className="category-icon">🗄️</span>
                            Bases de Données
                        </h3>
                        <div className="skill-list">
                            {skills.databases.map((skill, index) => (
                                <SkillBar key={skill.name} skill={skill} delay={index * 100} />
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="skill-category">
                        <h3 className="category-title">
                            <span className="category-icon">🛠️</span>
                            Outils & Technologies
                        </h3>
                        <div className="skill-list">
                            {skills.tools.map((skill, index) => (
                                <SkillBar key={skill.name} skill={skill} delay={index * 100} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Methodologies & Languages Spoken */}
                <div className="additional-skills">
                    <div className="skill-badges">
                        <h4 className="badges-title">Méthodologies</h4>
                        <div className="badges-list">
                            {skills.methodologies.map((method) => (
                                <span key={method.name} className="badge badge-primary">
                                    {method.icon} {method.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-badges">
                        <h4 className="badges-title">Langues Parlées</h4>
                        <div className="badges-list">
                            {skills.languages_spoken.map((lang) => (
                                <span key={lang.name} className="badge badge-accent">
                                    {lang.flag} {lang.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
