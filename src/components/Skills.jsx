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
          <span className="title-first">System</span>
          <span className="title-second">Capabilities</span>
        </div>
        
        <div className="data-stream-container">
          <div className="terminal-header">
            <span className="terminal-prompt">root@shalvin:~/skills$</span>
            <span className="terminal-cmd">execute_query --all</span>
          </div>

          <div className="stream-grid">
             {Object.entries(skills).map(([category, items], catIndex) => (
                <div key={category} className={`stream-category reveal-text stagger-${catIndex + 1} ${isVisible ? 'visible' : ''}`}>
                  <h3 className="stream-category-title">{`// ${category.toUpperCase()}_MODULE`}</h3>
                  <div className="stream-chips">
                    {items.map((skill, idx) => (
                      <div key={idx} className="data-chip">
                        <span className="chip-prefix">::</span>
                        <span className="chip-val">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
