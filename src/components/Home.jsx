import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMapPin,
} from "react-icons/fi";

const Home = () => {
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <div className="eyebrow-row reveal-up">
          <span className="eyebrow">Software Engineer</span>
          <span className="location">
            <FiMapPin /> India
          </span>
        </div>

        <h1 className="hero-title reveal-up delay-one">
          I build the systems behind
          <span>intelligent products.</span>
        </h1>

        <p className="hero-intro reveal-up delay-two">
          Software engineer focused on backend platforms, applied AI, and
          cloud-native products - from first API to production deployment.
        </p>

        <div className="hero-actions reveal-up delay-three">
          <a className="button button-primary" href="#work">
            See selected work <FiArrowDownRight />
          </a>
          <a
            className="button button-secondary"
            href="https://drive.google.com/file/d/1YQnUbk9gmvkgmCjmqn1Q5xVsbjMwebK9/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            View resume <FiFileText />
          </a>
          <a
            className="button button-secondary"
            href="mailto:panderesanjay26@gmail.com"
          >
            Start a conversation <FiArrowUpRight />
          </a>
        </div>

        <div
          className="hero-socials reveal-up delay-three"
          aria-label="Social links"
        >
          <a
            href="https://github.com/Psanjay-15"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sanjay-pandere84/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin /> LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-visual reveal-up delay-two">
        <div className="portrait-frame">
          <img src="/profile.png" alt="Sanjay Pandere" />
          <span className="portrait-stamp">SP / 26</span>
          <div className="portrait-caption">
            <div>
              <span className="caption-label">CURRENT FOCUS</span>
              <strong>Backend + AI systems</strong>
            </div>
            <span
              className="availability-dot"
              aria-label="Available for opportunities"
            />
          </div>
        </div>
        <div className="floating-note">
          <span className="status-pulse" />
          Open to backend &amp; applied AI roles
        </div>
      </div>

      <div className="hero-metrics">
        <div className="metric">
          <strong>1+ yr</strong>
          <span>Production engineering</span>
        </div>
        <div className="metric">
          <strong>20+</strong>
          <span>Public repositories</span>
        </div>
        <div className="metric">
          <strong>2</strong>
          <span>Cloud ecosystems</span>
        </div>
        <p className="metric-note">
          APIs · RAG pipelines · agents · cloud infrastructure
        </p>
      </div>
    </section>
  );
};

export default Home;
