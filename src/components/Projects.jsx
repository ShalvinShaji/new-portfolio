import useScrollReveal from '../hooks/useScrollReveal';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
  const { projects } = portfolioData;
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="projects" className="section projects-section" ref={ref}>
      <div className="container">
        <div className={`section-title-wrapper reveal-text ${isVisible ? 'visible' : ''}`}>
          <span className="title-first">My</span>
          <span className="title-second">Works</span>
        </div>
        
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-row reveal-text stagger-2 ${isVisible ? 'visible' : ''}`} style={{transitionDelay: `${index * 150}ms`}}>
              <div className="project-info-left">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  <a href={project.links.demo} className="text-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.links.project} className="text-link" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
              </div>
              
              <div className="project-info-right">
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
