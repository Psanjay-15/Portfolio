import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import styled from "styled-components";

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid var(--line);
  background: rgba(10, 11, 13, 0.86);
  backdrop-filter: blur(18px);
`;

const NavWrap = styled.nav`
  width: var(--container);
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: auto;
`;

const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 11px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.02em;
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

const BrandName = styled.span`
  @media (max-width: 800px) { display: none; }
`;

const MenuButton = styled.button`
  display: none;
  padding: 6px;
  border: 0;
  color: var(--text);
  background: transparent;
  font-size: 24px;

  @media (max-width: 800px) {
    display: grid;
    place-items: center;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 600;

  @media (max-width: 800px) {
    position: absolute;
    top: 72px;
    right: 0;
    left: 0;
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 12px 16px 20px;
    border-bottom: 1px solid var(--line);
    background: rgba(10, 11, 13, 0.98);
  }
`;

const NavLink = styled.a`
  transition: color 160ms ease;

  &:hover { color: var(--text); }

  @media (max-width: 800px) {
    padding: 14px 8px;
    border-bottom: 1px solid var(--line);
  }
`;

const NavCta = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 13px;
  border: 1px solid var(--line-strong);
  border-radius: 7px;
  color: var(--text);

  @media (max-width: 800px) {
    justify-content: center;
    margin-top: 12px;
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <Header>
      <NavWrap aria-label="Primary navigation">
        <Brand href="#home" onClick={closeMenu}>
          <BrandMark>SP</BrandMark>
          <BrandName>Sanjay Pandere</BrandName>
        </Brand>

        <MenuButton
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="primary-links"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </MenuButton>

        <NavLinks $isOpen={isOpen} id="primary-links">
          <NavLink href="#about" onClick={closeMenu}>About</NavLink>
          <NavLink href="#experience" onClick={closeMenu}>Experience</NavLink>
          <NavLink href="#skills" onClick={closeMenu}>Skills</NavLink>
          <NavLink href="#work" onClick={closeMenu}>Work</NavLink>
          <NavCta href="#contact" onClick={closeMenu}>
            Contact <FiArrowUpRight />
          </NavCta>
        </NavLinks>
      </NavWrap>
    </Header>
  );
};

export default NavBar;
