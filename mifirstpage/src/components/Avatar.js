import React from "react";
import "../App.css";
import Avatar from "/home/francisco/Workspace_2/Javascript/mifirstpage/src/assets/images/avatar.jpg";

const user = {
  name: "Francisco Vanegas",
  image: Avatar,
};

function AvatarImage() {
  return (
    <div className="avatar">
      <h1 style={{ color: "silver", textTransform: "uppercase" }}>
        {user.name}
      </h1>
      <img
        src={user.image}
        alt="My screen"
        style={{
          width: "200px",
          borderRadius: "25px",
          boxShadow: "0 0 2px 2px #ffffff",
        }}
      ></img>
    </div>
  );
}

export default AvatarImage;
