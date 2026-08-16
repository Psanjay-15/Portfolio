import { FiArrowUpRight } from "react-icons/fi";
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
  max-width: 870px;
  margin: 0;
  font-size: clamp(38px, 5vw, 66px);
  line-height: 1.08;
  letter-spacing: -0.058em;
  font-weight: 620;
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(300px, 1.1fr);
  gap: clamp(44px, 7vw, 92px);
  margin-top: 62px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Story = styled.div`
  color: var(--muted);
  font-size: 16px;
  line-height: 1.8;

  p {
    margin: 0 0 20px;
  }
`;

const TextLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  color: var(--text);
  font-size: 13px;
  font-weight: 700;

  &:hover {
    color: var(--accent);
  }
`;

const Principles = styled.div`
  border-top: 1px solid var(--line-strong);
`;

const Principle = styled.article`
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 14px;
  padding: 22px 0;
  border-bottom: 1px solid var(--line);
`;

const PrincipleNumber = styled.span`
  padding-top: 3px;
  color: var(--subtle);
  font:
    500 10px/1 "DM Mono",
    monospace;
`;

const PrincipleTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 17px;
  letter-spacing: -0.02em;
`;

const PrincipleText = styled.p`
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.65;
`;

const Education = styled.article`
  display: grid;
  grid-template-columns: 130px minmax(0, 1fr) auto;
  gap: 30px;
  align-items: center;
  margin-top: 48px;
  padding: 30px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

const EducationLabel = styled.span`
  color: var(--subtle);
  font:
    500 10px/1.5 "DM Mono",
    monospace;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const EducationText = styled.p`
  margin: 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.7;

  strong {
    display: block;
    margin-bottom: 7px;
    color: var(--text);
    font-size: clamp(21px, 2.4vw, 28px);
    line-height: 1.2;
    letter-spacing: -0.035em;
  }
`;

const EducationScore = styled.div`
  min-width: 110px;
  padding-left: 28px;
  border-left: 1px solid var(--line);
  text-align: right;

  strong {
    display: block;
    font-size: 25px;
    letter-spacing: -0.04em;
  }

  span {
    display: block;
    margin-top: 7px;
    color: var(--subtle);
    font:
      500 10px/1 "DM Mono",
      monospace;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  @media (max-width: 680px) {
    padding-top: 18px;
    padding-left: 0;
    border-top: 1px solid var(--line);
    border-left: 0;
    text-align: left;
  }
`;

const focusAreas = [
  {
    title: "Product foundations",
    text: "Clear interfaces, reliable APIs, thoughtful data models, authorization, and real-time services give every feature a dependable base.",
  },
  {
    title: "Intelligent workflows",
    text: "When AI fits the problem, I build RAG and agent workflows around grounding, explicit controls, human review, and observable decisions.",
  },
  {
    title: "End-to-end delivery",
    text: "I can carry a feature across React interfaces, backend services, Docker, CI/CD, and production deployment on AWS or Azure.",
  },
];

const About = () => (
  <Section id="about">
    <SectionIntro>
      <Eyebrow>About</Eyebrow>
      <SectionNumber>01 / 04</SectionNumber>
    </SectionIntro>
    <Content>
      <Title>I understand products by building across the entire stack.</Title>
      <StoryGrid>
        <Story>
          <p>
            My work spans product interfaces, APIs, databases, real-time
            communication, and cloud infrastructure. Working across those
            layers helps me understand a feature as one complete system—not a
            collection of disconnected parts.
          </p>
          <p>
            Applied AI is part of that toolkit. I use retrieval and agentic
            workflows when they solve a real product problem, supported by the
            software engineering needed to make them reliable in production.
          </p>
          <TextLink href="mailto:panderesanjay26@gmail.com">
            Tell me what you&apos;re building <FiArrowUpRight />
          </TextLink>
        </Story>
        <Principles>
          {focusAreas.map((focusArea, index) => (
            <Principle key={focusArea.title}>
              <PrincipleNumber>0{index + 1}</PrincipleNumber>
              <div>
                <PrincipleTitle>{focusArea.title}</PrincipleTitle>
                <PrincipleText>{focusArea.text}</PrincipleText>
              </div>
            </Principle>
          ))}
        </Principles>
      </StoryGrid>
      <Education>
        <EducationLabel>Education</EducationLabel>
        <EducationText>
          <strong>B.Tech in Computer Engineering</strong>
          Pillai College of Engineering · Graduated 2025
        </EducationText>
        <EducationScore>
          <strong>8.85 / 10</strong>
          <span>CGPA</span>
        </EducationScore>
      </Education>
    </Content>
  </Section>
);

export default About;
