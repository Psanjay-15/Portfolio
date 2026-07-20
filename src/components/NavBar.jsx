import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-wrap container" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">SP</span>
          <span className="brand-name">Sanjay Pandere</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="primary-links"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`nav-links ${isOpen ? "is-open" : ""}`} id="primary-links">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="https://github.com/Psanjay-15" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s talk</a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
