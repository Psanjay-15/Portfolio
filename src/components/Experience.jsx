import { FiBriefcase, FiCheck } from "react-icons/fi";

const roles = [
  {
    title: "Software Engineer",
    period: "Jun 2025 - May 2026",
    description:
      "Owned backend feature delivery and production infrastructure for a healthcare SaaS platform.",
    bullets: [
      "Built and shipped backend-heavy features using Node.js, Express.js, MongoDB, and React.js, owning API design, data flow, validation, and UI-backend integration.",
      "Designed production REST APIs with authentication, authorization, pagination, filtering, validation, and structured error handling.",
      "Worked on an AI video search and video RAG workflow that ingested videos, extracted transcripts, chunked content, generated embeddings, and stored searchable context in a vector database.",
      "Built retrieval flows that fetched relevant transcript context, passed grounded context to an LLM, and generated answers with source references.",
      "Returned relevant video URLs with generated answers so users could open and play the cited source directly.",
      "Configured multi-region database read replicas, routing reads to the nearest region while writes continued to the primary database.",
      "Implemented latency-based routing with Azure Front Door so users connected to the nearest deployed backend service.",
      "Deployed and monitored services across AWS and Azure using ECS, ECR, Azure Container Apps, ACR, Front Door, and Docker.",
      "Implemented notification and communication workflows using AWS SQS, SES, and Azure communication services for alerts and emails.",
      "Optimized database queries with indexes and improved response patterns for frequently accessed content and search APIs.",
      "Automated deployments through CI/CD workflows using GitHub Actions.",
      "Load-tested backend APIs with Apache JMeter to validate concurrency behavior and identify scalability bottlenecks.",
    ],
  },
  {
    title: "SDE Intern",
    period: "Oct 2024 - May 2025",
    description:
      "Contributed across product development, API integration, cloud workflows, and production debugging.",
    bullets: [
      "Built and improved product features using React.js, Node.js, Express.js, and MongoDB.",
      "Developed REST API endpoints for product workflows, including request handling, database operations, validation, and frontend integration.",
      "Assisted with cloud deployment and communication workflows using AWS services, GitHub Actions, and Docker.",
      "Debugged frontend-backend integration issues by inspecting API responses, logs, environment variables, and deployment configurations.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-heading section-heading-light">
          <span className="section-number">02</span>
          <p>Experience</p>
          <h2>Production work,<br />not practice projects.</h2>
        </div>

        <div className="experience-panel">
          <div className="company-column">
            <div className="company-mark"><FiBriefcase /></div>
            <div>
              <span className="card-kicker">OCT 2024 - MAY 2026</span>
              <h3>i3 Digital Health</h3>
              <p>Healthcare SaaS · Remote</p>
              <strong className="company-tenure">1 year 8 months</strong>
            </div>
            <span className="company-location">India · Remote</span>
          </div>

          <div className="experience-details">
            {roles.map((role) => (
              <article className="experience-role" key={role.title}>
                <div className="experience-role-header">
                  <div>
                    <span>{role.period}</span>
                    <h3>{role.title}</h3>
                  </div>
                  <p>{role.description}</p>
                </div>
                <ul>
                  {role.bullets.map((bullet) => (
                    <li key={bullet}><FiCheck /><span>{bullet}</span></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
