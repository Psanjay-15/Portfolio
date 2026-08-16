import { FiCheck } from "react-icons/fi";
import styled from "styled-components";

const Section = styled.section`
  width: var(--container);
  display: grid;
  grid-template-columns: minmax(170px, 0.32fr) minmax(0, 1fr);
  gap: clamp(40px, 8vw, 112px);
  margin-inline: auto;
  padding: var(--section-space) 0;
  border-bottom: 1px solid var(--line);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const SectionIntro = styled.div``;

const Eyebrow = styled.p`
  margin: 0;
  color: var(--accent);
  font:
    600 13px/1 "DM Mono",
    monospace;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const SectionNumber = styled.span`
  display: block;
  margin-top: 18px;
  color: var(--subtle);
  font:
    500 12px/1 "DM Mono",
    monospace;
`;

const Content = styled.div``;

const Title = styled.h2`
  max-width: 810px;
  margin: 0;
  font-size: clamp(38px, 5vw, 66px);
  line-height: 1.08;
  letter-spacing: -0.058em;
  font-weight: 620;
`;

const ExperiencePanel = styled.article`
  margin-top: 62px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
`;

const CompanyHeader = styled.header`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 30px;
  align-items: start;
  padding: 32px;
  border-bottom: 1px solid var(--line);

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    padding: 25px 21px;
  }
`;

const CompanyKicker = styled.span`
  color: var(--subtle);
  font:
    500 10px/1.4 "DM Mono",
    monospace;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const CompanyName = styled.h3`
  margin: 10px 0 7px;
  font-size: 31px;
  letter-spacing: -0.045em;
`;

const CompanyDescription = styled.p`
  max-width: 610px;
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.7;
`;

const CompanyMeta = styled.div`
  color: var(--muted);
  font:
    500 10px/1.75 "DM Mono",
    monospace;
  letter-spacing: 0.06em;
  text-align: right;
  text-transform: uppercase;

  strong {
    display: block;
    margin-top: 7px;
    color: var(--text);
    font-size: 11px;
  }

  @media (max-width: 620px) {
    text-align: left;
  }
`;

const ExperienceRole = styled.section`
  padding: 34px 32px 38px;

  & + & {
    border-top: 1px solid var(--line);
  }

  @media (max-width: 620px) {
    padding: 28px 21px 31px;
  }
`;

const RoleHeader = styled.header`
  display: grid;
  grid-template-columns: minmax(210px, 0.45fr) minmax(0, 1fr);
  gap: 34px;
  align-items: end;
  margin-bottom: 27px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const RolePeriod = styled.span`
  color: var(--subtle);
  font:
    500 10px/1 "DM Mono",
    monospace;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const RoleTitle = styled.h4`
  margin: 11px 0 0;
  font-size: 25px;
  line-height: 1.2;
  letter-spacing: -0.035em;
`;

const RoleDescription = styled.p`
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.7;
`;

const RoleList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const RoleItem = styled.li`
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 11px;
  padding: 17px;
  border: 1px solid var(--line);
  border-radius: 9px;
  color: var(--muted);
  background: rgba(255, 255, 255, 0.015);
  font-size: 13px;
  line-height: 1.62;

  svg {
    margin-top: 3px;
    color: var(--accent);
  }
`;

const roles = [
  {
    title: "Software Engineer",
    period: "Jun 2025 — May 2026",
    description:
      "Owned end-to-end feature delivery, intelligent workflows, and production infrastructure for a healthcare SaaS platform.",
    bullets: [
      "Built and shipped production-grade features using Node.js, Express.js, MongoDB, and React.js, owning API design, data flow, validation, and UI-backend integration.",
      "Designed APIs with authentication, authorization, pagination, filtering, validation, and structured error handling.",
      "Architected a video RAG workflow covering ingestion, transcription, chunking, embeddings, and searchable vector context.",
      "Built retrieval flows that grounded LLM answers in relevant transcript context and returned references to the source material.",
      "Linked generated answers to the relevant video segments so users could open and play the cited source directly.",
      "Configured multi-region database read replicas, routing reads to the nearest region while writes continued to the primary database.",
      "Implemented latency-based routing with Azure Front Door so users connected to the nearest available backend deployment.",
      "Deployed and monitored containerized services across AWS ECS/ECR and Azure Container Apps/ACR using Docker.",
      "Implemented notification and email workflows with AWS SQS, AWS SES, and Azure Communication Services.",
      "Improved database performance with indexes and optimized response patterns for frequently accessed and search endpoints.",
      "Automated development, staging, and production releases through GitHub Actions-based CI/CD workflows.",
      "Load-tested APIs with Apache JMeter to validate concurrent workloads and identify scalability bottlenecks.",
    ],
  },
  {
    title: "Software Engineer Intern",
    period: "Dec 2024 — May 2025",
    description:
      "Contributed across full-stack product development, API integration, cloud delivery, and production debugging.",
    bullets: [
      "Built and improved product features using React.js, Node.js, Express.js, and MongoDB.",
      "Developed REST endpoints for product workflows, including request handling, database operations, validation, and frontend integration.",
      "Assisted with cloud deployment and communication workflows using AWS services, GitHub Actions, and Docker.",
      "Debugged frontend-backend integration issues through API responses, logs, environment variables, and deployment configurations.",
    ],
  },
];

const Experience = () => (
  <Section id="experience">
    <SectionIntro>
      <Eyebrow>Experience</Eyebrow>
      <SectionNumber>02 / 04</SectionNumber>
    </SectionIntro>
    <Content>
      <Title>
        End-to-end ownership, intelligent features and production delivery.
      </Title>
      <ExperiencePanel>
        <CompanyHeader>
          <div>
            <CompanyKicker>Healthcare SaaS · Remote</CompanyKicker>
            <CompanyName>i3 Digital Health</CompanyName>
            <CompanyDescription>
              Progressed from intern to software engineer while working across
              product interfaces, APIs, AI retrieval, data, and cloud
              infrastructure.
            </CompanyDescription>
          </div>
          <CompanyMeta>
            Dec 2024 — May 2026
            <strong>1 year 6 months</strong>
          </CompanyMeta>
        </CompanyHeader>

        {roles.map((role) => (
          <ExperienceRole key={role.title}>
            <RoleHeader>
              <div>
                <RolePeriod>{role.period}</RolePeriod>
                <RoleTitle>{role.title}</RoleTitle>
              </div>
              <RoleDescription>{role.description}</RoleDescription>
            </RoleHeader>
            <RoleList>
              {role.bullets.map((bullet) => (
                <RoleItem key={bullet}>
                  <FiCheck />
                  <span>{bullet}</span>
                </RoleItem>
              ))}
            </RoleList>
          </ExperienceRole>
        ))}
      </ExperiencePanel>
    </Content>
  </Section>
);

export default Experience;
