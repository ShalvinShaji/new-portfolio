import React, { memo } from 'react';
import { m } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

const Footer = memo(() => {
  const { email } = portfolioData.personalInfo.quickInfo;
  const { socialLinks } = portfolioData.personalInfo;

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

       <div className="max-w-[1400px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
         
         {/* Left Side: Copyright */}
         <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center group cursor-default"
         >
            <p className="font-body text-[10px] text-text-white/30 uppercase tracking-[0.15em] transition-colors duration-500 group-hover:text-text-white/60 flex items-center">
                © {new Date().getFullYear()} Shalvin Shaji <span className="mx-3 inline-block w-1 h-1 bg-crimson rounded-full shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span> All rights reserved.
            </p>
         </m.div>

         {/* Right Side: Grouped Tagline & Icons */}
         <div className="flex items-center gap-4">
            <m.div 
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="hidden lg:flex items-center"
            >
                <p className="font-body text-[10px] text-text-white/30 uppercase tracking-[0.15em] whitespace-nowrap">
                    Data by Logic
                </p>
                <div className="w-[1px] h-2.5 bg-white/10 mx-4"></div>
                <p className="font-body text-[10px] text-text-white/30 uppercase tracking-[0.15em] whitespace-nowrap">
                    Design by Intent
                </p>
            </m.div>

            {/* Group Separator */}
            <div className="hidden lg:block w-[1px] h-3 bg-white/10"></div>

            <div className="flex items-center gap-6">
               {socialIcons.map(({ Icon, link, label }, index) => (
                 <m.a 
                    key={index}
                    href={link}
                    target={label === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-text-white/30 hover:text-crimson transition-all duration-300 transform hover:scale-110"
                    aria-label={label}
                 >
                   <Icon size={12} strokeWidth={2} />
                 </m.a>
               ))}
            </div>
         </div>
       </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
