import "./App.css";
import TitlePortafolio from "./components/TitlePortafolio";
import PresentationText from "./components/PresentationText";
import NavBar from "./components/NavBar";
import Estudies from "./components/Estudios";
import Avatar from "./components/Avatar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="portfolio">
      <NavBar />
      <div className="header">
        <TitlePortafolio />
        <Avatar />
      </div>
      <PresentationText />
      <Estudies />
      <Skills />
    </div>
  );
}

export default App;
