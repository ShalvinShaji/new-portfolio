import React, { memo } from 'react';
import { portfolioData } from '../data/portfolio';

import { motion } from 'framer-motion';

const Projects = memo(() => {
  const { projects } = portfolioData;
  const { projects: projectsTitle } = portfolioData.sectionTitles;

  return (
    <section 
      id="projects" 
      className="section-padding" 
    >
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="relative mb-20 flex items-start group">
          {/* Background Numbering */}
          <span className="absolute left-[-16px] top-[-24px] font-heading text-size-index font-black text-text-white/[0.03] leading-none select-none pointer-events-none">
            {projectsTitle.number}
          </span>

          <div className="flex flex-col relative z-10">
            <span className="font-heading text-size-nano font-bold text-text-white uppercase tracking-[0.4rem] mb-2 opacity-50">{projectsTitle.prefix}</span>
            <motion.h2 
              initial={{ backgroundPosition: '200% 0' }}
              whileInView={{ backgroundPosition: '-200% 0' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-heading text-size-h1 font-extrabold uppercase tracking-tighter leading-none ml-[-4px] bg-gradient-to-r from-text-white via-text-white/40 to-text-white bg-[length:200%_auto] bg-clip-text text-transparent group-hover:animate-shimmer"
            >
              {projectsTitle.title}
            </motion.h2>
          </div>
        </div>
        
        <div className="flex flex-col pl-4 border-l border-border-faint">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col md:flex-row justify-between items-start py-16 border-b border-border-faint transition-all duration-300 md:hover:bg-text-white/[0.02] md:hover:pl-4 group`} 
            >
              <div className="flex-1">
                <h3 className="font-heading text-size-h2 font-bold text-text-white mb-4 transition-colors duration-300 md:group-hover:text-crimson">
                  {project.title}
                </h3>
                <div className="flex gap-6 mt-4">
                  <a 
                    href={project.links.demo} 
                    className="font-heading text-size-tiny font-light text-text-white/90 relative transition-colors duration-300 md:hover:text-crimson after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-crimson after:transition-all after:duration-300 md:hover:after:w-full" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.links.project} 
                    className="font-heading text-size-tiny font-light text-text-white/90 relative transition-colors duration-300 md:hover:text-crimson after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-crimson after:transition-all after:duration-300 md:hover:after:w-full" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View code for ${project.title}`}
                  >
                    View Code
                  </a>
                </div>
              </div>
              
              <div className="flex-1 max-w-[500px] flex flex-col gap-6">
                <p className="text-text-white text-size-tiny leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="text-size-nano text-text-muted">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
