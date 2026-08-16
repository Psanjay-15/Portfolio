import { FiArrowUpRight, FiGithub, FiPlay } from "react-icons/fi";
import styled from "styled-components";
import { featuredProjects } from "../data/projects";

const WorkSection = styled.section`
  padding: var(--section-space) 0;
  border-top: 1px solid var(--line);
  background: var(--surface);
`;

const Inner = styled.div`
  width: var(--container);
  margin-inline: auto;
`;

const Heading = styled.div`
  display: grid;
  grid-template-columns: minmax(170px, 0.32fr) minmax(0, 1fr);
  gap: clamp(40px, 8vw, 112px);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

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

const Title = styled.h2`
  max-width: 790px;
  margin: 0;
  font-size: clamp(38px, 5vw, 66px);
  line-height: 1.08;
  letter-spacing: -0.058em;
  font-weight: 620;
`;

const HeadingNote = styled.p`
  max-width: 620px;
  margin: 24px 0 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.75;
`;

const ProjectList = styled.div`
  margin-top: 70px;
  border-top: 1px solid var(--line-strong);
`;

const Project = styled.article`
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr) minmax(220px, 0.36fr);
  gap: 30px;
  padding: 38px 0;
  border-bottom: 1px solid var(--line);

  ${({ $featured }) =>
    $featured &&
    `
    margin-inline: -22px;
    padding-inline: 22px;
    background: rgba(194, 204, 192, 0.035);
  `}

  @media (max-width: 820px) {
    grid-template-columns: 38px 1fr;
  }

  @media (max-width: 540px) {
    gap: 18px;
    ${({ $featured }) =>
      $featured && `margin-inline: -12px; padding-inline: 12px;`}
  }
`;

const ProjectIndex = styled.span`
  padding-top: 7px;
  color: var(--subtle);
  font:
    500 10px/1 "DM Mono",
    monospace;
`;

const ProjectMain = styled.div``;

const ProjectMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 18px;
  color: var(--subtle);
  font:
    500 10px/1.4 "DM Mono",
    monospace;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const ProjectTitle = styled.h3`
  margin: 13px 0 14px;
  font-size: clamp(30px, 3.2vw, 45px);
  line-height: 1.08;
  letter-spacing: -0.05em;
`;

const ProjectDescription = styled.p`
  max-width: 680px;
  margin: 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.72;
`;

const ProjectImpact = styled.p`
  max-width: 680px;
  margin: 18px 0 0;
  padding-left: 14px;
  border-left: 1px solid var(--accent);
  color: var(--subtle);
  font-size: 13px;
  line-height: 1.7;
`;

const Flow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px 12px;
  margin-top: 22px;
  color: var(--muted);
  font:
    500 10px/1.4 "DM Mono",
    monospace;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const FlowStep = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;

  &::after {
    content: "→";
    color: var(--subtle);
  }
  &:last-child::after {
    display: none;
  }
`;

const ProjectSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 820px) {
    grid-column: 2;
  }
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Technology = styled.span`
  padding: 9px 11px;
  border: 1px solid var(--line);
  border-radius: 6px;
  color: var(--muted);
  font:
    500 12px/1 "DM Mono",
    monospace;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px 16px;
  margin-top: auto;
  padding-top: 26px;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--text);
  font-size: 12px;
  font-weight: 700;

  &:hover {
    color: var(--accent);
  }
`;

const Projects = () => (
  <WorkSection id="work">
    <Inner>
      <Heading>
        <div>
          <Eyebrow>Selected work</Eyebrow>
          <SectionNumber>04 / 04</SectionNumber>
        </div>
        <div>
          <Title>Products built from idea to production.</Title>
          <HeadingNote>
            Each project explores a system problem: control, latency, grounding,
            asynchronous work, resilience, or automation.
          </HeadingNote>
        </div>
      </Heading>

      <ProjectList>
        {featuredProjects.map((project, index) => (
          <Project $featured={project.featured} key={project.title}>
            <ProjectIndex>{String(index + 1).padStart(2, "0")}</ProjectIndex>
            <ProjectMain>
              <ProjectMeta>
                <span>{project.type}</span>
                <span>{project.year}</span>
              </ProjectMeta>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectImpact>{project.impact}</ProjectImpact>
              <Flow aria-label={`${project.title} system flow`}>
                {project.flow.map((step) => (
                  <FlowStep key={step}>{step}</FlowStep>
                ))}
              </Flow>
            </ProjectMain>
            <ProjectSide>
              <Technologies>
                {project.technologies.map((technology) => (
                  <Technology key={technology}>{technology}</Technology>
                ))}
              </Technologies>
              <Links>
                {project.demo && (
                  <ProjectLink
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiPlay /> Watch demo
                  </ProjectLink>
                )}
                {project.deployed && (
                  <ProjectLink
                    href={project.deployed}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiArrowUpRight /> Live project
                  </ProjectLink>
                )}
                {project.github && (
                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub /> Source
                  </ProjectLink>
                )}
              </Links>
            </ProjectSide>
          </Project>
        ))}
      </ProjectList>
    </Inner>
  </WorkSection>
);

export default Projects;
