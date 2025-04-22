import React from "react";

const viewClick = () => {
  alert("has hecho clic");
};

function Mybutton() {
  return <button onClick={viewClick}>has clic</button>;
}

export default Mybutton;
