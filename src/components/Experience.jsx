import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
  const { experience } = portfolioData;
  const [ref, isVisible] = useScrollReveal();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="experience" className="section experience-section" ref={ref}>
      <div className="container">
        <div className={`section-title-wrapper reveal-text ${isVisible ? 'visible' : ''}`}>
          <span className="title-first">Career</span>
          <span className="title-second">Log</span>
        </div>

        <div className="career-log-container">
          {experience.map((exp, index) => (
            <div 
              key={index} 
              className={`log-entry reveal-text stagger-${index + 1} ${isVisible ? 'visible' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="log-marker-col">
                 <span className={`log-index ${hoveredIndex === index ? 'active' : ''}`}>
                   {`0${index + 1}`}
                 </span>
                 <div className={`log-line ${index === experience.length - 1 ? 'last' : ''}`}></div>
              </div>
              
              <div className="log-content">
                <div className="log-header">
                  <span className="log-period">[{exp.period}]</span>
                  <h3 className={`log-company ${hoveredIndex === index ? 'active' : ''}`}>{exp.company}</h3>
                </div>
                <div className="log-details">
                   <h4 className="log-role">{exp.role}</h4>
                   <p className="log-desc">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
