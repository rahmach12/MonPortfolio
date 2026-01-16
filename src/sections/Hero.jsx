import { personalInfo } from '../data/portfolioData';
import './Hero.css';

function Hero() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="hero-gradient"></div>
                <div className="hero-particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="particle" style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}></div>
                    ))}
                </div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <span className="hero-greeting animate-fade-in">
                            Bonjour, je suis
                        </span>
                        <h1 className="hero-name animate-fade-in-up">
                            {personalInfo.name}
                        </h1>
                        <h2 className="hero-title animate-fade-in-up">
                            {personalInfo.title}
                        </h2>
                        <p className="hero-tagline animate-fade-in-up">
                            {personalInfo.tagline}
                        </p>

                        <div className="hero-cta animate-fade-in-up">
                            <button className="btn btn-primary" onClick={scrollToProjects}>
                                Voir mes projets
                            </button>
                            <button className="btn btn-secondary" onClick={scrollToContact}>
                                Contactez-moi
                            </button>
                            <a href={personalInfo.cvFile} download className="btn btn-outline">
                                Télécharger CV
                            </a>
                        </div>

                        <div className="hero-socials animate-fade-in">
                            <a
                                href={personalInfo.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-social-link"
                                aria-label="GitHub"
                            >
                                📦
                            </a>
                            <a
                                href={personalInfo.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-social-link"
                                aria-label="LinkedIn"
                            >
                                💼
                            </a>
                            <a
                                href={personalInfo.socials.email}
                                className="hero-social-link"
                                aria-label="Email"
                            >
                                📧
                            </a>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-avatar-container animate-float">
                            <div className="hero-avatar">
                                <div className="avatar-placeholder">
                                    <span className="avatar-initials">RC</span>
                                </div>
                                <div className="avatar-ring"></div>
                                <div className="avatar-ring-2"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <span>Scroll</span>
                    <div className="scroll-arrow">↓</div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
