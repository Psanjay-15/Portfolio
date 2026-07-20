import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-cta">
          <span className="card-kicker">HAVE A PROBLEM WORTH SOLVING?</span>
          <h2>Let&apos;s build something<br /><em>dependable.</em></h2>
          <p>I&apos;m open to software engineering opportunities across backend systems, applied AI, and full-stack product development.</p>
          <a className="button footer-button" href="mailto:panderesanjay26@gmail.com">
            Get in touch <FiArrowUpRight />
          </a>
        </div>

        <div className="footer-meta">
          <a className="footer-brand" href="#home">
            <span className="brand-mark">SP</span>
            <span>Sanjay Pandere<br /><small>Software Engineer</small></span>
          </a>

          <div className="contact-list">
            <a href="mailto:panderesanjay26@gmail.com"><FiMail /> panderesanjay26@gmail.com</a>
            <a href="tel:+917666713672"><FiPhone /> +91 76667 13672</a>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/Psanjay-15" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/sanjay-pandere84/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Sanjay Pandere</p>
          <p>Designed for clarity. Engineered for impact.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
