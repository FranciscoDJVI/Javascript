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
          marginTop: "50px",
          width: "200px",
          height: "200px",
          borderRadius: "100%",
          boxShadow: "0 0 2px 2px #ffffff",
        }}
      ></img>
    </div>
  );
}

export default AvatarImage;
