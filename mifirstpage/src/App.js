import "./App.css";
import { Routes, Route } from "react-router-dom";
import TitlePortafolio from "./components/TitlePortafolio";
import PresentationText from "./components/PresentationText";
import Estudies from "./components/Estudios";
import Avatar from "./components/Avatar";
import Skills from "./components/Skills";
import ProjectsPersonal from "./components/ProjectsPersonal";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portafolio" element={<TitlePortafolio />} />
      <Route path="/avatar" element={<Avatar />} />
      <Route path="/presentation" element={<PresentationText />} />
      <Route path="/estudies" element={<Estudies />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<ProjectsPersonal />} />
    </Routes>
  );
}

export default App;
