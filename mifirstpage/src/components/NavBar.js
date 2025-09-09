import { Link } from "react-router-dom";

const customStyleNavbar = {
  textDecoration: "none",
  margin: "10px",
  color: "#00ffff",
};

function NavBar() {
  return (
    <nav className="navbar">
      <Link style={customStyleNavbar} to="/">
        Home
      </Link>
      <Link style={customStyleNavbar} to="/presentation">
        presentacion
      </Link>
      <Link style={customStyleNavbar} to="/estudies">
        Estudios
      </Link>
      <Link style={customStyleNavbar} to="/skills">
        Skils
      </Link>
      <Link style={customStyleNavbar} to="/projects">
        Proyectos
      </Link>
    </nav>
  );
}

export default NavBar;
