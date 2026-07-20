import { FiBriefcase, FiCheck } from "react-icons/fi";

const roles = [
  {
    title: "Software Engineer",
    period: "Jun 2025 - May 2026",
    description:
      "Owned backend-heavy product features and production infrastructure for a healthcare SaaS platform.",
  },
  {
    title: "SDE Intern",
    period: "Oct 2024 - May 2025",
    description:
      "Built full-stack product workflows, REST endpoints, and deployment integrations across the platform.",
  },
];

const highlights = [
  "Designed REST APIs with authentication, authorization, pagination, filtering, validation, and structured errors.",
  "Built a video RAG workflow spanning transcripts, chunking, embeddings, vector retrieval, LLM answers, and cited video sources.",
  "Configured multi-region read replicas and latency-based routing to serve users from the nearest backend region.",
  "Shipped on AWS and Azure with ECS, ECR, Container Apps, ACR, Front Door, Docker, and GitHub Actions.",
  "Optimized indexed database queries and load-tested critical APIs with Apache JMeter to uncover scalability bottlenecks.",
];

const Experience = () => {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-heading section-heading-light">
          <span className="section-number">02</span>
          <p>Experience</p>
          <h2>Shipping systems used<br />in the real world.</h2>
        </div>

        <div className="experience-panel">
          <div className="company-column">
            <div className="company-mark"><FiBriefcase /></div>
            <div>
              <span className="card-kicker">OCT 2024 - MAY 2026</span>
              <h3>i3 Digital Health</h3>
              <p>Healthcare SaaS · Remote</p>
            </div>
            <span className="company-location">India · Remote</span>
          </div>

          <div className="role-column">
            {roles.map((role) => (
              <article className="role" key={role.title}>
                <div className="role-marker" />
                <span>{role.period}</span>
                <h3>{role.title}</h3>
                <p>{role.description}</p>
              </article>
            ))}
          </div>

          <div className="impact-column">
            <span className="card-kicker">SELECTED IMPACT</span>
            <ul>
              {highlights.map((highlight) => (
                <li key={highlight}><FiCheck /> <span>{highlight}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
