import React, { memo } from 'react';
import { m } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Projects = memo(() => {
  const { projects } = portfolioData;
  const { projects: projectsTitle } = portfolioData.sectionTitles;

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-[1400px] mx-auto px-8">
        <m.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-20 flex items-start group"
        >
          <span className="absolute left-[-16px] top-[-24px] font-heading text-size-index font-black text-text-white/[0.03] leading-none select-none pointer-events-none">
            {projectsTitle.number}
          </span>

          <div className="flex flex-col relative z-10">
            <span className="font-heading text-size-nano font-bold text-text-white uppercase tracking-[0.4rem] mb-2 opacity-50">{projectsTitle.prefix}</span>
            <h2 className="font-heading text-size-h1 font-extrabold uppercase tracking-tighter leading-none ml-[-4px] bg-gradient-to-r from-text-white via-text-white/40 to-text-white bg-clip-text text-transparent">
              {projectsTitle.title}
            </h2>
          </div>
        </m.div>
        
        <div className="flex flex-col pl-4 border-l border-border-faint">
          {projects.map((project, index) => (
            <m.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              className="flex flex-col md:flex-row justify-between items-start py-16 border-b border-border-faint group" 
            >
              <div className="flex-1">
                <h3 className="font-heading text-size-h3 md:text-size-h2 font-bold text-text-white mb-4 group-hover:text-crimson transition-colors duration-500">
                  {project.title}
                </h3>
                <div className="flex gap-6 mt-4">
                  <a 
                    href={project.links.demo} 
                    className="font-heading text-size-tiny font-light text-text-white/90 hover:text-crimson transition-colors underline underline-offset-8 decoration-white/10 hover:decoration-crimson/50" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.links.project} 
                    className="font-heading text-size-tiny font-light text-text-white/90 hover:text-crimson transition-colors underline underline-offset-8 decoration-white/10 hover:decoration-crimson/50" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
              
              <div className="flex-1 lg:max-w-[600px] flex flex-col gap-6 mt-8 md:mt-0">
                <p className="text-text-white/70 text-size-tiny leading-relaxed font-light">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-3 py-1 border border-white/5 bg-white/[0.02] text-text-white/40 uppercase tracking-wider rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
