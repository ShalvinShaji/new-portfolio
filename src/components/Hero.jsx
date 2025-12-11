import React from 'react';
import { portfolioData } from '../data/portfolio';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';
import logo from '../assets/logo.png';

const Hero = () => {
  const { name, tagline, socialLinks } = portfolioData.personalInfo;
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="hero" className="hero-spine-section" ref={ref}>
      {/* Logo - Top Left */}
      <div className="spine-zone-tl">
        <img src={logo} alt="Logo" className="hero-logo" />
      </div>

      {/* Social Icons - Top Right */}
      <div className="spine-zone-tr">
        <div className="spine-socials">
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="spine-icon"><FaLinkedinIn /></a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="spine-icon"><FaGithub /></a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="spine-icon"><FaInstagram /></a>
        </div>
      </div>

      {/* Centered Content */}
      <div className={`hero-center-content reveal-text ${isVisible ? 'visible' : ''}`}>
        <div className="hero-greeting">Hey, I'm</div>
        <h1 className="hero-name">
          SHALV<span className="first-letter">I</span>N
        </h1>
        <p className="hero-tagline">A Data Engineer {tagline}</p>
      </div>

    </section>
  );
};

export default Hero;
