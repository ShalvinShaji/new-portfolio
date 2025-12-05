import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Footer = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <footer id="contact" className="footer" ref={ref}>
      <div className={`container footer-container reveal-text ${isVisible ? 'visible' : ''}`}>
        <p>© {new Date().getFullYear()}. Designed and Developed by Me with <span className="heart">❤</span></p>
      </div>
    </footer>
  );
};

export default Footer;
