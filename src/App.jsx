import Home from "./components/Home";
import "./index.css";
import { OrbitSpace } from "orbit-space";
import About from "./components/About";

function App() {
  return (
    <>
      <OrbitSpace>
        <Home />
        <About />
      </OrbitSpace>
    </>
  );
}

export default App;
