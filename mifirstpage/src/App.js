import "./App.css";
import PrincipalTitle from "./components/PricipalTitle";
import Avatar from "./components/Avatar";
import TextPresentation from "./components/TextPresentation";
import Links from "./components/Links";
import FormContact from "./components/FormContact";

function App() {
  return (
    <div className="main">
      <PrincipalTitle />
      <Avatar />
      <TextPresentation />
      <Links />
      <FormContact />
    </div>
  );
}

export default App;
