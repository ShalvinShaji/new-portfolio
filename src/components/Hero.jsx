import React, { memo } from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

const Hero = memo(() => {
  const { name, role } = portfolioData.personalInfo;

  return (
    <section 
      id="hero" 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden text-white" 
    >
      <div className="text-center z-10 flex flex-col justify-center items-center h-full w-full px-8">
        {/* Massive Typography Name */}
        <div className="flex flex-col items-center mb-6 w-full max-w-full overflow-hidden">
          <h1 className="font-heading text-size-hero font-bold leading-[0.8] tracking-tighter m-0 uppercase bg-gradient-to-br from-text-white via-text-white to-text-white/10 bg-clip-text text-transparent px-4 cursor-default animate-none">
            {name}
          </h1>
        </div>

        {/* Role Emphasis (Simplified) */}
        <div className="flex flex-col items-center mb-10">
          <h2 className="font-heading text-size-tiny font-light tracking-[0.3rem] md:tracking-luxury text-text-white uppercase ">
            {role}
          </h2>
          
          {/* Mobile Social Links */}
          <div className="flex items-center gap-6 mt-6 md:hidden">
            <a 
              href={portfolioData.personalInfo.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-white/60 hover:text-crimson transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} strokeWidth={1.5} />
            </a>
            <a 
              href={portfolioData.personalInfo.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-white/60 hover:text-crimson transition-colors duration-300"
              aria-label="GitHub"
            >
              <FiGithub size={18} strokeWidth={1.5} />
            </a>
            <a 
              href={portfolioData.personalInfo.socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-white/60 hover:text-crimson transition-colors duration-300"
              aria-label="Instagram"
            >
              <FiInstagram size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>


      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
