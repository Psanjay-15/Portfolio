import Home from "./components/Home";
import "./index.css";
import { OrbitSpace } from "orbit-space";
import About from "./components/About";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <OrbitSpace>
        <Home />
        <About />
        <Techstack />
        <Projects />
      </OrbitSpace>
    </>
  );
}

export default App;
