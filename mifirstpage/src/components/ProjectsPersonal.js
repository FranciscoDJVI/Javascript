import React from "react";
import psys1 from "../assets/images/psys_1.jpg";
import psys2 from "../assets/images/psys_2.jpg";
import psys3 from "../assets/images/psys_3.jpg";
import psys4 from "../assets/images/psys_4.jpg";
import psys5 from "../assets/images/psys_5.jpg";
import psys6 from "../assets/images/psys_6.jpg";
import psys7 from "../assets/images/psys_7.jpg";
import psys8 from "../assets/images/psys_8.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectPersonal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const customStyleImg = {};

  return (
    <div className="projects" style={{ maxWidth: "1300px", margin: "auto" }}>
      <h2
        style={{
          fontSize: "3rem",
          position: "relative",
          top: "50%",
          transform: "traslate(-50%, -50%)",
        }}
      >
        Proyectos
      </h2>
      <Slider {...settings} style={{ marginBottom: "40px" }}>
        <div>
          <img style={customStyleImg} src={psys1} alt="psys_1" />
        </div>
        <div>
          <img style={customStyleImg} src={psys2} alt="psys_2" />
        </div>
        <div>
          <img style={customStyleImg} src={psys3} alt="psys_3" />
        </div>
        <div>
          <img style={customStyleImg} src={psys4} alt="psys_4" />
        </div>
        <div>
          <img style={customStyleImg} src={psys5} alt="psys_5" />
        </div>
        <div>
          <img style={customStyleImg} src={psys6} alt="psys_6" />
        </div>
        <div>
          <img style={customStyleImg} src={psys7} alt="psys_7" />
        </div>
        <div>
          <img style={customStyleImg} src={psys8} alt="psys_8" />
        </div>
      </Slider>
      <a
        href="https://github.com/FranciscoDJVI/work-personal"
        target="_blank"
        rel="nooponer noreferrer"
        style={{
          fontSize: "2rem",
          textDecoration: "none",
          color: "var(--secondary-color)",
          boxShadow: "3px 3px 20px #0d1b2a,-3px -3px 20px #babecc",
          marginTop: "40px",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        Enlace-Github
      </a>
    </div>
  );
};
export default ProjectPersonal;
