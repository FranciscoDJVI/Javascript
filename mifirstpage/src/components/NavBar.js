import React from "react";
import link from "react-router-dom";

function NavBar() {
  function Alertss() {
    alert("has hecho clicl en algun sitio del navbar");
  }
  return (
    <nav className="navbar">
      <a href="home" onClick={Alertss}>
        Home
      </a>
      <link to="/presentation">Pesentacion</link>
      <a href="studies">Estudios</a>
      <a href="skills">Skils</a>
      <a href="projects">Proyectos</a>
    </nav>
  );
}

export default NavBar;
