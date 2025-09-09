import React from "react";
import avatar from "../assets/images/avatar.jpg";

const customStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: "500px",
  fontSize: "2rem",
  borderRadius: "25px",
  background: "#e4e4e7",
};

function Avatar() {
  return (
    <div clasName="avatar" style={customStyle}>
      <img className="avatar-img" src={avatar} alt="Avatar" />
      <ol style={{ margin: "20px" }}>
        <li style={{ fontSize: "2rem", fontStyle: "none" }}>
          <a
            style={{ textDecoration: "none", color: "#000000" }}
            href="https://github.com/FranciscoDJVI"
            target="_blank"
            rel="nooponer noreferrer"
          >
            Github
          </a>
        </li>
        <li style={{ fontSize: "2rem", fontStyle: "none" }}>
          <a
            style={{ textDecoration: "none", color: "#000000" }}
            href="https://www.linkedin.com/in/francisco-vanegas-134522229"
            target="_blank"
            rel="nooponer noreferrer"
          >
            Linkedin
          </a>
        </li>
      </ol>
    </div>
  );
}

export default Avatar;
