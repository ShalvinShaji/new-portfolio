import React, { memo } from 'react';
import { portfolioData } from '../data/portfolio';

const Experience = memo(() => {
  const { experience } = portfolioData;
  const { experience: experienceTitle } = portfolioData.sectionTitles;

  return (
    <section 
      id="experience" 
      className="section-padding" 
    >
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="relative mb-20 flex items-start group">
          <span className="absolute left-[-16px] top-[-24px] font-heading text-size-index font-black text-text-white/[0.03] leading-none select-none pointer-events-none">
            {experienceTitle.number}
          </span>

          <div className="flex flex-col relative z-10">
            <span className="font-heading text-size-nano font-bold text-text-white uppercase tracking-[0.4rem] mb-2 opacity-50">{experienceTitle.prefix}</span>
            <h2 
              className="font-heading text-size-h1 font-extrabold uppercase tracking-tighter leading-none ml-[-4px] bg-gradient-to-r from-text-white via-text-white/40 to-text-white bg-clip-text text-transparent"
            >
              {experienceTitle.title}
            </h2>
          </div>
        </div>

        <div className="flex flex-col pl-4 border-l border-border-faint">
          {experience.map((exp, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row gap-8 md:gap-12 py-12 border-b border-border-faint relative"
            >
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-center gap-8 flex-wrap">
                  <span className="font-mono text-size-nano text-crimson tracking-wider uppercase">[{exp.period}]</span>
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading text-size-sub font-bold uppercase tracking-wide leading-none bg-gradient-to-r from-text-white to-text-white/60 bg-clip-text text-transparent">
                      {exp.company}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                   <div className="flex items-center gap-3">
                     <div className="w-1 h-1 bg-crimson rounded-full shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
                     <span className="font-heading text-size-tiny uppercase tracking-[0.2em] bg-gradient-to-r from-text-white to-text-white/60 bg-clip-text text-transparent">
                       {exp.role}
                     </span>
                   </div>
                   <p className="text-text-white/90 text-size-tiny leading-relaxed font-light font-body max-w-5xl">
                     {exp.description}
                   </p>
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
