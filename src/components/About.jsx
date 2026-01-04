import React, { memo } from 'react';
import { portfolioData } from '../data/portfolio';

const About = memo(() => {
  const { 
    bio, 
    quickInfo 
  } = portfolioData.personalInfo;
  const { about } = portfolioData.sectionTitles;

  return (
    <section 
      id="about" 
      className="section-padding" 
    >
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <div className="relative mb-20 flex items-start group">
          <span className="absolute left-[-16px] top-[-24px] font-heading text-size-index font-black text-text-white/[0.03] leading-none select-none pointer-events-none">
            {about.number}
          </span>

          <div className="flex flex-col relative z-10">
            <span className="font-heading text-size-nano font-bold text-text-white uppercase tracking-[0.4rem] mb-2 opacity-50">{about.prefix}</span>
            <h2 
              className="font-heading text-size-h1 font-extrabold uppercase tracking-tighter leading-none ml-[-4px] bg-gradient-to-r from-text-white via-text-white/40 to-text-white bg-clip-text text-transparent"
            >
              {about.title}
            </h2>
          </div>
        </div>
        

        {/* Content Wrapper with Open Box Design */}
        <div className="pl-4 border-l border-border-faint relative">
          <div className="pt-12 pb-12 border-b border-border-faint">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-24 relative items-start">
              
              {/* Main Content (Left) */}
              <div className="flex flex-col">
                {/* Bio Paragraphs */}
                <div className="flex flex-col gap-8">
                  {bio.map((paragraph, index) => (
                    <p key={index} className="text-size-tiny leading-relaxed text-text-white/90 font-light">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Quick Info (Right) */}
              <div className="flex flex-col gap-10"> 
                <div className="flex flex-col gap-8">
                  {Object.entries(quickInfo).map(([key, value]) => (
                    <div key={key} className="flex flex-col gap-1 border-b border-border-faint pb-6 last:border-none last:pb-0">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-1 h-1 bg-crimson rounded-full shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
                        <span className="text-size-nano  uppercase tracking-[0.2em] bg-gradient-to-r from-text-white to-text-white/60 bg-clip-text text-transparent text-size-tiny">
                          {key}
                        </span>
                      </div>
                      <span className="text-size-tiny font-light text-text-white antialiased">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
