import { personalInfo } from '../data/portfolioData';
import './About.css';

function About() {
    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="section-title">
                    <h2>À Propos de Moi</h2>
                </div>

                <div className="about-content">
                    <div className="about-image">
                        <div className="about-image-wrapper">
                            <div className="about-avatar">
                                <img src={personalInfo.profileImage} alt={personalInfo.name} className="profile-photo" />
                            </div>
                            <div className="about-decoration"></div>
                        </div>
                    </div>

                    <div className="about-text">
                        <h3 className="about-subtitle">
                            {personalInfo.title}
                        </h3>
                        <p className="about-description">
                            {personalInfo.bio}
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <div className="highlight-icon">🎓</div>
                                <div className="highlight-content">
                                    <h4>Formation</h4>
                                    <p>Génie Logiciel & Big Data</p>
                                </div>
                            </div>

                            <div className="highlight-item">
                                <div className="highlight-icon">💼</div>
                                <div className="highlight-content">
                                    <h4>Expérience</h4>
                                    <p>3+ Stages Professionnels</p>
                                </div>
                            </div>

                            <div className="highlight-item">
                                <div className="highlight-icon">🚀</div>
                                <div className="highlight-content">
                                    <h4>Projets</h4>
                                    <p>5+ Projets Complets</p>
                                </div>
                            </div>

                            <div className="highlight-item">
                                <div className="highlight-icon">🌍</div>
                                <div className="highlight-content">
                                    <h4>Langues</h4>
                                    <p>Arabe, Français, Anglais</p>
                                </div>
                            </div>
                        </div>

                        <div className="about-info">
                            <div className="info-item">
                                <span className="info-label">📍 Localisation :</span>
                                <span className="info-value">{personalInfo.location}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">📧 Email :</span>
                                <span className="info-value">{personalInfo.email}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">✨ Statut :</span>
                                <span className="info-value">Disponible pour stages et opportunités</span>
                            </div>
                        </div>

                        <div className="about-cta">
                            <a href={personalInfo.cvFile} download className="btn btn-primary">
                                📥 Télécharger mon CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
