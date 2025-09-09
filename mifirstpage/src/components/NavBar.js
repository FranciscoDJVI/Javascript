import { Link } from "react-router-dom";

const customStyleLink = {
  textDecoration: "none",
  margin: "10px",
  color: "#000000",
  fontSize: "3rem",
  textShadow: "0 0 3px #000000 ",
};

function NavBar() {
  return (
    <nav className="navbar">
      <Link style={customStyleLink} to="/">
        Home
      </Link>
      <Link style={customStyleLink} to="/presentation">
        Presentacion
      </Link>
      <Link style={customStyleLink} to="/estudies">
        Estudios
      </Link>
      <Link style={customStyleLink} to="/skills">
        Skils
      </Link>
      <Link style={customStyleLink} to="/projects">
        Proyectos
      </Link>
    </nav>
  );
}

export default NavBar;
