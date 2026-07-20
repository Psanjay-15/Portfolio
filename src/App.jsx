import Home from "./components/Home";
import "./index.css";
import About from "./components/About";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <NavBar />
      <main id="main-content">
        <Home />
        <About />
        <Experience />
        <Techstack />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
