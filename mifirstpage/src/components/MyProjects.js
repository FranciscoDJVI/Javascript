import React from "react";
import DeployProject from "./Deploy";

const StyleDivProjects = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  marginLeft: "25%",
  marginRight: "25%",
  padding: "10px",
  color: "#f0f0f0",
};

function MyProjects() {
  return (
    <div className="myprojects-div" style={StyleDivProjects}>
      <div>
        <span>My projects</span>
      </div>
      <div>
        <DeployProject />
      </div>
    </div>
  );
}

export default MyProjects;
