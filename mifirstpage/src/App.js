import "./App.css";
import AvatarImage from "./components/Avatar";
import TextPresentation from "./components/TextPresentation";
import Links from "./components/Links";
import MyProjects from "./components/MyProjects";
import FormContact from "./components/FormContact";
import Footer from "./components/footer";
import Skill from "./components/skill";

function App() {
  return (
    <div className="main">
      <AvatarImage />,
      <TextPresentation />,
      <Links />,
      <MyProjects />,
      <Skill />,
      <FormContact />,
      <Footer />,
    </div>
  );
}

export default App;
