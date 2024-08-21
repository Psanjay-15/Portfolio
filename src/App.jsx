import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./index.css";
function App() {
  return (
    <>
      {/* <p className="text-6xl text-center">Hello Sanjay</p> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
