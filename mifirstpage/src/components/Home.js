import Rect from "react";
import TitlePortafolio from "./TitlePortafolio";
import PresentationText from "./PresentationText";
import NavBar from "./NavBar";
import Estudies from "./Estudios";
import Avatar from "./Avatar";
import Skills from "./Skills";
import ProjectsPersonal from "./ProjectsPersonal";

function Home() {
  return (
    <div className="container">
      <NavBar />
      <TitlePortafolio />
      <Avatar />
      <PresentationText />
      <Estudies />
      <Skills />
      <ProjectsPersonal />
    </div>
  );
}

export default Home;
