import React from "react";
import "./Form.css";

const Form = ({ name, email, onNameChange, onEmailChange }) => {
  return (
    <div className="form">
      <p className="title">Form</p>
      <hr />

      <p className="regular">Name</p>
      <input
        type="text"
        placeholder="James"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />

      <p className="regular">Email</p>
      <input
        type="email"
        placeholder="abc@yourcompany.com"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
      />
    </div>
  );
};

export default Form;
