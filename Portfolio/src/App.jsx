import "./App.css";

import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Contact from "./Contact.jsx";
import Projects from "./Projects.jsx";
import Home from "./Home.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
