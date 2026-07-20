import { FiArrowUpRight, FiBookOpen, FiCrosshair, FiLayers } from "react-icons/fi";

const About = () => {
  return (
    <section className="section container" id="about">
      <div className="section-heading">
        <span className="section-number">01</span>
        <p>About</p>
        <h2>Engineering with intent,<br />not just implementation.</h2>
      </div>

      <div className="about-grid">
        <div className="about-story">
          <p className="lead-copy">
            I turn complex product problems into secure, scalable systems - from API
            design and data models to retrieval pipelines and cloud deployment.
          </p>
          <p>
            My work sits at the intersection of backend engineering and applied AI.
            I care about the details that make software dependable: clean interfaces,
            fast queries, observable deployments, grounded AI answers, and thoughtful
            user-facing integration.
          </p>
          <p>
            I can own backend-heavy features end to end while collaborating comfortably
            across React frontends, infrastructure, and product workflows.
          </p>
          <a className="text-link" href="mailto:panderesanjay26@gmail.com">
            Tell me what you&apos;re building <FiArrowUpRight />
          </a>
        </div>

        <div className="about-cards">
          <article className="info-card info-card-accent">
            <FiCrosshair className="info-icon" />
            <span className="card-kicker">CURRENT DIRECTION</span>
            <h3>Reliable AI, beyond the prototype</h3>
            <p>Building production-ready RAG, agentic, and AI search workflows on dependable backend foundations.</p>
            <div className="tag-row">
              <span>RAG</span><span>Agents</span><span>Vector search</span>
            </div>
          </article>

          <article className="info-card">
            <FiLayers className="info-icon" />
            <span className="card-kicker">HOW I WORK</span>
            <h3>System-first thinking</h3>
            <p>Design the interfaces, data flow, failure paths, and deployment story before adding unnecessary complexity.</p>
          </article>

          <article className="info-card education-card">
            <FiBookOpen className="info-icon" />
            <span className="card-kicker">EDUCATION</span>
            <h3>B.Tech. Computer Engineering</h3>
            <p>Pillai College of Engineering · 2025</p>
            <strong>8.85 CGPI</strong>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
