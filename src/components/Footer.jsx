import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import styled from "styled-components";

const FooterSection = styled.footer`
  border-top: 1px solid var(--line);
  background: var(--background);
`;

const Inner = styled.div`
  width: var(--container);
  margin-inline: auto;
`;

const FooterCta = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 44px;
  align-items: end;
  padding: clamp(86px, 10vw, 132px) 0;
  border-bottom: 1px solid var(--line);

  @media (max-width: 760px) { grid-template-columns: 1fr; align-items: start; }
`;

const Kicker = styled.span`
  color: var(--accent);
  font: 500 10px/1.4 "DM Mono", monospace;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const FooterTitle = styled.h2`
  max-width: 770px;
  margin: 20px 0 22px;
  font-size: clamp(46px, 6.5vw, 84px);
  line-height: 1.03;
  letter-spacing: -0.065em;
  font-weight: 620;
`;

const FooterDescription = styled.p`
  max-width: 600px;
  margin: 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.72;
`;

const ContactButton = styled.a`
  min-height: 49px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 0 17px;
  border: 1px solid var(--accent);
  border-radius: 8px;
  color: var(--accent-ink);
  background: var(--accent);
  font-size: 13px;
  font-weight: 700;
  transition: transform 160ms ease;

  &:hover { transform: translateY(-2px); }
`;

const FooterMeta = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 34px;
  align-items: center;
  padding: 34px 0;

  @media (max-width: 700px) { grid-template-columns: 1fr; align-items: start; }
`;

const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 11px;
  font-size: 14px;
  font-weight: 700;
`;

const BrandMark = styled.span`
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border: 1px solid var(--line-strong);
  border-radius: 7px;
  color: var(--accent);
  background: var(--surface);
  font: 500 11px/1 "DM Mono", monospace;
`;

const LinkGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
`;

const FooterLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--muted);
  font-size: 12px;

  &:hover { color: var(--text); }
`;

const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 0 28px;
  border-top: 1px solid var(--line);
  color: var(--subtle);
  font: 500 10px/1.5 "DM Mono", monospace;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  @media (max-width: 540px) { align-items: flex-start; flex-direction: column; }
`;

const Footer = () => (
  <FooterSection id="contact">
    <Inner>
      <FooterCta>
        <div>
          <Kicker>Open to software engineering opportunities</Kicker>
          <FooterTitle>Have a system worth building?</FooterTitle>
          <FooterDescription>
            I&apos;m interested in software engineering roles where I can work
            across product features, system design, intelligent workflows, and
            cloud delivery to turn complex problems into dependable products.
          </FooterDescription>
        </div>
        <ContactButton href="https://calendly.com/panderesanjay26/30min" target="_blank" rel="noreferrer">
          Schedule a conversation <FiArrowUpRight />
        </ContactButton>
      </FooterCta>

      <FooterMeta>
        <Brand href="#home"><BrandMark>SP</BrandMark> Sanjay Pandere</Brand>
        <LinkGroup>
          <FooterLink href="mailto:panderesanjay26@gmail.com"><FiMail /> Email</FooterLink>
          <FooterLink href="https://github.com/Psanjay-15" target="_blank" rel="noreferrer"><FiGithub /> GitHub</FooterLink>
          <FooterLink href="https://www.linkedin.com/in/sanjay-pandere84/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</FooterLink>
        </LinkGroup>
      </FooterMeta>

      <FooterBottom>
        <span>© {new Date().getFullYear()} Sanjay Pandere</span>
        <span>Built with React · Designed for clarity</span>
      </FooterBottom>
    </Inner>
  </FooterSection>
);

export default Footer;
