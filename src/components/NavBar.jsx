import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import styled from "styled-components";

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid var(--line);
  background: rgba(243, 240, 232, 0.88);
  backdrop-filter: blur(18px);

`;

const NavWrap = styled.nav`
  width: var(--container);
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: auto;
  @media (max-width: 800px) { min-height: 68px; }
`;

const Brand = styled.a`
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
  color: white;
  background: var(--ink);
  font: 500 12px/1 "DM Mono", monospace;
`;

const BrandName = styled.span`
  @media (max-width: 800px) { display: none; }
`;

const MenuButton = styled.button`
  display: none;
  padding: 5px;
  color: var(--ink);
  background: transparent;
  border: 0;
  font-size: 26px;
  @media (max-width: 800px) { display: block; }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;
  color: #4c4c47;
  font-size: 14px;
  font-weight: 700;

  @media (max-width: 800px) {
    position: absolute;
    top: 68px;
    right: 0;
    left: 0;
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 14px 16px 20px;
    border-bottom: 1px solid var(--line);
    background: rgba(243, 240, 232, 0.98);
  }
`;

const NavLink = styled.a`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: -6px;
    left: 0;
    height: 2px;
    background: var(--blue);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 180ms ease;
  }

  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  @media (max-width: 800px) {
    padding: 14px 10px;
    border-bottom: 1px solid var(--line);
    &::after { display: none; }
  }
`;

const NavCta = styled(NavLink)`
  padding: 11px 18px;
  color: white;
  background: var(--blue);
  border-radius: 999px;
  box-shadow: 0 6px 0 #152d86;
  transition: transform 150ms ease, box-shadow 150ms ease;

  &::after { display: none; }

  &:hover {
    transform: translateY(3px);
    box-shadow: 0 3px 0 #152d86;
  }

  @media (max-width: 800px) {
    margin-top: 12px;
    border: 0;
    text-align: center;
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
          <NavLink href="https://github.com/Psanjay-15" target="_blank" rel="noreferrer">GitHub ↗</NavLink>
          <NavCta href="#contact" onClick={closeMenu}>Let&apos;s talk</NavCta>
        </NavLinks>
      </NavWrap>
    </Header>
  );
};

export default NavBar;
