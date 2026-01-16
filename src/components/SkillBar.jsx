import { useEffect, useRef, useState } from 'react';
import './SkillBar.css';

function SkillBar({ skill, delay = 0 }) {
    const [isVisible, setIsVisible] = useState(false);
    const skillRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            },
            { threshold: 0.3 }
        );

        if (skillRef.current) {
            observer.observe(skillRef.current);
        }

        return () => {
            if (skillRef.current) {
                observer.unobserve(skillRef.current);
            }
        };
    }, [delay]);

    return (
        <div className="skill-bar" ref={skillRef}>
            <div className="skill-info">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
                {skill.level && (
                    <span className="skill-percentage">{skill.level}%</span>
                )}
            </div>
            {skill.level && (
                <div className="skill-progress">
                    <div
                        className="skill-progress-fill"
                        style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transition: 'width 1s ease-out'
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default SkillBar;
