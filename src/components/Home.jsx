import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMapPin,
} from "react-icons/fi";
import styled, { keyframes } from "styled-components";

const reveal = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Hero = styled.section`
  width: var(--container);
  min-height: calc(100svh - 72px);
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(290px, 0.55fr);
  grid-template-rows: 1fr auto;
  gap: 60px clamp(44px, 7vw, 100px);
  align-items: center;
  margin-inline: auto;
  padding: clamp(76px, 9vw, 118px) 0 54px;

  @media (max-width: 880px) {
    min-height: auto;
    grid-template-columns: 1fr;
    padding-top: 72px;
  }
`;

const HeroCopy = styled.div`
  max-width: 780px;
`;

const Kicker = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
  color: var(--muted);
  font:
    500 11px/1.4 "DM Mono",
    monospace;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  animation: ${reveal} 520ms both ease-out;
`;

const Availability = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--accent);

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
    box-shadow: 0 0 0 4px rgba(194, 204, 192, 0.1);
  }
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-size: clamp(52px, 6.8vw, 92px);
  line-height: 1.01;
  letter-spacing: -0.068em;
  font-weight: 650;
  animation: ${reveal} 560ms 70ms both ease-out;

  span {
    color: var(--accent);
  }

  @media (max-width: 540px) {
    font-size: clamp(47px, 14vw, 66px);
  }
`;

const HeroIntro = styled.p`
  max-width: 690px;
  margin: 30px 0 0;
  color: var(--muted);
  font-size: clamp(17px, 1.5vw, 20px);
  line-height: 1.72;
  animation: ${reveal} 560ms 140ms both ease-out;
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 34px;
  animation: ${reveal} 560ms 210ms both ease-out;
`;

const ActionButton = styled.a`
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 0 17px;
  border: 1px solid
    ${({ $primary }) => ($primary ? "var(--accent)" : "var(--line-strong)")};
  border-radius: 8px;
  color: ${({ $primary }) => ($primary ? "var(--accent-ink)" : "var(--text)")};
  background: ${({ $primary }) => ($primary ? "var(--accent)" : "transparent")};
  font-size: 13px;
  font-weight: 700;
  transition:
    transform 160ms ease,
    border-color 160ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--accent);
  }

  @media (max-width: 540px) {
    width: 100%;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 25px;
  animation: ${reveal} 560ms 240ms both ease-out;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--subtle);
  font:
    500 11px/1 "DM Mono",
    monospace;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  transition: color 160ms ease;

  &:hover {
    color: var(--text);
  }
`;

const PortraitWrap = styled.div`
  width: 100%;
  max-width: 370px;
  justify-self: end;
  animation: ${reveal} 620ms 120ms both ease-out;

  @media (max-width: 880px) {
    max-width: 500px;
    justify-self: start;
  }
`;

const PortraitFrame = styled.div`
  overflow: hidden;
  border: 1px solid var(--line-strong);
  border-radius: 16px;
  background: var(--surface);
`;

const Portrait = styled.img`
  width: 100%;
  aspect-ratio: 0.9;
  object-fit: cover;
  object-position: center 28%;
  filter: saturate(0.52) contrast(1.03);
`;

const PortraitMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 18px;
  padding: 17px 18px;
  border-top: 1px solid var(--line);
`;

const Location = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--muted);
  font-size: 12px;
`;


const Home = () => (
  <Hero id="home">
    <HeroCopy>
      <Kicker>
        <Availability>Open to opportunities</Availability>
        <span>Software Engineer · Full-stack</span>
      </Kicker>
      <HeroTitle>
        I build <span>complete products</span> from idea to production.
      </HeroTitle>
      <HeroIntro>
        Software engineer with end-to-end experience across frontend, backend,
        cloud, and applied AI—turning complex requirements into reliable
        products that are useful, maintainable, and ready for real users.
      </HeroIntro>
      <HeroActions>
        <ActionButton $primary href="#work">
          View selected work <FiArrowDownRight />
        </ActionButton>
        <ActionButton
          href="https://drive.google.com/file/d/1YQnUbk9gmvkgmCjmqn1Q5xVsbjMwebK9/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume <FiFileText />
        </ActionButton>
        <ActionButton
          href="https://calendly.com/panderesanjay26/30min"
          target="_blank"
          rel="noreferrer"
        >
          Schedule a call <FiArrowUpRight />
        </ActionButton>
      </HeroActions>
      <SocialLinks aria-label="Social links">
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
      </SocialLinks>
    </HeroCopy>

    <PortraitWrap>
      <PortraitFrame>
        <Portrait src="/profile.png" alt="Sanjay Pandere" />
        <PortraitMeta>
          {/* <div>
            <PortraitLabel>Current focus</PortraitLabel>
            <PortraitValue>End-to-end product engineering</PortraitValue>
          </div> */}
          <Location>
            <FiMapPin /> India
          </Location>
        </PortraitMeta>
      </PortraitFrame>
    </PortraitWrap>
    {/*
    <ProofBar aria-label="Engineering focus areas">
      <ProofItem>
        <ProofValue>Product systems</ProofValue>
        <ProofLabel>APIs, data, authorization &amp; real-time systems</ProofLabel>
      </ProofItem>
      <ProofItem>
        <ProofValue>Intelligent features</ProofValue>
        <ProofLabel>RAG, agents, grounding &amp; action controls</ProofLabel>
      </ProofItem>
      <ProofItem>
        <ProofValue>Full-stack + cloud</ProofValue>
        <ProofLabel>React, Docker, AWS, Azure &amp; CI/CD</ProofLabel>
      </ProofItem>
    </ProofBar> */}
  </Hero>
);

export default Home;
