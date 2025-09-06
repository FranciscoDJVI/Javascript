import React from "react";
import psys1 from "../assets/images/psys_1.jpg";
import psys2 from "../assets/images/psys_2.jpg";
import psys3 from "../assets/images/psys_3.jpg";
import psys4 from "../assets/images/psys_4.jpg";
import psys5 from "../assets/images/psys_5.jpg";
import psys6 from "../assets/images/psys_6.jpg";
import psys7 from "../assets/images/psys_7.jpg";
import psys8 from "../assets/images/psys_8.jpg";

const customStyle = {
  width: "300px",
  height: "300px",
  margin: "10px",
};

const customStyleSection = {
  background: "#000000",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

function ProjectsPersonal() {
  return (
    <div className="projects-personal">
      <span style={{ fontSize: "2rem" }}>Psys</span>
      <p
        style={{
          fontSize: "2rem",
          textAlign: "justify",
        }}
      >
        PsysMsql es una aplicación web completa de gestión de ventas
        desarrollada con Django que permite administrar productos, stock, ventas
        y usuarios con diferentes roles y permisos.
      </p>
      <section className="projects-psys" style={customStyleSection}>
        <img style={customStyle} src={psys1} alt="psys_1" />
        <img style={customStyle} src={psys2} alt="psys_2" />
        <img style={customStyle} src={psys3} alt="psys_3" />
        <img style={customStyle} src={psys4} alt="psys_4" />
        <img style={customStyle} src={psys5} alt="psys_5" />
        <img style={customStyle} src={psys6} alt="psys_6" />
        <img style={customStyle} src={psys7} alt="psys_7" />
        <img style={customStyle} src={psys8} alt="psys_8" />
      </section>
    </div>
  );
}

export default ProjectsPersonal;
