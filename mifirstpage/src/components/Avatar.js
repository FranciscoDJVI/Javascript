import React from "react";
import "../App.css";
import Avatar from "/home/francisco/Workspace_2/Javascript/mifirstpage/src/assets/images/avatar.jpg";

function AvatarImage() {
  return (
    <div className="avatar">
      <img src={Avatar} alt="My personal face" />
    </div>
  );
}

export default AvatarImage;
