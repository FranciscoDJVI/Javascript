import React, { useState } from "react";
import ProjectsImage from "/home/francisco/Workspace_2/Javascript/mifirstpage/src/assets/images/Psys2.png";

const Items = [1];
const StyleContainerDeploy = {
  border: "1px solid black",
  padding: "10px",
  fontFamily: "Arial, sans-serif",
  textAlign: "center",
};

const StyleImage = {
  width: "200px",
  height: "200px",
  borderRadius: "15px",
};

const StyleTextYes = {
  color: "green",
};

const StyleTextNo = {
  color: "red",
};
const OptionDeploy = () => {
  if (Items.length === 0) {
    return <h5 style={StyleTextNo}>No</h5>;
  } else {
    return <h5 style={StyleTextYes}>Yes</h5>;
  }
};

function DeployProject() {
  return (
    <div className="deploy" style={StyleContainerDeploy}>
      <img src={ProjectsImage} alt="Deployimage" style={StyleImage} />
      <h5>Finished {OptionDeploy()}</h5>
    </div>
  );
}

export default DeployProject;
