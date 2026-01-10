import React, { memo } from 'react';
import { m } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Skills = memo(() => {
  const { skills } = portfolioData;
  const { skills: skillsTitle } = portfolioData.sectionTitles;

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-[1400px] mx-auto px-8">
        <m.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-20 flex items-start group"
        >
          <span className="absolute left-[-16px] top-[-24px] font-heading text-size-index font-black text-text-white/[0.03] leading-none select-none pointer-events-none">
            {skillsTitle.number}
          </span>

          <div className="flex flex-col relative z-10">
            <span className="font-heading text-size-nano font-bold text-text-white uppercase tracking-[0.4rem] mb-2 opacity-50">{skillsTitle.prefix}</span>
            <h2 className="font-heading text-size-h1 font-extrabold uppercase tracking-tighter leading-none ml-[-4px] bg-gradient-to-r from-text-white via-text-white/40 to-text-white bg-clip-text text-transparent">
              {skillsTitle.title}
            </h2>
          </div>
        </m.div>
        
        <div className="pl-4 border-l border-border-faint h-full">
          <div className="py-12 border-b border-border-faint">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items], i) => (
                <m.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                  key={category}
                  className="group flex flex-col gap-6 p-8 bg-text-white/[0.02] border border-border-faint"
                >
                  <div className="flex items-center gap-3">
                     <div className="w-1 h-1 bg-crimson rounded-full shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
                     <h3 className="font-heading text-size-tiny font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-text-white to-text-white/60 bg-clip-text text-transparent">
                       {category.replace('_', ' ')}
                     </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="font-heading text-size-tiny text-text-white/60 font-light px-3 py-1 border border-text-white/10 rounded-sm cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;
