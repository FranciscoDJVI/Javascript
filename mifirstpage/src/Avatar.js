import React from "react";
import MiImagen from "../src/images/fondods-negro-puro.png";

function MyAvatar() {
  return (
    <div>
      <img className="avatar" src={MiImagen} alt="My avatar" />
    </div>
  );
}

export default MyAvatar;
