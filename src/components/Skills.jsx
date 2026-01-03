import React, { memo } from 'react';
import { portfolioData } from '../data/portfolio';

import { motion } from 'framer-motion';

const Skills = memo(() => {
  const { skills } = portfolioData;
  const { skills: skillsTitle } = portfolioData.sectionTitles;

  return (
    <section 
      id="skills" 
      className="section-padding"
    >
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="relative mb-20 flex items-start group">
          {/* Background Numbering */}
          <span className="absolute left-[-16px] top-[-24px] font-heading text-size-index font-black text-text-white/[0.03] leading-none select-none pointer-events-none">
            {skillsTitle.number}
          </span>

          <div className="flex flex-col relative z-10">
            <span className="font-heading text-size-nano font-bold text-text-white uppercase tracking-[0.4rem] mb-2 opacity-50">{skillsTitle.prefix}</span>
            <motion.h2 
              initial={{ backgroundPosition: '200% 0' }}
              whileInView={{ backgroundPosition: '-200% 0' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-heading text-size-h1 font-extrabold uppercase tracking-tighter leading-none ml-[-4px] bg-gradient-to-r from-text-white via-text-white/40 to-text-white bg-[length:200%_auto] bg-clip-text text-transparent group-hover:animate-shimmer"
            >
              {skillsTitle.title}
            </motion.h2>
          </div>
        </div>
        
        <div className="flex flex-col pl-4 border-l border-border-faint">
           {Object.entries(skills).map(([category, items]) => (
              <div 
                key={category} 
                className={`flex flex-col gap-8 items-start py-12 border-b border-border-faint transition-all duration-300 md:hover:bg-text-white/[0.02] md:hover:pl-4`}
              >
                <div className="w-full">
                  <div className="flex items-center gap-3">
                    <div className="w-[1px] h-3 bg-crimson shadow-[0_0_8px_rgba(220,38,38,0.5)]"></div>
                    <span className="font-heading text-size-tiny font-bold text-text-white uppercase tracking-[0.2em]">
                      {category.replace('_', ' ')}
                    </span>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex flex-wrap gap-x-12 gap-y-4">
                    {items.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="font-heading text-size-tiny text-text-white/90 font-light transition-all duration-300 inline-block cursor-default md:hover:text-crimson md:hover:translate-x-[5px]"
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
