import { projects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

function Projects() {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <div className="section-title">
                    <h2>Mes Projets</h2>
                    <p className="section-subtitle">
                        Une sélection de mes réalisations académiques et professionnelles
                    </p>
                </div>

                {/* Featured Projects */}
                {featuredProjects.length > 0 && (
                    <div className="projects-section">
                        <h3 className="projects-subtitle">
                            <span className="subtitle-icon">⭐</span>
                            Projets en vedette
                        </h3>
                        <div className="projects-grid featured-grid">
                            {featuredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Other Projects */}
                {otherProjects.length > 0 && (
                    <div className="projects-section">
                        <h3 className="projects-subtitle">
                            <span className="subtitle-icon">🚀</span>
                            Autres projets
                        </h3>
                        <div className="projects-grid">
                            {otherProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                )}

                <div className="projects-footer">
                    <p className="footer-text">
                        Tous mes projets sont disponibles sur mon profil GitHub
                    </p>
                    <a
                        href="https://github.com/rahmach12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        📦 Voir mon GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
