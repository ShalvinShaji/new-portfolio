import React, { memo } from 'react';
import { portfolioData } from '../data/portfolio';

const Skills = memo(() => {
  const { skills } = portfolioData;

  return (
    <section 
      id="skills" 
      className="section-padding" 
    >
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="relative mb-20 flex items-start group">
          {/* Background Numbering */}
          <span className="absolute left-[-16px] top-[-24px] font-heading text-size-index font-black text-text-white/[0.03] leading-none select-none pointer-events-none">
            03
          </span>

          <div className="flex flex-col relative z-10">
            <span className="font-heading text-size-nano font-bold text-text-white uppercase tracking-[0.4rem] mb-2 opacity-50">The</span>
            <h2 className="font-heading text-size-h1 font-extrabold text-crimson uppercase tracking-tighter leading-none ml-[-4px]">
              Stack
            </h2>
          </div>
        </div>
        
        <div className="flex flex-col pl-4 border-l border-border-faint">
           {Object.entries(skills).map(([category, items], catIndex) => (
              <div 
                key={category} 
                className={`flex flex-col gap-6 items-start py-12 border-b border-border-faint transition-all duration-300 hover:bg-text-white/[0.02] hover:pl-4`}
              >
                <div className="w-full">
                  <h3 className="font-mono text-size-body text-crimson font-normal tracking-wider">
                    {`[${category.toUpperCase().replace('_', ' ')}]`}
                  </h3>
                </div>
                <div className="w-full">
                  <div className="flex flex-wrap gap-4">
                    {items.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="font-heading text-size-body text-text-white font-medium transition-all duration-300 inline-block cursor-default hover:text-crimson hover:translate-x-[5px]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;
