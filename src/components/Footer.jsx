import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import styled from "styled-components";

const FooterSection = styled.footer`
  padding-top: 135px;
  color: white;
  background: #161616;

  @media (max-width: 540px) { padding-top: 100px; }
`;

const Inner = styled.div`
  width: var(--container);
  margin-inline: auto;
`;

const FooterCta = styled.div`
  position: relative;
  padding-bottom: 110px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.17);

  @media (max-width: 800px) { padding-bottom: 220px; }
`;

const CardKicker = styled.span`
  color: #8f8e87;
  font: 500 12px/1.3 "DM Mono", monospace;
  letter-spacing: 0.1em;
`;

const FooterTitle = styled.h2`
  max-width: 930px;
  margin: 24px 0 28px;
  font-size: clamp(58px, 8vw, 108px);
  line-height: 0.93;
  letter-spacing: -0.075em;
  font-weight: 650;

  em { color: var(--lime); font-weight: 600; }

  @media (max-width: 540px) { font-size: clamp(50px, 15vw, 70px); }
`;

const FooterDescription = styled.p`
  max-width: 610px;
  margin: 0;
  color: #a2a19a;
  font-size: 16px;
  line-height: 1.7;
`;

const FooterMeta = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.7fr;
  gap: 50px;
  padding: 52px 0;

  @media (max-width: 800px) { grid-template-columns: 1fr 1fr; }

  @media (max-width: 540px) { grid-template-columns: 1fr; }
`;

const FooterBrand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  letter-spacing: -0.03em;
`;

const BrandMark = styled.span`
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: var(--ink);
  background: var(--lime);
  font: 500 12px/1 "DM Mono", monospace;
`;

const BrandRole = styled.small`
  color: #77766f;
  font-size: 12px;
  font-weight: 500;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ContactList = styled(LinkList)``;

const SocialList = styled(LinkList)`
  @media (max-width: 800px) { grid-column: 2; }
  @media (max-width: 540px) { grid-column: auto; }
`;

const FooterLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #aaa9a2;
  font-size: 14px;

  &:hover { color: var(--lime); }
`;

const FooterBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px 0 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  color: #6f6e68;
  font: 500 11px/1.5 "DM Mono", monospace;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
    gap: 9px;
  }
`;

const FooterCopy = styled.p`
  margin: 0;
`;

const FooterTagline = styled(FooterCopy)`
  text-align: center;

  @media (max-width: 540px) { text-align: left; }
`;

const BackToTop = styled.a`
  justify-self: end;
  color: #989790;

  @media (max-width: 540px) { justify-self: start; }
`;

const Footer = () => (
  <FooterSection id="contact">
    <Inner>
      <FooterCta>
        <CardKicker>HAVE A PROBLEM WORTH SOLVING?</CardKicker>
        <FooterTitle>
          Have a difficult
          <br />
          <em>idea?</em> Let&apos;s talk.
        </FooterTitle>
        <FooterDescription>
          I&apos;m open to software engineering opportunities across backend
          systems, applied AI, and full-stack product development.
        </FooterDescription>
      </FooterCta>

      <FooterMeta>
        <FooterBrand href="#home">
          <BrandMark>SP</BrandMark>
          <span>
            Sanjay Pandere
            <br />
            <BrandRole>Software Engineer</BrandRole>
          </span>
        </FooterBrand>

        <ContactList>
          <FooterLink href="mailto:panderesanjay26@gmail.com">
            <FiMail /> panderesanjay26@gmail.com
          </FooterLink>
          <FooterLink href="tel:+917666713672">
            <FiPhone /> +91 76667 13672
          </FooterLink>
        </ContactList>

        <SocialList>
          <FooterLink href="https://github.com/Psanjay-15" target="_blank" rel="noreferrer">
            <FiGithub /> GitHub
          </FooterLink>
          <FooterLink href="https://www.linkedin.com/in/sanjay-pandere84/" target="_blank" rel="noreferrer">
            <FiLinkedin /> LinkedIn
          </FooterLink>
        </SocialList>
      </FooterMeta>

      <FooterBottom>
        <FooterCopy>© {new Date().getFullYear()} Sanjay Pandere</FooterCopy>
        <FooterTagline>Designed for clarity. Engineered for impact.</FooterTagline>
        <BackToTop href="#home">Back to top ↑</BackToTop>
      </FooterBottom>
    </Inner>
  </FooterSection>
);

export default Footer;
