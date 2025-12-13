import React from 'react';
import { portfolioData } from '../data/portfolio';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';
import logo from '../assets/logo.png';

const Hero = () => {
  const { name, tagline, socialLinks } = portfolioData.personalInfo;
  const [ref, isVisible] = useScrollReveal();
  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2200); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero-spine-section" ref={ref}>
      {/* Grid Background */}
      <div className="hero-grid-overlay">
        {[...Array(10)].map((_, i) => (
          <div key={`v-${i}`} className="grid-line-vert" style={{ left: `${10 * (i + 1)}%`, animationDelay: `${i * 0.05}s` }}>
            <div 
              className="grid-beam"
              style={{
                animationDuration: `${3 + Math.random() * 5}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      {showContent && (
        <>
          <div className="spine-zone-tl">
            <img src={logo} alt="Logo" className="hero-logo" />
          </div>

          <div className="spine-zone-tr">
            <div className="spine-socials">
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="spine-icon"><FaLinkedinIn /></a>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="spine-icon"><FaGithub /></a>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="spine-icon"><FaInstagram /></a>
            </div>
          </div>

          <div className={`hero-center-content reveal-text ${isVisible ? 'visible' : ''}`}>
            <div className="hero-greeting">Hey, I'm</div>
            <h1 className="hero-name">
              <span>S</span><span>H</span><span>A</span><span>L</span><span>V</span><span className="first-letter">I</span><span>N</span>
            </h1>
            <p className="hero-tagline">A Data Engineer {tagline}</p>
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;
