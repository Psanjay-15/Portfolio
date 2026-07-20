import { FiArrowUpRight, FiBookOpen, FiCrosshair, FiLayers } from "react-icons/fi";

const About = () => {
  return (
    <section className="section container" id="about">
      <div className="section-heading">
        <span className="section-number">01</span>
        <p>About</p>
        <h2>Product thinking.<br />Systems depth.</h2>
      </div>

      <div className="about-grid">
        <div className="about-story">
          <p className="lead-copy">
            I make technically complex products feel simple, reliable, and ready
            for real users.
          </p>
          <p>
            My work covers API architecture, databases, AI retrieval, real-time
            communication, cloud deployment, and the frontend integration needed
            to turn those pieces into a complete product.
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
