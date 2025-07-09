import "./App.css";
import TitlePortafolio from "./components/TitlePortafolio";
import PresentationText from "./components/PresentationText";
import NavBar from "./components/NavBar";
import Estudies from "./components/Estudios";

function App() {
  return (
    <div className="contenedor">
      <NavBar />
      <TitlePortafolio />
      <PresentationText />
      <Estudies />
    </div>
  );
}

export default App;
