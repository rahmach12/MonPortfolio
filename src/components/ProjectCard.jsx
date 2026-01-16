import { useState } from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="project-card">
            <div className="project-image">
                <img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23667eea"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23fff"%3E' + encodeURIComponent(project.title) + '%3C/text%3E%3C/svg%3E';
                    }}
                />
                {project.featured && (
                    <span className="project-badge">En vedette</span>
                )}
            </div>

            <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">
                    {isExpanded ? project.longDescription : project.description}
                </p>

                {isExpanded && project.features && (
                    <div className="project-features">
                        <h4>Fonctionnalités principales :</h4>
                        <ul>
                            {project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="badge">{tech}</span>
                    ))}
                </div>

                <div className="project-actions">
                    <button
                        className="btn-expand"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Voir moins' : 'Voir plus'} {isExpanded ? '↑' : '↓'}
                    </button>

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            📦 GitHub
                        </a>
                    )}

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            🚀 Démo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
