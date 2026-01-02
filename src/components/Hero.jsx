import React, { memo } from 'react';
import { portfolioData } from '../data/portfolio';

const Hero = memo(() => {
  const { name, socialLinks } = portfolioData.personalInfo;

  return (
    <section 
      id="hero" 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden text-white" 
    >
      <div className="text-center z-10 flex flex-col justify-center items-center h-full w-full px-8 select-none">
        {/* Massive Typography Name */}
        <div className="flex flex-col items-center mb-6 w-full max-w-full overflow-hidden">
          <h1 className="font-heading text-size-hero font-bold leading-[0.8] tracking-tighter m-0 uppercase whitespace-nowrap bg-gradient-to-br from-text-white via-text-white to-text-white/10 bg-clip-text text-transparent px-4 cursor-default animate-none">
            {name}
          </h1>
        </div>

        {/* Role Emphasis (Simplified) */}
        <div className="flex flex-col items-center mb-10">
          <h2 className="font-heading text-size-tiny font-light tracking-luxury text-text-white uppercase ">
            DATA ENGINEER
          </h2>
        </div>

        {/* Social Links (Simplified) */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center gap-6">
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className=" no-underline font-heading font-light text-size-nano tracking-link uppercase transition-all duration-300 text-crimson "
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <span className="text-border-main select-none" aria-hidden="true">·</span>
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className=" no-underline font-heading font-light text-size-nano tracking-link uppercase transition-all duration-300 text-crimson "
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <span className="text-border-main select-none" aria-hidden="true">·</span>
            <a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className=" no-underline font-heading font-light text-size-nano tracking-link uppercase transition-all duration-300 text-crimson "
              aria-label="Instagram Profile"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
