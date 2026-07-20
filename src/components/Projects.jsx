import { featuredProjects, githubProjects } from "../data/projects";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <section className="section work-section" id="work">
      <div className="container">
        <div className="section-heading section-heading-inline work-heading">
          <div>
            <span className="section-number">04</span>
            <p>Selected work</p>
          </div>
          <h2>Built to solve something,<br />not just show something.</h2>
          <p className="heading-note">Recent projects with a focus on real workflows, not isolated demos.</p>
        </div>

        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <article className={`featured-project accent-${project.accent}`} key={project.title}>
              <div className="project-visual">
                <div className="visual-topbar">
                  <span><i /><i /><i /></span>
                  <b>CASE STUDY / 0{index + 1}</b>
                </div>
                <div className="visual-center">
                  <span className="visual-type">{project.type}</span>
                  <strong>{project.title}</strong>
                  <div className="project-flow" aria-label={`${project.title} technical flow`}>
                    {project.flow.map((step, flowIndex) => (
                      <span key={step}>
                        <b>{step}</b>
                        {flowIndex < project.flow.length - 1 && <i>→</i>}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="visual-footer">
                  <span>BUILT / {project.year}</span>
                  <span>VIEW ↓</span>
                </div>
              </div>
              <div className="project-main">
                <div className="project-meta-line">
                  <span className="project-type">{project.type}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-detail">
                  <span className="card-kicker">WHY IT MATTERS</span>
                  <p>{project.impact}</p>
                </div>
                <div className="project-tech">
                  {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
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
            </article>
          ))}
        </div>

        <div className="github-callout">
          <div className="github-callout-copy">
            <span className="card-kicker">THE GITHUB LAB</span>
            <h3>More systems,<br />experiments &amp; builds.</h3>
            <p>
              The portfolio is intentionally selective. GitHub holds the wider trail -
              automation, semantic search, full-stack products, and ideas in progress.
            </p>
            <a href="https://github.com/Psanjay-15?tab=repositories" target="_blank" rel="noreferrer">
              Browse 20+ public repositories <FiArrowUpRight />
            </a>
          </div>

          <div className="github-project-list">
            {githubProjects.map((project, index) => (
              <a href={project.github} target="_blank" rel="noreferrer" key={project.title}>
                <span className="github-project-number">0{index + 1}</span>
                <div>
                  <span className="github-language"><i /> {project.language}</span>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
                <FiArrowUpRight />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
