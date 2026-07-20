import {
  FiArrowUpRight,
  FiBookOpen,
  FiCrosshair,
  FiLayers,
} from "react-icons/fi";
import styled from "styled-components";

const AboutSection = styled.section`
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
  grid-column: 2;
  margin: 0;
  font-size: clamp(42px, 5.1vw, 70px);
  line-height: 1.02;
  letter-spacing: -0.065em;
  font-weight: 650;

  @media (max-width: 540px) {
    font-size: 40px;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
  gap: clamp(52px, 8vw, 118px);
  padding-left: 70px;

  @media (max-width: 1060px) {
    gap: 45px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding-left: 0;
  }
`;

const AboutStory = styled.div`
  color: #595953;
  font-size: 17px;
  line-height: 1.8;

  p {
    margin: 0 0 24px;
  }

  @media (max-width: 800px) {
    padding-left: 40px;
  }

  @media (max-width: 540px) {
    padding-left: 0;
  }
`;

const LeadCopy = styled.p`
  color: var(--ink);
  font-size: clamp(24px, 2.6vw, 37px);
  line-height: 1.35;
  letter-spacing: -0.045em;
  font-weight: 600;
`;

const TextLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  padding-bottom: 5px;
  border-bottom: 2px solid var(--blue);
  font-size: 15px;
  font-weight: 800;
`;

const AboutCards = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 14px;

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.article`
  min-height: ${({ $accent }) => ($accent ? "310px" : "270px")};
  grid-column: ${({ $accent }) => ($accent ? "1 / -1" : "auto")};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 28px;
  border: 1.5px solid var(--ink);
  border-radius: 24px;
  color: ${({ $accent }) => ($accent ? "white" : "inherit")};
  background: ${({ $accent, $education }) =>
    $accent ? "var(--blue)" : $education ? "#ffbb9f" : "var(--lime)"};
  box-shadow: 7px 7px 0 var(--ink);

  @media (max-width: 540px) {
    grid-column: auto;
  }
`;

const InfoIcon = styled.div`
  margin-bottom: auto;
  font-size: 28px;
`;

const CardKicker = styled.span`
  color: ${({ $light }) =>
    $light ? "rgba(255, 255, 255, 0.7)" : "rgba(21, 21, 21, 0.57)"};
  font: 500 12px/1.3 "DM Mono", monospace;
  letter-spacing: 0.1em;
`;

const CardTitle = styled.h3`
  margin: 17px 0 10px;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: -0.045em;
`;

const CardText = styled.p`
  margin: 0;
  color: ${({ $light }) => ($light ? "white" : "#585852")};
  font-size: 15px;
  line-height: 1.65;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 20px;
`;

const Tag = styled.span`
  padding: 7px 10px;
  border: 1px solid currentColor;
  border-radius: 999px;
  font: 500 11px/1 "DM Mono", monospace;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const EducationScore = styled.strong`
  margin-top: 18px;
  font: 600 14px/1 "DM Mono", monospace;
`;

const About = () => (
  <AboutSection id="about">
    <SectionHeading>
      <SectionNumber>01</SectionNumber>
      <SectionLabel>About</SectionLabel>
      <SectionTitle>
        Product thinking.
        <br />
        Systems depth.
      </SectionTitle>
    </SectionHeading>

    <AboutGrid>
      <AboutStory>
        <LeadCopy>
          I make technically complex products feel simple, reliable, and ready
          for real users.
        </LeadCopy>
        <p>
          My work covers API architecture, databases, AI retrieval, real-time
          communication, cloud deployment, and the frontend integration needed
          to turn those pieces into a complete product.
        </p>
        <TextLink href="mailto:panderesanjay26@gmail.com">
          Tell me what you&apos;re building <FiArrowUpRight />
        </TextLink>
      </AboutStory>

      <AboutCards>
        <InfoCard $accent>
          <InfoIcon><FiCrosshair /></InfoIcon>
          <CardKicker $light>CURRENT DIRECTION</CardKicker>
          <CardTitle>Reliable AI, beyond the prototype</CardTitle>
          <CardText $light>
            Building production-ready RAG, agentic, and AI search workflows on
            dependable backend foundations.
          </CardText>
          <TagRow>
            <Tag>RAG</Tag>
            <Tag>Agents</Tag>
            <Tag>Vector search</Tag>
          </TagRow>
        </InfoCard>

        <InfoCard>
          <InfoIcon><FiLayers /></InfoIcon>
          <CardKicker>HOW I WORK</CardKicker>
          <CardTitle>System-first thinking</CardTitle>
          <CardText>
            Design the interfaces, data flow, failure paths, and deployment
            story before adding unnecessary complexity.
          </CardText>
        </InfoCard>

        <InfoCard $education>
          <InfoIcon><FiBookOpen /></InfoIcon>
          <CardKicker>EDUCATION</CardKicker>
          <CardTitle>B.Tech. Computer Engineering</CardTitle>
          <CardText>Pillai College of Engineering · 2025</CardText>
          <EducationScore>8.85 CGPI</EducationScore>
        </InfoCard>
      </AboutCards>
    </AboutGrid>
  </AboutSection>
);

export default About;
