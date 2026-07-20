import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import styled from "styled-components";
import { featuredProjects } from "../data/projects";

const WorkSection = styled.section`
  padding-top: 140px;
  padding-bottom: 140px;
  color: var(--ink);
  background: #eeecf4;

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
  grid-template-columns: 0.62fr 1.38fr 0.7fr;
  align-items: end;
  column-gap: 18px;
  margin-bottom: 72px;

  @media (max-width: 1060px) { grid-template-columns: 0.62fr 1.38fr; }

  @media (max-width: 800px) {
    grid-template-columns: 40px 1fr;
    margin-bottom: 48px;
  }
`;

const HeadingIntro = styled.div`
  display: grid;
  grid-template-columns: 52px 1fr;
  column-gap: 18px;
  align-self: start;

  @media (max-width: 800px) {
    grid-column: 1 / -1;
    grid-template-columns: 40px 1fr;
  }
`;

const SectionNumber = styled.span`
  padding-top: 5px;
  color: var(--blue);
  font: 500 13px/1 "DM Mono", monospace;
`;

const SectionLabel = styled.p`
  margin: 0 0 15px;
  color: var(--blue);
  font: 600 13px/1 "DM Mono", monospace;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: clamp(42px, 5.1vw, 70px);
  line-height: 1.02;
  letter-spacing: -0.065em;
  font-weight: 650;

  @media (max-width: 800px) { grid-column: 2; }
  @media (max-width: 540px) { font-size: 40px; }
`;

const HeadingNote = styled.p`
  margin: 0;
  color: #76756e;
  font: 500 14px/1.65 "DM Mono", monospace;

  @media (max-width: 1060px) { display: none; }
`;

const FeaturedProjects = styled.div`
  display: grid;
  gap: 30px;
`;

const FeaturedProject = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1.22fr) minmax(330px, 0.78fr);
  gap: clamp(38px, 6vw, 84px);
  align-items: center;
  padding: 22px;
  border: 1.5px solid var(--ink);
  border-radius: 30px;
  background: var(--paper);
  box-shadow: 9px 9px 0 var(--ink);

  @media (max-width: 1060px) {
    grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr);
    gap: 34px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  @media (max-width: 540px) {
    padding: 10px;
    border-radius: 22px;
    box-shadow: 6px 6px 0 var(--ink);
  }
`;

const accentColors = {
  lime: "#c8d7a2",
  violet: "#c7c0dd",
  blue: "#526aa5",
  orange: "#d78970",
  pink: "#dca9bb",
};

const ProjectVisual = styled.div`
  min-height: 490px;
  order: ${({ $even }) => ($even ? 2 : 0)};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1.5px solid var(--ink);
  border-radius: 22px;
  color: ${({ $accent }) => ($accent === "blue" ? "white" : "inherit")};
  background: ${({ $accent }) => accentColors[$accent] || "var(--lime)"};

  @media (max-width: 1060px) { min-height: 440px; }
  @media (max-width: 800px) { min-height: 460px; order: 0; }
  @media (max-width: 540px) { min-height: 390px; }
`;

const VisualBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 20px;
  border-bottom: 1px solid currentColor;
  font: 500 11px/1 "DM Mono", monospace;
  letter-spacing: 0.07em;
`;

const WindowDots = styled.span`
  display: flex;
  gap: 5px;
`;

const WindowDot = styled.i`
  width: 7px;
  height: 7px;
  border: 1px solid currentColor;
  border-radius: 50%;
`;

const VisualCenter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(28px, 5vw, 58px);

  @media (max-width: 540px) { padding: 28px 20px; }
`;

const VisualType = styled.span`
  font: 500 12px/1 "DM Mono", monospace;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const VisualTitle = styled.strong`
  max-width: 520px;
  margin-top: 14px;
  font-size: clamp(49px, 6vw, 82px);
  line-height: 0.95;
  letter-spacing: -0.075em;
  font-weight: 700;

  @media (max-width: 540px) { font-size: 50px; }
`;

const ProjectFlow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 7px;
  margin-top: 46px;

  @media (max-width: 540px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 35px;
  }
`;

const FlowStep = styled.span`
  position: relative;
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 4px;
  border: 1px solid currentColor;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.24);
  text-align: center;
`;

const FlowLabel = styled.b`
  font: 600 10px/1.35 "DM Mono", monospace;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const FlowArrow = styled.i`
  position: absolute;
  right: -10px;
  z-index: 2;
  width: 13px;
  height: 20px;
  display: grid;
  place-items: center;
  background: inherit;
  font: normal 500 11px/1 "DM Mono", monospace;

  @media (max-width: 540px) { display: none; }
`;

const VisualFooter = styled(VisualBar)`
  border-top: 1px solid currentColor;
  border-bottom: 0;
`;

const ProjectMain = styled.div`
  padding: ${({ $even }) => ($even ? "28px 0 28px 30px" : "28px 30px 28px 0")};

  @media (max-width: 800px) { padding: 34px 20px 24px; }
`;

const ProjectMetaLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const ProjectMeta = styled.span`
  color: #68675f;
  font: 600 11px/1 "DM Mono", monospace;
  letter-spacing: 0.07em;
  text-transform: uppercase;
`;

const ProjectTitle = styled.h3`
  margin: 17px 0 16px;
  font-size: clamp(39px, 4vw, 57px);
  line-height: 1;
  letter-spacing: -0.065em;
`;

const ProjectDescription = styled.p`
  margin: 0;
  color: #5f5e58;
  font-size: 16px;
  line-height: 1.7;
`;

const ProjectDetail = styled.div`
  margin-top: 24px;
  padding: 19px 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
`;

const CardKicker = styled.span`
  color: rgba(21, 21, 21, 0.57);
  font: 500 12px/1.3 "DM Mono", monospace;
  letter-spacing: 0.1em;
`;

const DetailText = styled.p`
  margin: 10px 0 0;
  color: #4f4f49;
  font-size: 15px;
  line-height: 1.65;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 20px;
`;

const TechPill = styled.span`
  padding: 7px 10px;
  border: 1px solid rgba(21, 21, 21, 0.22);
  border-radius: 999px;
  color: #51514b;
  font: 500 11px/1 "DM Mono", monospace;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
`;

const ProjectLink = styled.a`
  min-height: 43px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 0 14px;
  border: 1px solid var(--ink);
  border-radius: 999px;
  background: var(--white);
  font-size: 13px;
  font-weight: 800;
  transition: background 180ms ease, color 180ms ease;

  &:hover { color: white; background: var(--blue); }
`;

const Projects = () => (
  <WorkSection id="work">
    <Inner>
      <SectionHeading>
        <HeadingIntro>
          <SectionNumber>04</SectionNumber>
          <SectionLabel>Selected work</SectionLabel>
        </HeadingIntro>
        <SectionTitle>
          Built to solve something,
          <br />
          not just show something.
        </SectionTitle>
        <HeadingNote>
          Recent projects with a focus on real workflows, not isolated demos.
        </HeadingNote>
      </SectionHeading>

      <FeaturedProjects>
        {featuredProjects.map((project, index) => {
          const even = (index + 1) % 2 === 0;
          return (
            <FeaturedProject key={project.title}>
              <ProjectVisual $accent={project.accent} $even={even}>
                <VisualBar>
                  <WindowDots>
                    <WindowDot />
                    <WindowDot />
                    <WindowDot />
                  </WindowDots>
                  <b>CASE STUDY / 0{index + 1}</b>
                </VisualBar>
                <VisualCenter>
                  <VisualType>{project.type}</VisualType>
                  <VisualTitle>{project.title}</VisualTitle>
                  <ProjectFlow aria-label={`${project.title} technical flow`}>
                    {project.flow.map((step, flowIndex) => (
                      <FlowStep key={step}>
                        <FlowLabel>{step}</FlowLabel>
                        {flowIndex < project.flow.length - 1 && <FlowArrow>→</FlowArrow>}
                      </FlowStep>
                    ))}
                  </ProjectFlow>
                </VisualCenter>
                <VisualFooter>
                  <span>BUILT / {project.year}</span>
                  <span>VIEW ↓</span>
                </VisualFooter>
              </ProjectVisual>

              <ProjectMain $even={even}>
                <ProjectMetaLine>
                  <ProjectMeta>{project.type}</ProjectMeta>
                  <ProjectMeta>{project.year}</ProjectMeta>
                </ProjectMetaLine>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectDetail>
                  <CardKicker>WHY IT MATTERS</CardKicker>
                  <DetailText>{project.impact}</DetailText>
                </ProjectDetail>
                <ProjectTech>
                  {project.technologies.map((tech) => (
                    <TechPill key={tech}>{tech}</TechPill>
                  ))}
                </ProjectTech>
                <ProjectLinks>
                  {project.deployed && (
                    <ProjectLink href={project.deployed} target="_blank" rel="noreferrer">
                      Live project <FiArrowUpRight />
                    </ProjectLink>
                  )}
                  {project.github && (
                    <ProjectLink href={project.github} target="_blank" rel="noreferrer">
                      Source code <FiGithub />
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectMain>
            </FeaturedProject>
          );
        })}
      </FeaturedProjects>
    </Inner>
  </WorkSection>
);

export default Projects;
