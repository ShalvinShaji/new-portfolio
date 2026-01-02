import React, { memo } from 'react';
import { portfolioData } from '../data/portfolio';

const About = memo(() => {
  const { bio } = portfolioData.personalInfo;

  return (
    <section 
      id="about" 
      className="section-padding" 
    >
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="relative mb-20 flex items-start group">
          {/* Background Numbering */}
          <span className="absolute left-[-16px] top-[-24px] font-heading text-[7rem] md:text-[9rem] font-black text-text-white/[0.03] leading-none select-none pointer-events-none">
            01
          </span>

          <div className="flex flex-col relative z-10">
            <span className="font-heading text-size-nano font-bold text-text-white uppercase tracking-[0.4rem] mb-2 opacity-50">The</span>
            <h2 className="font-heading text-size-h1 font-extrabold text-crimson uppercase tracking-tighter leading-none ml-[-4px]">
              Profile
            </h2>
          </div>
        </div>
        
        <div className="flex flex-col pl-4 border-l border-border-faint pt-4">
          <div className="flex flex-col gap-8 pb-16 border-b border-border-faint">
            {bio.map((paragraph, index) => (
              <p key={index} className="text-size-body leading-relaxed text-text-white font-light">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
