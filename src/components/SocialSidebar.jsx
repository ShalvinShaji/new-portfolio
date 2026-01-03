import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

const SocialSidebar = () => {
  const { socialLinks } = portfolioData.personalInfo;

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col items-center gap-8">
      {/* Decorative Top Line */}
      <div className="w-[1px] h-20 bg-border-faint hidden md:block"></div>

      <div className="flex md:flex-col gap-8 md:gap-6">
        <a 
          href={socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-text-white/40 hover:text-crimson transition-all duration-300 transform md:hover:-translate-x-1 hover:-translate-y-1 md:hover:-translate-y-0"
          aria-label="LinkedIn"
        >
          <FiLinkedin size={18} strokeWidth={1.5} />
        </a>
        <a 
          href={socialLinks.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-text-white/40 hover:text-crimson transition-all duration-300 transform md:hover:-translate-x-1 hover:-translate-y-1 md:hover:-translate-y-0"
          aria-label="GitHub"
        >
          <FiGithub size={18} strokeWidth={1.5} />
        </a>
        <a 
          href={socialLinks.instagram} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-text-white/40 hover:text-crimson transition-all duration-300 transform md:hover:-translate-x-1 hover:-translate-y-1 md:hover:-translate-y-0"
          aria-label="Instagram"
        >
          <FiInstagram size={18} strokeWidth={1.5} />
        </a>
      </div>

      {/* Decorative Bottom Line */}
      <div className="w-[1px] h-20 bg-border-faint hidden md:block"></div>
      
      {/* Vertical Label */}
      <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-text-white/20 vertical-text select-none rotate-90 mt-8 mb-4 hidden md:block">
        {/* Follow */}
      </span>
    </div>
  );
};

export default SocialSidebar;
