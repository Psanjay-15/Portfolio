import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMapPin,
} from "react-icons/fi";
import styled, { keyframes } from "styled-components";

const revealUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Hero = styled.section`
  width: var(--container);
  min-height: calc(100vh - 76px);
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(340px, 0.65fr);
  grid-template-rows: 1fr auto;
  column-gap: clamp(44px, 6vw, 94px);
  align-items: center;
  margin-inline: auto;
  padding-top: 72px;
  padding-bottom: 34px;

  @media (max-width: 1060px) {
    grid-template-columns: 1.2fr 0.8fr;
    column-gap: 42px;
  }

  @media (max-width: 800px) {
    min-height: auto;
    grid-template-columns: 1fr;
    padding-top: 62px;
    padding-bottom: 80px;
  }
`;

const AnimatedBlock = styled.div`
  animation: ${revealUp} 650ms both cubic-bezier(0.2, 0.8, 0.2, 1);
  animation-delay: ${({ $delay = 0 }) => `${$delay}ms`};
`;

const HeroCopy = styled.div`
  max-width: 820px;
`;

const EyebrowRow = styled(AnimatedBlock)`
  display: flex;
  align-items: center;
  gap: 13px;
  margin-bottom: 30px;
  font:
    500 12px/1 "DM Mono",
    monospace;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px;
  border: 1px solid var(--ink);
  border-radius: 999px;
  background: var(--lime);

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--ink);
  }
`;

const Location = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--muted);
`;

const HeroTitle = styled.h1`
  max-width: 900px;
  margin: 0;
  font-size: clamp(60px, 7.4vw, 104px);
  line-height: 0.93;
  letter-spacing: -0.075em;
  font-weight: 700;
  animation: ${revealUp} 650ms 80ms both cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 1060px) {
    font-size: clamp(58px, 7.7vw, 80px);
  }
  @media (max-width: 800px) {
    font-size: clamp(54px, 12vw, 84px);
  }
  @media (max-width: 540px) {
    font-size: clamp(49px, 14.6vw, 68px);
  }
`;

const HeroAccent = styled.span`
  display: block;
  color: var(--blue);
  font-style: italic;
  font-weight: 600;
`;

const HeroIntro = styled.p`
  max-width: 690px;
  margin: 32px 0 0;
  color: #55554f;
  font-size: clamp(17px, 1.55vw, 21px);
  line-height: 1.65;
  animation: ${revealUp} 650ms 150ms both cubic-bezier(0.2, 0.8, 0.2, 1);
  @media (max-width: 540px) {
    font-size: 16px;
  }
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
  margin-top: 34px;
  animation: ${revealUp} 650ms 220ms both cubic-bezier(0.2, 0.8, 0.2, 1);
  @media (max-width: 540px) {
    width: 100%;
  }
`;

const ActionButton = styled.a`
  min-height: 51px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 0 20px;
  border: 1px solid var(--ink);
  border-radius: 999px;
  font-size: 13px;
  font-weight: 800;
  background: ${({ $primary }) =>
    $primary ? "var(--ink)" : "rgba(255, 253, 248, 0.7)"};
  color: ${({ $primary }) => ($primary ? "white" : "inherit")};
  transition:
    transform 180ms ease,
    background 180ms ease,
    color 180ms ease;

  &:hover {
    transform: translateY(-3px);
    color: white;
    background: var(--blue);
    border-color: var(--blue);
  }

  @media (max-width: 540px) {
    width: 100%;
  }
`;

const HeroSocials = styled.div`
  display: flex;
  gap: 21px;
  margin-top: 25px;
  animation: ${revealUp} 650ms 220ms both cubic-bezier(0.2, 0.8, 0.2, 1);
  @media (max-width: 540px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #6c6b65;
  font:
    500 12px/1 "DM Mono",
    monospace;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  &:hover {
    color: var(--blue);
  }
`;

const HeroVisual = styled(AnimatedBlock)`
  position: relative;
  width: 100%;
  max-width: 430px;
  justify-self: end;

  @media (max-width: 800px) {
    max-width: 480px;
    justify-self: center;
    margin-top: 72px;
  }
`;

const PortraitFrame = styled.div`
  position: relative;
  padding: 12px;
  border: 1.5px solid var(--ink);
  border-radius: 32px;
  background: #171717;
  box-shadow: 13px 13px 0 var(--ink);
  transform: rotate(1.5deg);

  &::before {
    content: "";
    position: absolute;
    top: -28px;
    right: 18px;
    width: 82px;
    height: 82px;
    border: 1.5px solid var(--ink);
    border-radius: 50%;
    background: var(--blue);
    z-index: -1;
  }
`;

const Portrait = styled.img`
  width: 100%;
  aspect-ratio: 0.88;
  object-fit: cover;
  object-position: center 35%;
  border: 1px solid rgba(0, 0, 0, 0.45);
  border-radius: 22px;
`;

const PortraitStamp = styled.span`
  position: absolute;
  top: 26px;
  left: 26px;
  padding: 8px 10px;
  color: white;
  background: rgba(21, 21, 21, 0.86);
  border-radius: 999px;
  font:
    500 11px/1 "DM Mono",
    monospace;
  letter-spacing: 0.08em;
`;

const PortraitCaption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 6px 4px;
`;

const PortraitDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CaptionLabel = styled.span`
  color: rgba(255, 255, 255, 0.57);
  font:
    500 12px/1.3 "DM Mono",
    monospace;
  letter-spacing: 0.1em;
`;

const CaptionValue = styled.strong`
  color: white;
  font-size: 15px;
`;

const AvailabilityDot = styled.span`
  width: 11px;
  height: 11px;
  border: 1px solid var(--ink);
  border-radius: 50%;
  background: var(--lime);
  box-shadow: 0 0 0 5px rgba(200, 255, 77, 0.18);
`;

const FloatingNote = styled.div`
  position: absolute;
  right: -14px;
  bottom: 104px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 13px 16px;
  border: 1.5px solid var(--ink);
  border-radius: 999px;
  background: var(--white);
  box-shadow: 5px 5px 0 var(--ink);
  font-size: 12px;
  font-weight: 800;
  transform: rotate(-3deg);

  @media (max-width: 540px) {
    right: 8px;
    bottom: 92px;
    max-width: 220px;
  }
`;

const StatusPulse = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #24a45f;
`;

const Metrics = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: minmax(260px, 0.34fr) 1fr;
  margin-top: 60px;
  overflow: hidden;
  border: 1.5px solid var(--ink);
  border-radius: 18px;
  background: var(--white);

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Metric = styled.div`
  min-height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 18px 24px;
  border-right: 1px solid var(--line);

  @media (max-width: 800px) {
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }
`;

const MetricValue = styled.strong`
  font-size: 32px;
  line-height: 1;
  letter-spacing: -0.05em;
`;

const MetricLabel = styled.span`
  margin-top: 7px;
  color: #717069;
  font:
    500 12px/1.5 "DM Mono",
    monospace;
  letter-spacing: 0.07em;
  text-transform: uppercase;
`;

const MetricNote = styled.div`
  min-height: 92px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: var(--lime);
  color: var(--ink);
  font:
    600 12px/1.5 "DM Mono",
    monospace;
  letter-spacing: 0.07em;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillSummaryItem = styled.span`
  min-height: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;

  & + & {
    border-left: 1px solid rgba(21, 21, 21, 0.16);
  }

  @media (max-width: 600px) {
    min-height: 70px;

    &:nth-child(3) {
      border-top: 1px solid rgba(21, 21, 21, 0.16);
      border-left: 0;
    }

    &:nth-child(4) {
      border-top: 1px solid rgba(21, 21, 21, 0.16);
    }
  }
`;

const Home = () => (
  <Hero id="home">
    <HeroCopy>
      <EyebrowRow>
        <Eyebrow>Software Engineer</Eyebrow>
        <Location>
          <FiMapPin /> India
        </Location>
      </EyebrowRow>

      <HeroTitle>
        I build the systems behind
        <HeroAccent>intelligent products.</HeroAccent>
      </HeroTitle>

      <HeroIntro>
        Software engineer focused on backend platforms, applied AI, and
        cloud-native products - from first API to production deployment.
      </HeroIntro>

      <HeroActions>
        <ActionButton $primary href="#work">
          See selected work <FiArrowDownRight />
        </ActionButton>
        <ActionButton
          href="https://drive.google.com/file/d/1YQnUbk9gmvkgmCjmqn1Q5xVsbjMwebK9/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          View resume <FiFileText />
        </ActionButton>
        <ActionButton
          href="https://calendly.com/panderesanjay26/30min"
          target="_blank"
          rel="noreferrer"
        >
          Start a conversation <FiArrowUpRight />
        </ActionButton>
      </HeroActions>

      <HeroSocials aria-label="Social links">
        <SocialLink
          href="https://github.com/Psanjay-15"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub /> GitHub
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/sanjay-pandere84/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin /> LinkedIn
        </SocialLink>
      </HeroSocials>
    </HeroCopy>

    <HeroVisual $delay={150}>
      <PortraitFrame>
        <Portrait src="/profile.png" alt="Sanjay Pandere" />
        <PortraitStamp>SP / 26</PortraitStamp>
        <PortraitCaption>
          <PortraitDetails>
            <CaptionLabel>CURRENT FOCUS</CaptionLabel>
            <CaptionValue>Backend + AI systems</CaptionValue>
          </PortraitDetails>
          <AvailabilityDot aria-label="Available for opportunities" />
        </PortraitCaption>
      </PortraitFrame>
      <FloatingNote>
        <StatusPulse />
        Open to backend &amp; applied AI roles
      </FloatingNote>
    </HeroVisual>

    <Metrics>
      <Metric>
        <MetricValue>1+ yr</MetricValue>
        <MetricLabel>Production engineering</MetricLabel>
      </Metric>
      <MetricNote>
        <SkillSummaryItem>Backend</SkillSummaryItem>
        <SkillSummaryItem>AI</SkillSummaryItem>
        <SkillSummaryItem>FullStack</SkillSummaryItem>
        <SkillSummaryItem>Cloud</SkillSummaryItem>
      </MetricNote>
    </Metrics>
  </Hero>
);

export default Home;
