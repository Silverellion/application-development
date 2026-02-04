import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <Form
        name={name}
        email={email}
        onNameChange={setName}
        onEmailChange={setEmail}
      />

      <div>
        <p className="title">Preview</p>
        <hr />
        <p className="regular">Name: {name}</p>
        <p className="regular">Email: {email}</p>
      </div>
    </>
  );
};

export default App;
