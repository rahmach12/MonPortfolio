import { education, experiences } from '../data/portfolioData';
import './Education.css';

function Education() {
    return (
        <section id="education" className="section education">
            <div className="container">
                <div className="section-title">
                    <h2>Formation & Expérience</h2>
                    <p className="section-subtitle">
                        Mon parcours académique et professionnel
                    </p>
                </div>

                <div className="timeline-container">
                    {/* Education Timeline */}
                    <div className="timeline-section">
                        <h3 className="timeline-heading">
                            <span className="heading-icon">🎓</span>
                            Formation Académique
                        </h3>

                        <div className="timeline">
                            {education.map((edu) => (
                                <div key={edu.id} className="timeline-item">
                                    <div className="timeline-marker">
                                        <span className="marker-icon">{edu.icon}</span>
                                    </div>
                                    <div className="timeline-content card">
                                        <div className="timeline-period">{edu.period}</div>
                                        <h4 className="timeline-title">{edu.degree}</h4>
                                        <div className="timeline-institution">
                                            {edu.institution} • {edu.location}
                                        </div>
                                        <p className="timeline-description">{edu.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Timeline */}
                    <div className="timeline-section">
                        <h3 className="timeline-heading">
                            <span className="heading-icon">💼</span>
                            Expériences Professionnelles
                        </h3>

                        <div className="timeline">
                            {experiences.map((exp) => (
                                <div key={exp.id} className="timeline-item">
                                    <div className="timeline-marker">
                                        <span className="marker-icon">💼</span>
                                    </div>
                                    <div className="timeline-content card">
                                        <div className="timeline-period">{exp.period}</div>
                                        <h4 className="timeline-title">{exp.title}</h4>
                                        <div className="timeline-institution">
                                            {exp.company} • {exp.location}
                                        </div>
                                        <p className="timeline-description">{exp.description}</p>

                                        {exp.responsibilities && exp.responsibilities.length > 0 && (
                                            <div className="responsibilities">
                                                <h5>Responsabilités :</h5>
                                                <ul>
                                                    {exp.responsibilities.map((resp, index) => (
                                                        <li key={index}>{resp}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        <div className="timeline-tech">
                                            {exp.technologies.map((tech, index) => (
                                                <span key={index} className="badge">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
