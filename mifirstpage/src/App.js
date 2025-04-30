import "./App.css";
import AvatarImage from "./components/Avatar";
import TextPresentation from "./components/TextPresentation";
import Links from "./components/Links";
import MyProjects from "./components/MyProjects";
import FormContact from "./components/FormContact";

function App() {
  return (
    <div className="main">
      <AvatarImage />,
      <TextPresentation />,
      <Links />,
      <MyProjects />,
      <FormContact />,
    </div>
  );
}

export default App;
