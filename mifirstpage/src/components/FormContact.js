import React, { useState } from "react";
import "../App.css";

const StyleFormaContact = {
  textAlign: "center",
  fontStyle: "italic",
  fontWeight: "bold",
};

function FormContact() {
  const [inputValue, setInputValue] = useState("");
  const [TextareaValue, setTextareatValue] = useState("");

  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleChangeTextarea = (event) => {
    setTextareatValue(event.target.value);
  };
  const handleSubmit = () => {
    if (inputValue.trim() === "" && TextareaValue.trim() === "") {
      alert("Los campos no pueden estar vacio");
    } else {
      alert(
        `Los campos no están vacios correo: ${inputValue}, texto: ${TextareaValue}`,
      );
    }
  };
  return (
    <div className="formcontact">
      <form>
        <span style={StyleFormaContact}>Formulario de contacto</span>
        <input
          type="input"
          placeholder="example@example.com"
          values={inputValue}
          onChange={handleChangeInput}
        ></input>
        <textarea
          maxLength="200"
          placeholder="Subject"
          values={inputValue}
          onChange={handleChangeTextarea}
        ></textarea>
        <button onClick={handleSubmit} type="submit">
          Contactar
        </button>
      </form>
    </div>
  );
}

export default FormContact;
