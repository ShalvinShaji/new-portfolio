import React, { memo } from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { m } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const SocialSidebar = memo(({ startAnimation }) => {
  const { socialLinks } = portfolioData.personalInfo;

  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col items-center gap-8">
      <m.div 
        initial={{ y: -100, opacity: 0 }}
        animate={startAnimation ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 2.3, ease: "easeOut" }}
        className="w-[1px] h-20 bg-border-faint"
      ></m.div>

      <div className="flex flex-col gap-6">
        <m.a 
          href={socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-text-white/40 hover:text-crimson transition-colors duration-300"
          aria-label="LinkedIn"
          initial={{ y: -20, opacity: 0 }}
          animate={startAnimation ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <FiLinkedin size={20} strokeWidth={1.5} />
        </m.a>
        <m.a 
          href={socialLinks.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-text-white/40 hover:text-crimson transition-colors duration-300"
          aria-label="GitHub"
          initial={{ y: -20, opacity: 0 }}
          animate={startAnimation ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <FiGithub size={20} strokeWidth={1.5} />
        </m.a>
        <m.a 
          href={socialLinks.instagram} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-text-white/40 hover:text-crimson transition-colors duration-300"
          aria-label="Instagram"
          initial={{ y: -20, opacity: 0 }}
          animate={startAnimation ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 2.0 }}
        >
          <FiInstagram size={20} strokeWidth={1.5} />
        </m.a>
      </div>

      <m.div 
        initial={{ y: 100, opacity: 0 }}
        animate={startAnimation ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 3.1, ease: "easeOut" }}
        className="w-[1px] h-20 bg-border-faint"
      ></m.div>
    </div>
  );
});

SocialSidebar.displayName = 'SocialSidebar';

export default SocialSidebar;
