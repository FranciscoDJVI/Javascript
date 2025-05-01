import React from "react";

const StyeLinks = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
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
      >
        Github
      </a>
      <a
        href="https://github.com/FranciscoDJVI"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </div>
  );
}

export default Links;
