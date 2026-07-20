import Home from "./components/Home";
import About from "./components/About";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import { GlobalStyles } from "./styles/GlobalStyles";
import styled from "styled-components";

const SiteShell = styled.div`
  position: relative;
  overflow: hidden;
`;

const SkipLink = styled.a`
  position: fixed;
  top: -90px;
  left: 22px;
  z-index: 1000;
  padding: 12px 18px;
  color: white;
  background: var(--blue);
  border-radius: 999px;
  font-weight: 700;

  &:focus { top: 20px; }
`;

function App() {
  return (
    <SiteShell>
      <GlobalStyles />
      <SkipLink href="#main-content">
        Skip to content
      </SkipLink>
      <NavBar />
      <main id="main-content">
        <Home />
        <About />
        <Experience />
        <Techstack />
        <Projects />
      </main>
      <Footer />
    </SiteShell>
  );
}

export default App;
