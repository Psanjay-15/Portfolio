import styled from "styled-components";
import { skillGroups } from "../data/tech.jsx";

const Section = styled.section`
  width: var(--container);
  display: grid;
  grid-template-columns: minmax(170px, 0.32fr) minmax(0, 1fr);
  gap: clamp(40px, 8vw, 112px);
  margin-inline: auto;
  padding: var(--section-space) 0;

  @media (max-width: 760px) { grid-template-columns: 1fr; }
`;

const SectionIntro = styled.div``;

const Eyebrow = styled.p`
  margin: 0;
  color: var(--accent);
  font: 600 13px/1 "DM Mono", monospace;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const SectionNumber = styled.span`
  display: block;
  margin-top: 18px;
  color: var(--subtle);
  font: 500 12px/1 "DM Mono", monospace;
`;

const Content = styled.div``;

const Title = styled.h2`
  max-width: 790px;
  margin: 0;
  font-size: clamp(38px, 5vw, 66px);
  line-height: 1.08;
  letter-spacing: -0.058em;
  font-weight: 620;
`;

const Intro = styled.p`
  max-width: 650px;
  margin: 24px 0 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.75;
`;

const SkillList = styled.div`
  margin-top: 62px;
  border-top: 1px solid var(--line-strong);
`;

const SkillRow = styled.article`
  display: grid;
  grid-template-columns: 42px minmax(180px, 0.55fr) minmax(0, 1fr);
  gap: 18px;
  padding: 25px 0;
  border-bottom: 1px solid var(--line);

  @media (max-width: 700px) {
    grid-template-columns: 34px 1fr;
  }
`;

const SkillNumber = styled.span`
  padding-top: 5px;
  color: var(--subtle);
  font: 500 10px/1 "DM Mono", monospace;
`;

const SkillTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 18px;
  letter-spacing: -0.025em;
`;

const SkillDescription = styled.p`
  margin: 0;
  color: var(--subtle);
  font-size: 13px;
  line-height: 1.6;
`;

const SkillNames = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 7px;

  @media (max-width: 700px) { grid-column: 2; margin-top: 8px; }
`;

const SkillName = styled.span`
  padding: 9px 11px;
  border: 1px solid var(--line);
  border-radius: 6px;
  color: var(--muted);
  font: 500 12px/1 "DM Mono", monospace;
`;

const Techstack = () => (
  <Section id="skills">
    <SectionIntro>
      <Eyebrow>Capabilities</Eyebrow>
      <SectionNumber>03 / 04</SectionNumber>
    </SectionIntro>
    <Content>
      <Title>Tools change. Engineering judgment compounds.</Title>
      <Intro>
        I choose technologies around the system&apos;s constraints, then learn the
        operational details required to make the result dependable.
      </Intro>
      <SkillList>
        {skillGroups.map((group) => (
          <SkillRow key={group.title}>
            <SkillNumber>{group.number}</SkillNumber>
            <div>
              <SkillTitle>{group.title}</SkillTitle>
              <SkillDescription>{group.description}</SkillDescription>
            </div>
            <SkillNames>
              {group.skills.map((skill) => (
                <SkillName key={skill}>{skill}</SkillName>
              ))}
            </SkillNames>
          </SkillRow>
        ))}
      </SkillList>
    </Content>
  </Section>
);

export default Techstack;
