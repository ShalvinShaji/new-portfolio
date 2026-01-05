import React, { memo } from 'react';

const Footer = memo(() => {
  return (
    <footer id="contact" className="bg-transparent py-12 text-center">
      <div className="max-w-[1400px] mx-auto px-8">
        <p className="text-size-tiny text-text-white/60 font-light">
          © {new Date().getFullYear()}. Designed and Developed by Me with <span className="text-crimson text-[1rem] align-middle" aria-label="heart">❤</span>
        </p>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
