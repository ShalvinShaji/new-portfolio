import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
  const { skills } = portfolioData;
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="container">
        <div className={`section-title-wrapper reveal-text ${isVisible ? 'visible' : ''}`}>
          <span className="title-first">Tech</span>
          <span className="title-second">Stack</span>
        </div>
        
        <div className="skills-container-row">
           {Object.entries(skills).map(([category, items], catIndex) => (
              <div key={category} className={`skill-row reveal-text stagger-${catIndex + 1} ${isVisible ? 'visible' : ''}`}>
                <div className="skill-left">
                  <h3 className="skill-category-title">
                    {`[${category.toUpperCase().replace('_', ' ')}]`}
                  </h3>
                </div>
                <div className="skill-right">
                  <div className="skill-tags">
                    {items.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
