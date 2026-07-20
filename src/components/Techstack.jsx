import { FiCloud, FiCode, FiCpu, FiDatabase, FiLayout } from "react-icons/fi";
import { skillGroups } from "../data/tech.jsx";

const icons = [FiCode, FiCpu, FiDatabase, FiCloud, FiLayout];

const Techstack = () => {
  return (
    <section className="section container" id="skills">
      <div className="section-heading section-heading-inline">
        <div>
          <span className="section-number">03</span>
          <p>Capabilities</p>
        </div>
        <h2>A practical toolkit for<br />building complete systems.</h2>
        <p className="heading-note">Selected from production experience and recent AI work.</p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = icons[index];
          return (
            <article className="skill-group" key={group.title}>
              <div className="skill-group-top">
                <span>{group.number}</span>
                <Icon />
              </div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="skill-pills">
                {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          );
        })}
      </div>

      <div className="tool-marquee" aria-label="Highlighted technologies">
        <span>NODE.JS</span><i />
        <span>FASTAPI</span><i />
        <span>LANGGRAPH</span><i />
        <span>POSTGRESQL</span><i />
        <span>AWS</span><i />
        <span>AZURE</span><i />
        <span>DOCKER</span>
      </div>
    </section>
  );
};

export default Techstack;
