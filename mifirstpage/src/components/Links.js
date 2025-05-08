import React from "react";

const StyeLinks = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
};

const StyleA = {
  padding: "5px",
  background: "#f0f0f0",
  color: "#000000",
  borderRadius: "10px",
  margin: "5px",
  pading: "10px",
};

function Links() {
  return (
    <div className="link" style={StyeLinks}>
      <span>My links</span>
      <br />
      <a
        href="https://github.com/FranciscoDJVI"
        target="_blank"
        rel="noopener noreferrer"
        style={StyleA}
      >
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/francisco-vanegas-134522229/"
        target="_blank"
        rel="noopener noreferrer"
        style={StyleA}
      >
        linkedin
      </a>
    </div>
  );
}

export default Links;
