import { additionalProjects, featuredProjects } from "../data/projects";
import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <section className="section work-section" id="work">
      <div className="container">
        <div className="section-heading section-heading-inline work-heading">
          <div>
            <span className="section-number">04</span>
            <p>Selected work</p>
          </div>
          <h2>Products where engineering<br />meets useful AI.</h2>
          <p className="heading-note">Recent projects with a focus on real workflows, not isolated demos.</p>
        </div>

        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <article className={`featured-project accent-${project.accent}`} key={project.title}>
              <div className="project-index">0{index + 1}</div>
              <div className="project-main">
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  {project.deployed && (
                    <a href={project.deployed} target="_blank" rel="noreferrer">
                      Live project <FiArrowUpRight />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      Source code <FiGithub />
                    </a>
                  )}
                </div>
              </div>
              <div className="project-detail">
                <span className="card-kicker">ENGINEERING NOTE</span>
                <p>{project.impact}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="archive-heading">
          <h3>More builds</h3>
          <span>Earlier full-stack work</span>
        </div>
        <div className="project-archive">
          {additionalProjects.map((project) => (
            <article className="archive-card" key={project.title}>
              <div className="archive-image">
                <img src={project.image} alt={`${project.title} interface`} />
                <div className="archive-links">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`}><FiGithub /></a>}
                  {project.deployed && <a href={project.deployed} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><FiExternalLink /></a>}
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech archive-tech">
                {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
