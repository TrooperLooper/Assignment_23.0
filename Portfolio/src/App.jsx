import "./App.css";

import About from "../Pages/About.jsx";
import Skills from "../Pages/Skills.jsx";
import Contact from "../Pages/Contact.jsx";
import Projects from "../Pages/Projects.jsx";
import Home from "../Pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
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
