import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">Rahma Chriha</h3>
                        <p className="footer-text">
                            Étudiante en Génie Logiciel passionnée par le développement Full-Stack
                            et la création d'applications web innovantes.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Navigation</h4>
                        <div className="footer-links">
                            <a href="#home" className="footer-link">Accueil</a>
                            <a href="#about" className="footer-link">À propos</a>
                            <a href="#skills" className="footer-link">Compétences</a>
                            <a href="#projects" className="footer-link">Projets</a>
                            <a href="#contact" className="footer-link">Contact</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Réseaux Sociaux</h4>
                        <div className="footer-socials">
                            <a
                                href="https://github.com/rahmachriha"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="GitHub"
                            >
                                <span className="social-icon">📦</span>
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/rahma-chriha"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="LinkedIn"
                            >
                                <span className="social-icon">💼</span>
                                LinkedIn
                            </a>
                            <a
                                href="mailto:rahma.chriha@example.com"
                                className="social-link"
                                aria-label="Email"
                            >
                                <span className="social-icon">📧</span>
                                Email
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} Rahma Chriha. Tous droits réservés.
                    </p>
                    <button
                        className="scroll-top-btn"
                        onClick={scrollToTop}
                        aria-label="Retour en haut"
                    >
                        ↑
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
