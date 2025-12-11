import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { portfolioData } from '../data/portfolio';

const About = () => {
  const { bio, role, company } = portfolioData.personalInfo;
  const [ref, isVisible] = useScrollReveal();

  const stats = [
    { label: "ROLE", value: role },
    { label: "CURRENTLY", value: company },
    { label: "BASED IN", value: "India" }, // Adding location context
  ];

  return (
    <section id="about" className="section about-section" ref={ref}>
      <div className="container">
        <div className={`section-title-wrapper reveal-text ${isVisible ? 'visible' : ''}`}>
          <span className="title-first">The</span>
          <span className="title-second">Profile</span>
        </div>
        
        <div className="dossier-container">
          <div className="dossier-entry">
            {/* Left Column: The Stats */}
            <div className={`dossier-stats reveal-text stagger-1 ${isVisible ? 'visible' : ''}`}>
              {stats.map((stat, index) => (
                <div key={index} className="stat-row">
                  <span className="stat-label">[{stat.label}]</span>
                  <span className="stat-value">{stat.value}</span>
                </div>
              ))}
            </div>

            {/* Right Column: The Narrative */}
            <div className={`dossier-narrative reveal-text stagger-2 ${isVisible ? 'visible' : ''}`}>
              {bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
