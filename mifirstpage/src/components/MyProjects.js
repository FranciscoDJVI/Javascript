import React from "react";
import DeployProject from "./Deploy";

const StyleDivProjects = {
  display: "flex",
  flexWrap: "wrap",
  marginLeft: "25%",
  marginRight: "25%",
  padding: "10px",
};

function MyProjects() {
  return (
    <div className="myprojects-div" style={StyleDivProjects}>
      <DeployProject />,
      <DeployProject />,
      <DeployProject />,
    </div>
  );
}

export default MyProjects;
