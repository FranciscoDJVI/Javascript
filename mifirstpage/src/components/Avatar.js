import React from "react";
import "../App.css";
import Avatar from "/home/francisco/Workspace_2/Javascript/mifirstpage/src/assets/images/avatar.jpg";

const user = {
  name: "Francisco Vanegas",
  image: Avatar,
  imageSize: 90,
};

function AvatarImage() {
  return (
    <div className="avatar">
      <h1>{user.name}</h1>
      <img src={user.image} alt="My personal photo" />
    </div>
  );
}

export default AvatarImage;
