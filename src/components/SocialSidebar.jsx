import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

const SocialSidebar = () => {
  const { socialLinks } = portfolioData.personalInfo;

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col items-center gap-8">
      <div className="w-[1px] h-20 bg-border-faint hidden md:block"></div>

      <div className="flex md:flex-col gap-8 md:gap-6">
        <a 
          href={socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-text-white/40"
          aria-label="LinkedIn"
        >
          <FiLinkedin size={18} strokeWidth={1.5} />
        </a>
        <a 
          href={socialLinks.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-text-white/40"
          aria-label="GitHub"
        >
          <FiGithub size={18} strokeWidth={1.5} />
        </a>
        <a 
          href={socialLinks.instagram} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-text-white/40"
          aria-label="Instagram"
        >
          <FiInstagram size={18} strokeWidth={1.5} />
        </a>
      </div>

      <div className="w-[1px] h-20 bg-border-faint hidden md:block"></div>
    </div>
  );
};

export default SocialSidebar;
