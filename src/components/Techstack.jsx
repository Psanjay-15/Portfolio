import { FiCloud, FiCode, FiCpu, FiDatabase, FiLayout } from "react-icons/fi";
import { Fragment } from "react";
import styled from "styled-components";
import { skillGroups } from "../data/tech.jsx";

const SkillsSection = styled.section`
  width: var(--container);
  margin-inline: auto;
  padding-top: 140px;
  padding-bottom: 140px;

  @media (max-width: 800px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
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
  color: #76746d;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 14px;

  @media (max-width: 800px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 540px) { grid-template-columns: 1fr; }
`;

const SkillGroup = styled.article`
  min-height: ${({ $index }) => ($index >= 3 ? "305px" : "345px")};
  grid-column: span ${({ $index }) => ($index >= 3 ? 3 : 2)};
  display: flex;
  flex-direction: column;
  padding: 27px;
  border: 1.5px solid var(--ink);
  border-radius: 22px;
  color: ${({ $index }) => ($index === 1 ? "white" : "inherit")};
  background: ${({ $index }) =>
    ["var(--white)", "var(--blue)", "var(--lime)", "#ffb99f", "var(--lavender)"][$index]};
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 7px 7px 0 var(--ink);
  }

  @media (max-width: 800px) {
    grid-column: ${({ $index }) => ($index === 4 ? "1 / -1" : "span 1")};
  }

  @media (max-width: 540px) {
    grid-column: auto;
    min-height: 310px;
  }
`;

const SkillGroupTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ $light }) =>
    $light ? "rgba(255, 255, 255, 0.68)" : "rgba(21, 21, 21, 0.58)"};
  font: 500 11px/1 "DM Mono", monospace;

  svg { font-size: 25px; }
`;

const SkillTitle = styled.h3`
  margin: 42px 0 10px;
  font-size: 30px;
  letter-spacing: -0.05em;
`;

const SkillDescription = styled.p`
  max-width: 370px;
  margin: 0;
  color: ${({ $light }) =>
    $light ? "rgba(255, 255, 255, 0.68)" : "#63625d"};
  font-size: 15px;
  line-height: 1.65;
`;

const SkillPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: 28px;
`;

const SkillPill = styled.span`
  padding: 7px 10px;
  border: 1px solid ${({ $light }) =>
    $light ? "rgba(255, 255, 255, 0.34)" : "rgba(21, 21, 21, 0.28)"};
  border-radius: 999px;
  font: 500 11px/1 "DM Mono", monospace;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const ToolMarquee = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 13px;
  margin-top: 18px;
  padding: 18px 22px;
  overflow: hidden;
  border: 1.5px solid var(--ink);
  border-radius: 999px;
  background: var(--ink);
  color: white;
  font: 500 11px/1 "DM Mono", monospace;
  letter-spacing: 0.08em;

  @media (max-width: 800px) {
    justify-content: flex-start;
    gap: 28px;
  }
`;

const ToolName = styled.span`
  @media (max-width: 800px) {
    &:nth-of-type(n + 5) { display: none; }
  }
`;

const ToolDot = styled.i`
  width: 5px;
  height: 5px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: var(--lime);

  @media (max-width: 800px) {
    &:nth-of-type(n + 5) { display: none; }
  }
`;

const icons = [FiCode, FiCpu, FiDatabase, FiCloud, FiLayout];
const tools = ["NODE.JS", "FASTAPI", "LANGGRAPH", "POSTGRESQL", "AWS", "AZURE", "DOCKER"];

const Techstack = () => (
  <SkillsSection id="skills">
    <SectionHeading>
      <HeadingIntro>
        <SectionNumber>03</SectionNumber>
        <SectionLabel>Capabilities</SectionLabel>
      </HeadingIntro>
      <SectionTitle>The stack changes.<br />The thinking stays.</SectionTitle>
      <HeadingNote>Selected from production experience and recent AI work.</HeadingNote>
    </SectionHeading>

    <SkillsGrid>
      {skillGroups.map((group, index) => {
        const Icon = icons[index];
        const light = index === 1;
        return (
          <SkillGroup $index={index} key={group.title}>
            <SkillGroupTop $light={light}>
              <span>{group.number}</span>
              <Icon />
            </SkillGroupTop>
            <SkillTitle>{group.title}</SkillTitle>
            <SkillDescription $light={light}>{group.description}</SkillDescription>
            <SkillPills>
              {group.skills.map((skill) => (
                <SkillPill $light={light} key={skill}>{skill}</SkillPill>
              ))}
            </SkillPills>
          </SkillGroup>
        );
      })}
    </SkillsGrid>

    <ToolMarquee aria-label="Highlighted technologies">
      {tools.map((tool, index) => (
        <Fragment key={tool}>
          <ToolName>{tool}</ToolName>
          {index < tools.length - 1 && <ToolDot />}
        </Fragment>
      ))}
    </ToolMarquee>
  </SkillsSection>
);

export default Techstack;
