import React, { memo } from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { m } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Hero = memo(({ startAnimation }) => {
  const { name, role } = portfolioData.personalInfo;

  return (
    <section id="hero" className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden text-white">
      <div className="text-center z-10 flex flex-col justify-center items-center h-full w-full px-8">
        <div className="relative flex flex-col items-center w-full max-w-full">
          <m.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0 }}
            className="font-heading text-size-hero font-bold leading-[0.8] tracking-tighter m-0 uppercase bg-gradient-to-br from-text-white via-text-white to-text-white/10 bg-clip-text text-transparent px-4 cursor-default animate-none"
          >
            {name}
          </m.h1>

          <div className="md:absolute md:top-full mt-6 left-0 w-full flex flex-col items-center">
            <m.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={startAnimation ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
              className="font-heading text-size-tiny font-light tracking-[0.3rem] md:tracking-luxury text-text-white uppercase md:whitespace-nowrap"
            >
              {role}
            </m.h2>
            
            <div className="flex items-center gap-6 mt-6 md:hidden">
              <m.a 
                href={portfolioData.personalInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-white/60 hover:text-crimson transition-colors"
                aria-label="LinkedIn"
                initial={{ opacity: 0, y: 10 }}
                animate={startAnimation ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <FiLinkedin size={18} strokeWidth={1.5} />
              </m.a>
              <m.a 
                href={portfolioData.personalInfo.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-white/60 hover:text-crimson transition-colors"
                aria-label="GitHub"
                initial={{ opacity: 0, y: 10 }}
                animate={startAnimation ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <FiGithub size={18} strokeWidth={1.5} />
              </m.a>
              <m.a 
                href={portfolioData.personalInfo.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-white/60 hover:text-crimson transition-colors"
                aria-label="Instagram"
                initial={{ opacity: 0, y: 10 }}
                animate={startAnimation ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.7 }}
              >
                <FiInstagram size={18} strokeWidth={1.5} />
              </m.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
