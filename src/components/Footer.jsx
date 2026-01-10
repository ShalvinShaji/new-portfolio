import React, { memo } from 'react';

const Footer = memo(() => {
  return (
    <footer id="contact" className="bg-transparent py-12 text-center">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-size-nano text-text-white/50 tracking-wide">
            © {new Date().getFullYear()} — Designed & Engineered by Shalvin
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
