import React from "react";
import avatar from "../assets/images/avatar.jpg";

const customStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "500px",
  fontSize: "2rem",
};

function Avatar() {
  return (
    <div clasName="avatar" style={customStyle}>
      <img className="avatar-img" src={avatar} alt="Avatar" />
      <h2>Links</h2>
      <ol>
        <li style={{ fontSize: "2rem", fontStyle: "none" }}>
          <a
            style={{ textDecoration: "none", color: "#000000" }}
            href="https://github.com/FranciscoDJVI"
          >
            Github
          </a>
        </li>
        <li style={{ fontSize: "2rem", fontStyle: "none" }}>
          <a
            style={{ textDecoration: "none", color: "#000000" }}
            href="www.linkedin.com/in/francisco-vanegas-134522229"
          >
            Linkedin
          </a>
        </li>
      </ol>
    </div>
  );
}

export default Avatar;
