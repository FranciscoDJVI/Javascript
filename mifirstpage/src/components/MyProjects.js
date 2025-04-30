import React from "react";
import DeployProject from "./Deploy";

const StyleDivProjects = {
  display: "flex",
  flexWrap: "wrap",
  marginLeft: "25%",
  marginRight: "25%",
};

function MyProjects() {
  return (
    <div className="myprojects-div" style={StyleDivProjects}>
      <DeployProject />,
      <DeployProject />,
    </div>
  );
}

export default MyProjects;
