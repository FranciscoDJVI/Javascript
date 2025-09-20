import FadeInSection from "./FadeInsection";
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
      <Avatar />
      <FadeInSection>
        <PresentationText />
      </FadeInSection>
      <FadeInSection>
        <Estudies />
      </FadeInSection>
      <FadeInSection>
        <Skills />
      </FadeInSection>
      <FadeInSection>
        <ProjectsPersonal />
      </FadeInSection>
    </div>
  );
}

export default Home;
