import React, { useState, memo } from 'react';
import { portfolioData } from '../data/portfolio';

const Experience = memo(() => {
  const { experience } = portfolioData;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section 
      id="experience" 
      className="section-padding" 
    >
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="relative mb-20 flex items-start group">
          {/* Background Numbering */}
          <span className="absolute left-[-16px] top-[-24px] font-heading text-[7rem] md:text-[9rem] font-black text-text-white/[0.03] leading-none select-none pointer-events-none">
            02
          </span>

          <div className="flex flex-col relative z-10">
            <span className="font-heading text-size-nano font-bold text-text-white uppercase tracking-[0.4rem] mb-2 opacity-50">The</span>
            <h2 className="font-heading text-size-h1 font-extrabold text-crimson uppercase tracking-tighter leading-none ml-[-4px]">
              Timeline
            </h2>
          </div>
        </div>

        <div className="flex flex-col pl-4 border-l border-border-faint">
          {experience.map((exp, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-8 md:gap-12 py-12 border-b border-border-faint transition-all duration-300 hover:bg-text-white/[0.01] hover:pl-4 relative`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-baseline gap-8 flex-wrap">
                  <span className="font-mono text-size-nano text-crimson tracking-wider uppercase">[{exp.period}]</span>
                  <h3 className={`font-heading text-size-h3 font-bold transition-colors duration-300 leading-none ${hoveredIndex === index ? 'text-text-white' : 'text-text-white'}`}>
                    {exp.company}
                  </h3>
                </div>
                <div className="flex flex-col gap-2 max-w-[600px]">
                   <h4 className="text-size-body text-text-white font-medium">{exp.role}</h4>
                   <p className="text-text-white leading-relaxed font-light font-body">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Experience.displayName = 'Experience';

export default Experience;
