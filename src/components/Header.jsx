import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <span className="logo-text">RC</span>
                    <span className="logo-name">Rahma Chriha</span>
                </div>

                <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                    <button
                        className="nav-link"
                        onClick={() => scrollToSection('home')}
                    >
                        Accueil
                    </button>
                    <button
                        className="nav-link"
                        onClick={() => scrollToSection('about')}
                    >
                        À propos
                    </button>
                    <button
                        className="nav-link"
                        onClick={() => scrollToSection('skills')}
                    >
                        Compétences
                    </button>
                    <button
                        className="nav-link"
                        onClick={() => scrollToSection('projects')}
                    >
                        Projets
                    </button>
                    <button
                        className="nav-link"
                        onClick={() => scrollToSection('education')}
                    >
                        Formation
                    </button>
                    <button
                        className="nav-link"
                        onClick={() => scrollToSection('contact')}
                    >
                        Contact
                    </button>
                </nav>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </div>
        </header>
    );
}

export default Header;
