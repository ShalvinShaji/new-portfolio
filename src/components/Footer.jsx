import React, { memo } from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

const Footer = memo(() => {
  const { email } = portfolioData.personalInfo.quickInfo;
  const { socialLinks, name } = portfolioData.personalInfo;

  const socialIcons = [
    { Icon: FiMail, link: `mailto:${email}`, label: "Email" },
    { Icon: FiLinkedin, link: socialLinks.linkedin, label: "LinkedIn" },
    { Icon: FiGithub, link: socialLinks.github, label: "GitHub" },
    { Icon: FiInstagram, link: socialLinks.instagram, label: "Instagram" }
  ];

  return (
    <footer id="contact" className="py-10 bg-white/[0.01] border-t border-border-faint backdrop-blur-sm relative overflow-hidden">
       {/* Ambient Light Effect (Optional - very subtle) */}
       <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-crimson/10 to-transparent"></div>

       <div className="max-w-[1400px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-4 relative z-10">
         
         {/* Left Side: Copyright */}
         <div className="flex items-center group cursor-default order-2 md:order-1">
            <p className="font-body text-[10px] text-text-white/30 uppercase tracking-[0.15em] transition-colors duration-500 group-hover:text-text-white/60 flex flex-wrap justify-center items-center text-center">
                <span className="whitespace-nowrap">© {new Date().getFullYear()} {name}</span>
                <span className="mx-3 inline-block w-1 h-1 bg-crimson rounded-full shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
                <span className="whitespace-nowrap">All rights reserved.</span>
            </p>
         </div>

         {/* Right Side: Social Icons */}
         <div className="flex items-center gap-4 order-1 md:order-2">
            <div className="flex items-center gap-6">
               {socialIcons.map(({ Icon, link, label }, index) => (
                 <a 
                    key={index}
                    href={link}
                    target={label === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="text-text-white/30 hover:text-crimson transition-all duration-300 transform hover:scale-110"
                    aria-label={label}
                 >
                   <Icon className="w-[14px] h-[14px] md:w-4 md:h-4" strokeWidth={1.5} />
                 </a>
               ))}
            </div>
         </div>
       </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
