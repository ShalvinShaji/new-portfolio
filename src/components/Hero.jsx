import React from 'react';
import { portfolioData } from '../data/portfolio';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';

const Hero = () => {
  const { name, tagline, socialLinks } = portfolioData.personalInfo;
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="hero" className="hero-spine-section" ref={ref}>
      {/* The Spine: Vertical Axis */}
      <div className={`the-spine ${isVisible ? 'grow' : ''}`}></div>

      {/* Zone 1: Top Left - Socials */}
      <div className="spine-zone-tl">
        <div className="spine-socials-tl">
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="spine-icon"><FaLinkedinIn /></a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="spine-icon"><FaGithub /></a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="spine-icon"><FaInstagram /></a>
        </div>
      </div>

      {/* Zone 2: Bottom Left - The Name (Crossing the line) */}
      <div className={`spine-name-wrapper reveal-text ${isVisible ? 'visible' : ''}`}>
        <h1 className="spine-name">{name}</h1>
      </div>

      {/* Zone 3: Top Right - Context */}
      <div className={`spine-context reveal-text stagger-1 ${isVisible ? 'visible' : ''}`}>
        <span className="spine-greeting">Data Engineer</span>
        <p className="spine-tagline">{tagline}</p>
      </div>
    </section>
  );
};

export default Hero;
