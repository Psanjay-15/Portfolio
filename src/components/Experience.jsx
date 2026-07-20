import { FiBriefcase, FiCheck } from "react-icons/fi";
import styled from "styled-components";

const ExperienceSection = styled.section`
  position: relative;
  padding-top: 140px;
  padding-bottom: 140px;
  color: #f7f4ec;
  background: #161616;

  &::before {
    content: "EXPERIENCE";
    position: absolute;
    top: 38px;
    right: -20px;
    color: rgba(255, 255, 255, 0.035);
    font-size: clamp(90px, 14vw, 200px);
    font-weight: 800;
    letter-spacing: -0.08em;
  }

  @media (max-width: 800px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

const Inner = styled.div`
  width: var(--container);
  margin-inline: auto;
`;

const SectionHeading = styled.div`
  display: grid;
  grid-template-columns: 52px 1fr;
  column-gap: 18px;
  margin-bottom: 72px;

  @media (max-width: 800px) {
    grid-template-columns: 40px 1fr;
    margin-bottom: 48px;
  }
`;

const SectionNumber = styled.span`
  grid-row: 1 / 3;
  padding-top: 5px;
  color: var(--lime);
  font: 500 13px/1 "DM Mono", monospace;
`;

const SectionLabel = styled.p`
  margin: 0 0 15px;
  color: var(--lime);
  font: 600 13px/1 "DM Mono", monospace;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const SectionTitle = styled.h2`
  grid-column: 2;
  margin: 0;
  font-size: clamp(42px, 5.1vw, 70px);
  line-height: 1.02;
  letter-spacing: -0.065em;
  font-weight: 650;

  @media (max-width: 540px) { font-size: 40px; }
`;

const ExperiencePanel = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(260px, 0.34fr) minmax(0, 0.66fr);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 28px;
  background: #202020;

  @media (max-width: 1060px) { grid-template-columns: 1fr; }
`;

const CompanyColumn = styled.div`
  min-height: 520px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 36px;
  background: var(--blue);

  @media (max-width: 1060px) { min-height: 330px; }
  @media (max-width: 540px) { padding: 27px 21px; }
`;

const CompanyMark = styled.div`
  width: 62px;
  height: 62px;
  display: grid;
  place-items: center;
  margin-bottom: 32px;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  font-size: 24px;
`;

const CompanyInfo = styled.div``;

const CardKicker = styled.span`
  color: rgba(255, 255, 255, 0.63);
  font: 500 12px/1.3 "DM Mono", monospace;
  letter-spacing: 0.1em;
`;

const CompanyName = styled.h3`
  margin: 13px 0 6px;
  font-size: 31px;
  letter-spacing: -0.05em;
`;

const CompanyMeta = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
`;

const CompanyTenure = styled.strong`
  display: inline-block;
  margin-top: 18px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.38);
  border-radius: 999px;
  font: 500 11px/1 "DM Mono", monospace;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const CompanyLocation = styled.p`
  margin: 0;
  padding-top: 36px;
  color: rgba(255, 255, 255, 0.7);
  font: 500 11px/1 "DM Mono", monospace;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const ExperienceDetails = styled.div`
  padding: 36px;
  border-left: 1px solid rgba(255, 255, 255, 0.14);

  @media (max-width: 1060px) {
    border-top: 1px solid rgba(255, 255, 255, 0.14);
    border-left: 0;
  }

  @media (max-width: 540px) { padding: 27px 21px; }
`;

const ExperienceRole = styled.article`
  & + & {
    margin-top: 54px;
    padding-top: 48px;
    border-top: 1px solid rgba(255, 255, 255, 0.18);
  }
`;

const RoleHeader = styled.div`
  display: grid;
  grid-template-columns: 0.65fr 1fr;
  gap: 36px;
  align-items: end;
  margin-bottom: 26px;

  @media (max-width: 540px) { grid-template-columns: 1fr; gap: 6px; }
`;

const RolePeriod = styled.span`
  color: #93938d;
  font: 500 11px/1 "DM Mono", monospace;
  letter-spacing: 0.07em;
  text-transform: uppercase;
`;

const RoleTitle = styled.h3`
  margin: 13px 0 10px;
  font-size: 30px;
  letter-spacing: -0.045em;
`;

const RoleDescription = styled.p`
  margin: 0;
  color: #a9a8a2;
  font-size: 15px;
  line-height: 1.65;
`;

const RoleList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 800px) { grid-template-columns: 1fr; }
`;

const RoleItem = styled.li`
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: 11px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.025);
  color: #c2c1ba;
  font-size: 14px;
  line-height: 1.55;

  svg { margin-top: 3px; color: var(--lime); }
`;

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
    <ExperienceSection id="experience">
      <Inner>
        <SectionHeading>
          <SectionNumber>02</SectionNumber>
          <SectionLabel>Experience</SectionLabel>
          <SectionTitle>
            Production work,
            <br />
            not practice projects.
          </SectionTitle>
        </SectionHeading>

        <ExperiencePanel>
          <CompanyColumn>
            <CompanyMark>
              <FiBriefcase />
            </CompanyMark>
            <CompanyInfo>
              <CardKicker>OCT 2024 - MAY 2026</CardKicker>
              <CompanyName>i3 Digital Health</CompanyName>
              <CompanyMeta>Healthcare SaaS · Remote</CompanyMeta>
              <CompanyTenure>1 year 8 months</CompanyTenure>
              <CompanyLocation>India · Remote</CompanyLocation>
            </CompanyInfo>
          </CompanyColumn>

          <ExperienceDetails>
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
          </ExperienceDetails>
        </ExperiencePanel>
      </Inner>
    </ExperienceSection>
  );
};

export default Experience;
